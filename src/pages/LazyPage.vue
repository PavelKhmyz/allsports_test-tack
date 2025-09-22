<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Loader from '../shared/components/Loader.vue';
import PostCard from '../shared/components/PostCard.vue';
import CommentCard from '../shared/components/CommentCard.vue';
import type { IPost } from '../shared/components/PostCard.vue';
import type { IComment } from '../shared/components/CommentCard.vue';

const isLoading = ref<boolean>(true);
const posts = ref<IPost[]>([]);
const comments = ref<IComment[]>([]);

onMounted(async () => {
  try {
    isLoading.value = true;

    const [postsResponse, commentsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=3'),
      fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
    ]);

    posts.value = await postsResponse.json();
    comments.value = await commentsResponse.json();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="page_container">
    <h1 class="page_title">Lazy Load Page</h1>
    <section class="lazy_section">
      <h2>Posts:</h2>
      <div class="grid_container">
        <Loader v-if="isLoading" />
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
    <section class="lazy_section">
      <h2>Comments:</h2>
      <div class="grid_container">
        <Loader v-if="isLoading" />
        <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.lazy_section h2 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}
</style>
