<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="flex flex-col items-center">
		<h1 class="text-5xl my-10 font-heading whitespace-nowrap">
			Gratitude Journal
		</h1>
		<nav class="flex content-center justify-around mb-10">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/entries">Entries</RouterLink>
		</nav>

		<RouterView />
		<footer class="text-center py-5 mt-7">
			Made with ❤️ by
			<a
				href="https://github.com/allisonvilla"
				target="blank"
				rel="noreferrer noopener"
				class="sort-btn mx-0 hover:underline-offset-4"
				>Allison Villa</a
			>
		</footer>
	</div>
</template>
