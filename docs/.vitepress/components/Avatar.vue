<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  link: { type: String, required: true },
});
</script>

<template>
  <a :href="link" target="_blank">
    <img class="avatar" :src="src">
  </a>
</template>

<style scoped lang="scss">
a {
  padding-right: 10px;
}
.avatar {
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 25px;
}
</style>
