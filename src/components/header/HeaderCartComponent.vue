<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const developers = computed(() => store.getters.allDevelopers);
</script>

<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center  gap-[1.875rem] pb-[6.25rem]">
            <div class="flex flex-col items-center" v-for="developer in developers" :key="developer.id">
                <img class="bg-default rounded-[2.75rem] border border-c104"
                    :src="require('@/assets/images/' + developer.imageUrl)" :alt="developer.name" />
                <h2 class="font-medium text-[1.75rem] mt-[1.25rem] uppercase">{{ developer.name }}</h2>
                <p class="font-normal text-c105 text-[1.125rem] mb-[0.5rem] uppercase">{{ developer.profession }}</p>
                <ul class="flex gap-[1.125rem]">
                    <li v-for="skill in developer.skills" :key="skill">
                        <button
                            class="border border-c101 rounded-[2.75rem] font-light tedt-[0.938rem] py-[0.375rem] px-[0.625rem] cursor-default">
                            {{ skill }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
