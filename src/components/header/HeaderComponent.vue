<script setup>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import CustomeButton from "@/components/utils/ButtonComponent.vue";

const buttonText = ref("find a developer");
const buttonClass = ref("custom-button__header");
const route = "/pricing";

const store = useStore();
const apiData = ref([]);

onMounted(() => {
    store.dispatch("fetchApiData").then(() => {
        apiData.value = store.getters.apiData;
    });
});
</script>

<template>
    <div class=" justify-center flex">
        <div class="header container text-center py-[6.25rem] w-[75rem]" v-for="content in apiData" :key="content">
            <p class="header-sub font-light text-[1.75rem]">{{ content.subtext }}</p>
            <h1 class="header-title font-medium text-[4rem] pt-[1.25rem] pb-[2.5rem]">
                <span>{{ content.title.slice(0, 23) }}</span>
                <span :style="{ 'color': 'blue' }">{{ content.title.slice(23, 51) }} </span>
                <span> {{ content.title.slice(51) }}</span>
            </h1>
            <h3 class="header-desc font-normal text-[2rem] mb-[3.25rem] w-[45rem] mx-auto">{{ content.desc }}</h3>
            <custome-button :buttonClass="buttonClass" :buttonText="buttonText" :route="route" />
        </div>
    </div>
</template>