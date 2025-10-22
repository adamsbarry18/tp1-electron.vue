<template>
  <h1>Welcome to Page 2</h1>
</template>

<script setup>
import log from 'electron-log/renderer';
import { onMounted } from 'vue';

onMounted(() => {
  log.info('Page2 mounted in renderer process');
});
</script>
