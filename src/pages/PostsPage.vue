<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PostCard from '../shared/components/PostCard.vue';
import Loader from '../shared/components/Loader.vue'
import type { IPost } from '../shared/components/PostCard.vue';

const isLoading = ref<boolean>(false);
const posts = ref<IPost[]>([]);
let intervalId: number | null = null;
let postId: number = 1;

const fetchPosts = async (): Promise<IPost> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return await response.json() as Promise<IPost>;
}

const loadNextPost = async () => {
  try {
    isLoading.value = true;
    const post = await fetchPosts();
    posts.value.push(post);
    postId += 1;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadNextPost();
  intervalId = setInterval(loadNextPost, 5000)
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

</script>

<template>
  <div class="page_container">
    <h1 class="page_title">Posts autoloading</h1>
    <div class="grid_container">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
      <Loader v-if="isLoading" />
    </div>
  </div>
</template>
