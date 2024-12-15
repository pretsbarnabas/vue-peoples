<script setup lang="ts">
import type People from '@/types/People';


defineProps<{person: People}>()
</script>

<template>
    <div class="person-card">
      <img :src="person.avatar" :alt="person.avatar" class="person-card-image">
      <div class="person-card-content">
        <h2 class="person-card-firstname">{{ person.first_name }}</h2>
      </div>
    </div>
</template>


<style scoped>

   .person-card {
   background-color: #fff;
   border-radius: 12px;
   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
   overflow: hidden;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
   cursor: pointer;
   max-height: fit-content;
   max-width: fit-content
   }

   .person-card-image {
   width: 100%;
   height: fit-content;
   object-fit: cover;
   transition: opacity 0.3s ease;
   }

   .person-card-content {
   padding: 16px;
   }

   .person-card-firstname {
   font-size: 1.4em;
   font-weight: 600;
   color: #333;
   margin-bottom: 8px;
   text-decoration: none;
   }

   .person-card:hover .person-card-image {
   opacity: 0.9;
   }
</style>