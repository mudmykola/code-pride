<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { setupAccordion } from './util/accordionLogic';

const { toggleAccordion } = setupAccordion();

const store = useStore();
const GET_FAQ = computed(() => store.getters.GET_FAQ);
</script>

<template>
    <div>
        <ul class="grid grid-cols-2 justify-center items-center gap-[1.875rem]">
            <li class="w-[39.375rem] p-[2rem] h-[10rem] bg-default rounded-[2.75rem] transition-all overflow-hidden relative"
                v-for="(item, index) in GET_FAQ" :key="item.id">
                <div class="faq-title" style="display: flex; justify-content: space-between;">
                    <h2 class="text-[1.375rem] font-medium w-[27rem]">{{ item.title }}</h2>
                    <button class="border border-c101 w-[2rem] h-[2rem] rounded-[0.5rem]"
                        @click="() => toggleAccordion(index)">
                        {{ item.isOpen ? '-' : '+' }}
                    </button>
                </div>
                <div class="faq-subtitle py-[1rem] px-[1rem] absolute " v-if="item.isOpen">
                    <p class="text-[1rem] font-light">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
  