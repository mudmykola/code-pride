<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import content from "@/data/content.json";

const store = useStore();
const GET_ADVANTAGE = computed(() => store.getters.GET_ADVANTAGE);
</script>

<template>
    <div class=" bg-default">
        <div class="container mx-auto py-[6.25rem]">
            <div class="adavantages-box text-center relative z-[9]">
                <span class="font-light text-[1.75rem] uppercase pb-[1.5rem]">{{ content.advantage.subtitle }}</span>
                <h1 class="font-medium text-[4rem] w-[60.375rem] mx-auto mb-[6.25rem]">
                    <span>{{ content.advantage.title.slice(0, 15) }}</span>
                    <span :style="{ 'color': 'blue' }">{{ content.advantage.title.slice(15, 30) }} </span>
                    <span> {{ content.advantage.title.slice(30) }}</span>
                </h1>
                <ul class="flex justify-center gap-[1.875rem]">
                    <li class="w-[25.625rem] text-left  border-l-4 border-c102 pl-[0.625rem] border-opacity-30"
                        v-for="item in GET_ADVANTAGE" :key="item.id">
                        <h3 class=" mb-[2.75rem] font-medium text-[1.75rem]">
                            {{ item.title }}
                        </h3>
                        <p class=" font-light text-[1.5rem]">{{ item.desc }}</p>
                    </li>
                </ul>
                <div
                    class="el-1 absolute w-[31.875rem] h-[15rem] bg-c106 rounded-[100%] top-[60%] z-[-1] rotate-90  blur-2xl right-[20%]">
                </div>
                <div
                    class="el-2 absolute w-[40rem] h-[40rem] bg-c106 rounded-[100%] top-[-5%] z-[-1]  blur-2xl right-[42%]">
                </div>
                <div
                    class="el-3 absolute w-[31.875rem] h-[15rem] bg-c106 rounded-[100%] top-[60%] z-[-1] rotate-90  blur-2xl left-[0%]">
                </div>
            </div>
        </div>
    </div>
</template>
