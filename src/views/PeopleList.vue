<script setup lang="ts">
import PeopleCard from '@/components/PeopleCard.vue';
import data_people from '@/data/data_people';
import type People from '@/types/People';
import { ref, computed } from 'vue';

const people = ref<People[]>();
people.value = data_people.getPeople();

const sortType = ref('a-z')

function handleOptionChange(){
  console.log(sortType.value)
}

const filtered = computed(()=>{
  switch (sortType.value) {
    case "a-z":
      return people.value?.sort((a,b) => a.first_name.localeCompare(b.first_name))
      break;
    case "z-a":
      return people.value?.sort((a,b) => b.first_name.localeCompare(a.first_name))
      break;
    default:
      break;
  }
})

</script>

<template>
  <h1 class="display-5">Emberek</h1>
  <div class="container">
    <span>Sort: </span>
    <select @change="handleOptionChange" v-model="sortType" name="sort" id="sort">
      <option selected value="a-z">a-z</option>
      <option value="z-a">z-a</option>
    </select>
  </div>
  <div class="person-container">
    <RouterLink v-for="person in filtered" :to="`/details/${person.id}`" :people="people">
      <PeopleCard :person="person" />  
    </RouterLink>
  </div>
</template>


<style scoped>
  .person-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 20px;
    justify-items: center;
    gap: 20px;
    flex-direction: column;
  }


</style>