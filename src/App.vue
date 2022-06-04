<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="app flex flex-col items-center">
		<h1 class="text-3xl my-8">Gratitude Journal</h1>
		<nav class="flex content-center justify-around bg-emerald-50">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/entries">Entries</RouterLink>
		</nav>

		<RouterView />
	</div>
</template>
