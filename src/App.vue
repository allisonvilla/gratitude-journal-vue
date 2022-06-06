<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="flex flex-col items-center h-screen justify-between">
		<header>
			<h1
				class="text-5xl my-10 font-heading whitespace-nowrap smol:text-4xl"
			>
				Gratitude Journal
			</h1>
			<nav class="flex content-center justify-center mb-10">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/entries">Entries</RouterLink>
			</nav>
		</header>

		<RouterView />

		<footer class="text-center py-5 mt-7">
			Made with ❤️ by
			<a
				href="https://github.com/allisonvilla/gratitude-journal-vue"
				target="blank"
				rel="noreferrer noopener"
				class="sort-btn mx-0 hover:underline-offset-4"
				>Allison Villa</a
			>
		</footer>
	</div>
</template>
