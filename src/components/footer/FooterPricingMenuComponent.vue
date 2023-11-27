<script setup>
import { ref } from 'vue';

const procingTitle = ref('Pricing');
const pricingItems = ref([
    { label: 'Plans', path: '/pricing' },
    { label: 'CODEPRIDE vs alternatives', path: '/pricing' },
    { label: 'FAQs', path: '/pricing' },
]);

const careersTitle = ref('Careers');
const careersItems = ref([
    { label: 'Opportunities', path: '/pricing' },
    { label: 'Job openings', path: '/pricing' },
    { label: 'Recruiting team', path: '/pricing' },
]);
</script>

<template>
    <div class="text-default flex flex-col justify-between">
        <div class="pricing-inner">
            <h2 class="text-[1.5rem] font-medium mb-[1.5rem]">{{ procingTitle }}</h2>
            <ul class="flex flex-col gap-[1rem]">
                <router-link class="hover:underline hover:text-c104 hover:transition-all"
                    v-for="(item, index) in pricingItems" :key="index" :to="item.path">
                    <li class="text-[1.25rem] font-light">
                        {{ item.label }}
                    </li>
                </router-link>
            </ul>
        </div>
        <div class="careers-inner">
            <h2 class="text-[1.5rem] font-medium mb-[1.5rem]">{{ careersTitle }}</h2>
            <ul class="flex flex-col gap-[1rem]">
                <router-link class="hover:underline hover:text-c104 hover:transition-all"
                    v-for="(item, index) in careersItems" :key="index" :to="item.path">
                    <li class="text-[1.25rem] font-light">
                        {{ item.label }}
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
