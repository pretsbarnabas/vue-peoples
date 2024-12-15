<script setup lang="ts">
import type People from '@/types/People';
import data_people from '@/data/data_people';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const people = ref<People[]>([]);
people.value = data_people.getPeople()

const id = parseInt(route.params.id as string)
const selectedPerson = people.value.find((person)=> person.id === id)

</script>

<template>
    <p onclick="history.back()" class="back-button">&#8592 Back</p>
    <div class="profile-container">
        <img :src="selectedPerson?.avatar" alt="Avatar" class="profile-avatar">
        <h1 class="display-5">{{ selectedPerson?.first_name }} {{ selectedPerson?.last_name }}</h1>
        <h2>{{ selectedPerson?.email }}</h2>
    </div>
</template>

<style scoped>

.back-button:hover{
    cursor: pointer;
}
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

.profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #007bff;
    margin-bottom: 1rem;
}

h1.display-5 {
    font-size: 2rem;
    color: #333;
    margin: 0;
}

h2 {
    font-size: 1.1rem;
    color: #777;
    margin-top: 0.5rem;
}
</style>
