<script setup>
import LayoutComponent from '@/layout/LayoutComponent';
import HeaderComponent from '@/components/header/HeaderComponent';
import HeaderCartComponent from '@/components/header/HeaderCartComponent';
import AdvantagesComponent from '@/components/advantages/AdvantagesComponent';
import WorksComponent from '@/components/works/WorksComponent.vue';
</script>


<template>
  <div class="home justify-center flex flex-col">
    <layout-component>
      <header-component />
      <header-cart-component />
      <advantages-component />
      <works-component />
    </layout-component>
  </div>
</template>