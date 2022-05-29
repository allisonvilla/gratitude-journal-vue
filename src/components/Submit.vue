<script setup>
import database from '../firebaseConfig';
import { ref, set } from 'firebase/database';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const userInput = reactive({ entry: '', submitted: false });

// Event handler for submitting entry to database
const handleSubmit = (event) => {
	event.preventDefault();

	// Create a post ID using current time
	const postID = Date.now().toString();

	// Store current date and time in timestamp variable
	const dateFormat = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'Canada/Eastern',
		timeZoneName: 'short',
		hour: 'numeric',
		minute: 'numeric',
	};

	const timestamp = new Intl.DateTimeFormat('en-CA', dateFormat).format(
		Date.now()
	);

	// Push user entry to Firebase
	set(ref(database, postID), {
		entry: userInput.entry,
		time: timestamp,
		// Initialize likes count as 0
		likes: 0,
	});

	userInput.submitted = true;

	// Reset user input
	userInput.entry = '';
};
</script>

<template>
	<div class="submit-form">
		<form action="">
			<label htmlFor="submission">What are you grateful for today?</label>
			<input
				type="textarea"
				name="submission"
				id="submission"
				placeholder="Today, I'm grateful for..."
				v-model="userInput.entry"
			/>
			<button @click="handleSubmit">Submit</button>
		</form>

		<p v-if="userInput.submitted">Thanks for submitting an entry!</p>
		<p v-if="userInput.submitted">
			See what others are grateful for
			<RouterLink to="/entries">here</RouterLink>.
		</p>
	</div>
</template>

<style></style>
