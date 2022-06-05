<script setup>
import database from '@/firebaseConfig';
import { ref, update } from 'firebase/database';

const props = defineProps(['id', 'entry', 'time', 'likes']);

// Function that increases likes count on button click
const handleLike = () => {
	update(ref(database, props.id), {
		likes: props.likes + 1,
	});
};
</script>

<template>
	<div class="user-entry" key="props.id">
		<p class="entry-text">{{ entry }}</p>
		<p class="timestamp">{{ time }}</p>
		<p class="likes">
			<button class="like-btn" @click="handleLike">💖</button>
			<span class="likes-count">{{ likes }} likes</span>
		</p>
	</div>
</template>
