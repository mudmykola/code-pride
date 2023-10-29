<script setup >
import FooterComponent from '../components/footer/FooterComponent.vue';
import NavigationComponent from '../components/navigation/NavigationComponent.vue';
</script>

<template>
    <div class="wrapper flex flex-col justify-center items-center">
        <div class="navigation border-b-2 border-c101 w-full bg-c103">
            <navigation-component class=" container px-[0.625rem]" />
        </div>
        <main class=" min-w-full bg-c103">
            <slot />
        </main>
        <footer-component />
    </div>
</template>