<script setup >
import { ref } from 'vue';

const whyTitle = ref('Why CODEPRIDE');
const whyItems = ref([
    { label: 'How it works', path: '/pricing' },
    { label: 'Vetting process', path: '/pricing' },
    { label: 'Benefits', path: '/pricing' },
]);

const companyTitle = ref('Company');
const companyItems = ref([
    { label: 'About us', path: '/pricing' },
    { label: 'Our team', path: '/pricing' },
    { label: 'Our values', path: '/pricing' },
]);

</script>

<template>
    <div class="text-default flex flex-col justify-between">
        <div class="why-inner ">
            <h2 class="text-[1.5rem] font-medium mb-[1.5rem]">{{ whyTitle }}</h2>
            <ul class="flex flex-col gap-[1rem]">
                <router-link class="hover:underline hover:text-c104 hover:transition-all" v-for="(item, index) in whyItems"
                    :key="index" :to="item.path">
                    <li class="text-[1.25rem] font-light">
                        {{ item.label }}
                    </li>
                </router-link>
            </ul>
        </div>
        <div class="company-inner">
            <h2 class="text-[1.5rem] font-medium mb-[1.5rem]">{{ companyTitle }}</h2>
            <ul class="flex flex-col gap-[1rem]">
                <router-link class="hover:underline hover:text-c104 hover:transition-all"
                    v-for="(item, index) in companyItems" :key="index" :to="item.path">
                    <li class="text-[1.25rem] font-light">
                        {{ item.label }}
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
