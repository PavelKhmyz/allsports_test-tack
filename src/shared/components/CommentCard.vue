<script setup lang="ts">
export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

defineProps<{ comment: IComment }>();
</script>

<template>
  <div class="comment_container">
    <h3 class="comment_name">{{ comment.name }}</h3>
    <p class="comment_content">{{ comment.email }}</p>
    <p class="comment_content">{{ comment.body }}</p>
  </div>
</template>

<style scoped>
.comment_container {
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

.comment_name {
  font-size: 25px;
  font-weight: bold;
}
</style>
