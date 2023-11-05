<script setup>
import { ref } from "vue";

import content from "@/data/content.json";
import DiscoverListComponent from '@/components/discover/DiscoverListComponent';
import GlobalBtnComponent from "../utils/GlobalBtnComponent.vue";

const buttonText = ref("meet my personal matcher");
const buttonClass = ref("discover-btn");
const route = "/pricing";
</script>

<template>
    <div class="discover pt-[16.75rem] flex justify-center gap-[1.875rem]">
        <div class="discover-text w-[32.5rem]">
            <p class="text-[1.5rem] font-light pb-[1.5rem]">{{ content.discover.subtitle }}</p>
            <h2 class="discover-title text-[4rem] leading-[4.75rem]">
                <span>{{ content.discover.title.slice(0, 32) }}</span>
                <span :style="{ 'color': 'blue' }">{{ content.discover.title.slice(32, 53) }} </span>
                <span> {{ content.discover.title.slice(53) }}</span>
            </h2>
        </div>
        <div class="discover-persons">
            <discover-list-component />
            <p class="w-[46.25rem] text-[1.5rem] font-light mb-[2rem]">{{ content.discover.text }}</p>
            <global-btn-component :buttonClass="buttonClass" :buttonText="buttonText" :route="route" />
        </div>
    </div>
</template>
