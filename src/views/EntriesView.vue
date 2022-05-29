<script setup>
import { ref, onValue } from 'firebase/database';
import { reactive, computed } from 'vue';
import database from '@/firebaseConfig.js';
import Entry from '@/components/Entry.vue';

// Reactive variable that will hold the entries returned from Firebase
const entries = reactive([]);

// Reactive variable that will hold user's query
const search = reactive({
	query: '',
});

const matchingEntries = computed(() => {
	let filter = search.query;
	return;
});

console.log(matchingEntries.value);

// Make reference to our database
const dbRef = ref(database);

// When an entry is added by a user or a likes count is updated, update the entries variable
onValue(dbRef, (response) => {
	// Clear entries array to avoid duplicate renders on like
	entries.splice(0);

	// Store the response in a variable
	const data = response.val();

	for (let key in data) {
		entries.push({
			id: key,
			entry: data[key].entry,
			time: data[key].time,
			likes: data[key].likes,
		});
	}
});
</script>

<template>
	<section class="entries">
		<h1>More reasons to be grateful</h1>
		<form>
			<label htmlFor="search">Search: </label>
			<input
				type="textarea"
				name="search"
				id="search"
				v-model="search.query"
				placeholder="Looking for something?"
			/>
		</form>
		<div class="entries">
			<Entry v-for="item in entries" v-bind="item" />
		</div>
	</section>
</template>
