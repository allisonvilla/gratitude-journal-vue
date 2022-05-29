<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="wrapper">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/entries">Entries</RouterLink>
		</nav>
	</div>

	<RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
