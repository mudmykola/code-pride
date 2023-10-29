<script setup>
import { ref } from 'vue';

import NavigationListComponent from './NavigationListComponent.vue';
import ButtonComponent from '@/components/utils/ButtonComponent';

const logo = ref(require('@/assets/images/logo.svg'));

const buttonText = ref("find a developer");
const buttonClass = ref("custom-button-class");
const route = "/why"; 
</script>

<template>
    <div class=" flex items-center py-[1.7rem] justify-between mx-auto">
        <div class="navigation-logo ">
            <router-link to="/">
                <img :src="logo" alt="logo">
            </router-link>
        </div>
        <navigation-list-component />
        <button-component :buttonClass="buttonClass" :buttonText="buttonText" :route="route" />
    </div>
</template>
