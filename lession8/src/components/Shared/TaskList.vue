<template>
  <div class="w-100 row mx-0">
    <div v-for="task in todoList" :key="task.id" class="alert alert-primary col-xl-3 col-lg-4 col-md-6" role="alert">
      <p class="title font-weight-bold mb-2">{{ task.title }}</p>
      <span class="timmer">{{ task.created_at }}</span>
      <p class="content-p mt-3">{{ task.content }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["todoList"],
    data() {
      return {};
    },
  };
</script>

<style></style>
