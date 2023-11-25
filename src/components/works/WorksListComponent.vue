<script setup >
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const works = computed(() => store.getters.allWorks);
</script>

<template>
    <div class="works-list__box ">
        <ul class="gap-[3.5rem] flex flex-col">
            <li class="flex justify-between" v-for="item in works" :key="item.id">
                <div class="works-list__img w-[40.313rem] border-r-4 border-c104 ">
                    <h2 class="font-medium text-[2rem] mb-[2.5rem]">{{ item.title }}</h2>
                    <img :src="require('@/assets/images/' + item.imageUrl)" :alt="item.imageAlt">
                </div>
                <div class="works-list__text w-[40.313rem] flex flex-col justify-between px-[0.938rem]">
                    <h3 class="font-normal text-[1.75rem]">{{ item.number }}</h3>
                    <p class=" font-light text-[1.5rem]">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
