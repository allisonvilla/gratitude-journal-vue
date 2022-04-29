<script setup>
import firebase from '../firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';

// Event handler for text change in form

// Event handler for submitting entry to database

</script>

<template>
    <div class="submit-form">
        <form action="">
            <label htmlFor="submission">What are you grateful for today?</label>
            <input type="textarea" name="submission" id="submission" placeholder="Today, I'm grateful for..." />
            <button>Submit</button>
        </form>
    </div>
</template>

<style>
</style>