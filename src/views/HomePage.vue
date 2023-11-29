<script setup>
import LayoutComponent from '@/layout/LayoutComponent';
import HeaderComponent from '@/components/header/HeaderComponent';
import HeaderCartComponent from '@/components/header/HeaderCartComponent';
import AdvantagesComponent from '@/components/advantages/AdvantagesComponent';
import WorksComponent from '@/components/works/WorksComponent.vue';
import HiringComponent from '@/components/hiring/HiringComponent';
import FaqComponent from '@/components/faq/FaqComponent';
</script>


<template>
  <div class="home justify-center flex flex-col">
    <layout-component>
      <header-component />
      <header-cart-component />
      <advantages-component />
      <works-component />
      <hiring-component />
      <faq-component />
    </layout-component>
  </div>
</template>