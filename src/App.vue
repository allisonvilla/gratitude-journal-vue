<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="flex flex-col items-center">
		<h1 class="text-4xl my-10">Gratitude Journal</h1>
		<nav class="flex content-center justify-around mb-10">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/entries">Entries</RouterLink>
		</nav>

		<RouterView />
	</div>
</template>
