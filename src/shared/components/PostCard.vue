<script setup lang="ts">
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

defineProps<{ post: IPost }>();
</script>

<template>
  <div class="post_container">
    <h3 class="post_title">{{ post.title }}</h3>
    <p class="post_content">{{ post.body }}</p>
  </div>
</template>

<style scoped>
.post_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
}

.post_title {
  font-size: 25px;
  font-weight: bold;
}
</style>
