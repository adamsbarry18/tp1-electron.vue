<template>
  <h1>Liste des films</h1>
  <div class="movie-list">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>Description : {{ movie.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);
onMounted(async () => {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/Chocolaterie/EniWebService/main/api/movies.json'
    );
    movies.value = await res.json();
  } catch (err) {
    console.log('Erreur : ', err);
  }
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
