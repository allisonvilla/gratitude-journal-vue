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
	<div
		class="rounded-lg bg-emerald-50 p-5 mb-7 mx-4 flex flex-col items-center w-96"
		key="props.id"
	>
		<p class="mb-4">{{ entry }}</p>
		<p class="text-sm text-slate-800 mb-3">{{ time }}</p>
		<p class="text-sm text-slate-800">
			<button
				class="bg-white hover:bg-transparent p-2 rounded-full mx-3"
				@click="handleLike"
			>
				💖
			</button>
			<span class="likes-count">{{ likes }} likes</span>
		</p>
	</div>
</template>
