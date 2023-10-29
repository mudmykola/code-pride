<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const menuItems = ref([
  { id: 1, title: 'Why CODEPRIDE', link: '/why' },
  { id: 2, title: 'Pricing', link: '/pricing' },
  { id: 3, title: 'About us', link: '/about-us' },
  { id: 4, title: 'Careers', link: '/careers' },

])

const isActive = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
};
</script>

<template>
  <div class="navigation-list">
    <ul class="flex items-center gap-[3.5rem]">
      <li v-for="item in menuItems" :key="item.id">
        <router-link class="text-c100 font-normal text-[1.5rem] hover:text-h102 hover:transition-all hover:duration-300 "
          :to="item.link" :style="isActive(item.link) ? 'color: #D2D2D2;' : ''">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
