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
            <li class="w-[39.375rem] p-[2rem] max-h-max" v-for="(item, index) in GET_FAQ" :key="item.id">
                <div calss="faq-title" style="display: flex; justify-content: space-between;">

                    <h2>{{ item.title }}</h2>
                    <button @click="() => toggleAccordion(index)">
                        {{ item.isOpen ? '-' : '+' }}
                    </button>
                </div>
                <div class="faq-subtitle" v-if="item.isOpen">
                    <p>{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>