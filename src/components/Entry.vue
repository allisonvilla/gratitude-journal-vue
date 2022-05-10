<script setup>
import database from '../firebaseConfig';
import { ref, set } from 'firebase/database';

defineProps(['id', 'entry', 'time', 'likes']); 

// Function that increases likes count on button click 
const handleLike = () => {
    console.log(id);
    // Update likes count in database 
    // set(ref(database, id), {
    //     likes: likes++, 
    // }); 
}
</script>

<template>
<div class="user-entry" key="id">
    <p class="entry-text">{{id}}</p>
    <p class="timestamp">{{time}}</p>
    <p class="likes">
        <button class="likes-button" @click="handleLike">💖</button> 
        <span class="likes-count">{{likes}} likes</span>
    </p>
</div>
</template>

<style>

</style>