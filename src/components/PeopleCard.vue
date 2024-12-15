<script setup lang="ts">
import type People from '@/types/People';


defineProps<{person: People}>()
</script>

<template>
    <div class="person-card">
      <img :src="person.avatar" :alt="person.avatar" class="person-card-image">
      <div class="person-card-content">
        <h2 class="person-card-firstname">{{ person.first_name }}</h2>
        <p class="person-card-lastname">{{ person.last_name }}</p>
        <p class="person-card-email">{{ person.email }}</p>
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
   height: 300px;
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
   }

   .person-card-lastname {
   font-size: 1em;
   color: #777;
   margin-bottom: 12px;
   }

   .person-card-email {
   font-size: 0.95em;
   color: #555;
   line-height: 1.5;
   overflow: hidden;
   text-overflow: ellipsis;
   -webkit-line-clamp: 3;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   }

   .person-card:hover .person-card-image {
   opacity: 0.9;
   }
</style>