<script setup>
import LayoutComponent from '@/layout/LayoutComponent';
import HeaderComponent from '@/components/header/HeaderComponent';
import HeaderCartComponent from '@/components/header/HeaderCartComponent';
</script>


<template>
  <div class="home justify-center flex flex-col">
    <layout-component>
      <header-component />
      <header-cart-component />
    </layout-component>
  </div>
</template>