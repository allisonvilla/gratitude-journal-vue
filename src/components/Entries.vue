<script setup>
import database from '../firebaseConfig';
import Entry from './Entry.vue';
import { ref, onValue } from 'firebase/database';
import { reactive } from 'vue';

// Reactive variable that will hold the entries returned from Firebase 
const entries = reactive([]);

// Make reference to our database 
const dbRef = ref(database);

// When an entry is added by a user or a likes count is updated, update the entries variable 
onValue(dbRef, (response) => {
    // Clear entries array to avoid duplicate renders on like
    entries.splice(0, entries.length);

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
});
</script>

<template>
    <Entry v-for="item in entries" v-bind="item" />
</template>

<style>
</style>