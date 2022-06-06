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

const matchingEntries = computed(() => {
	return entries.filter((item) => {
		if (item.entry.includes(search.query)) {
			return item;
		}
	});
});

const sortStatus = reactive({
	newestFirst: true,
	mostLiked: false,
});

// Sort entries by chronological order
const sortEntries = () => {
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

// Change chronological sort order preference then sort
const changeSortOrder = () => {
	sortStatus.newestFirst = !sortStatus.newestFirst;
	sortEntries();
};

// If user selects sorting by "most liked", return entries in order of most liked, else sort only by chronological order
const sortLiked = () => {
	sortStatus.mostLiked = !sortStatus.mostLiked;
	if (sortStatus.mostLiked) {
		entries.sort((a, b) => {
			return b.likes - a.likes;
		});
	} else {
		sortEntries();
	}
};

// Make reference to database
const dbRef = ref(database);

// When an entry is added by a user or a likes count is updated, update the entries array
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
	sortEntries();
});

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};
</script>

<template>
	<section class="flex flex-col items-center mt-5">
		<h2 class="text-3xl mb-5 font-heading smol:text-2xl">
			More reasons to be grateful
		</h2>

		<div>
			<label htmlFor="search" class="mr-3 smol:mr-2">Search: </label>
			<input
				type="textarea"
				name="search"
				id="search"
				v-model="search.query"
				placeholder="Looking for something?"
				class="smol:py-2 px-4"
			/>
		</div>

		<div class="sort-buttons mb-8">
			<button
				@click="changeSortOrder"
				class="sort-btn"
				v-if="!sortStatus.mostLiked"
			>
				{{
					sortStatus.newestFirst ? 'Sort by oldest' : 'Sort by newest'
				}}
			</button>
			<button @click="sortLiked" class="sort-btn">
				{{
					sortStatus.mostLiked ? 'Sort by date' : 'Sort by most liked'
				}}
			</button>
		</div>
		<div class="w-full flex flex-col items-center max-w-2xl">
			<Entry
				v-if="search.query"
				v-for="item in matchingEntries"
				v-bind="item"
			/>
			<Entry v-else v-for="item in entries" v-bind="item" />
			<p v-if="search.query && !matchingEntries.length" class="mb-7">
				Sorry, we couldn't find anything matching your search. Why don't
				you
				<RouterLink to="/" class="sort-btn m-0 hover:underline-offset-4"
					>submit your own</RouterLink
				>?
			</p>
		</div>

		<RouterLink class="sort-btn mb-6" to @click="scrollToTop">
			Scroll to top
		</RouterLink>
	</section>
</template>
