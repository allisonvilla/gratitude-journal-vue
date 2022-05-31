<script setup>
import { ref, onValue } from 'firebase/database';
import { reactive, computed } from 'vue';
import { RouterLink } from 'vue-router';
import database from '@/firebaseConfig.js';
import Entry from '@/components/Entry.vue';

// Reactive variable that will hold the entries returned from Firebase
const entries = reactive([]);

// Reactive variable that will hold user's query
const search = reactive({
	query: null,
});

const sortStatus = reactive({
	newestFirst: true,
	mostLiked: false,
});

const matchingEntries = computed(() => {
	return entries.filter((item) => {
		if (item.entry.includes(search.query)) {
			return item;
		}
	});
});

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
	entries.reverse();
});

const sortEntries = () => {
	sortStatus.newestFirst = !sortStatus.newestFirst;
	if (sortStatus.newestFirst) {
		entries.sort((a, b) => {
			return b.id - a.id;
		});
	} else {
		entries.sort((a, b) => {
			return a.id - b.id;
		});
	}
};

const sortLiked = () => {
	sortStatus.mostLiked = !sortStatus.mostLiked;
	if (!sortStatus.mostLiked) {
		if (sortStatus.newestFirst) {
			entries.sort((a, b) => {
				return b.id - a.id;
			});
		} else {
			entries.sort((a, b) => {
				return a.id - b.id;
			});
		}
	} else {
		entries.sort((a, b) => {
			return b.likes - a.likes;
		});
	}
};
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
		<div class="sort-buttons">
			<button @click="sortEntries">
				{{
					sortStatus.newestFirst ? 'Sort by oldest' : 'Sort by newest'
				}}
			</button>
			<button @click="sortLiked">Sort by most liked</button>
		</div>
		<div class="entries">
			<Entry
				v-if="search.query"
				v-for="item in matchingEntries"
				v-bind="item"
			/>
			<Entry v-else v-for="item in entries" v-bind="item" />
			<p
				v-if="search.query && !matchingEntries.length"
				class="search-fail"
			>
				Sorry, we couldn't find anything matching your search. Why don't
				you <RouterLink to="/">submit your own</RouterLink>?
			</p>
		</div>
	</section>
</template>
