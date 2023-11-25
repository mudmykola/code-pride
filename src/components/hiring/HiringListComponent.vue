<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const persone = computed(() => store.getters.allPersone);
</script>

<template>
    <div>
        <ul class="flex justify-center gap-[1.875rem]">
            <li class="text-center border border-c104 rounded-[2.75rem] py-[1.75rem] px-[1.25rem]" v-for="item in persone"
                :key="item.id">
                <p class=" font-normal text-[1.5rem]">{{ item.hiringNumTitle }}</p>
                <h2 class="mt-[2.5rem] text-[4.5rem] font-medium text-c101">{{ item.hiringNum }}</h2>
            </li>
        </ul>
    </div>
</template>
