<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    buttonText: String,
    buttonClass: String,
    route: String,
});

const buttonText = ref(props.buttonText);
const router = useRouter();

const redirectToPage = () => {
    router.push(props.route);
};
</script>

<template>
    <div class="custome-button">
        <button
            class="bg-c101 rounded-[2.75rem] text-[1.063rem] font-semibold uppercase text-default py-[1.125rem] px-[2rem] hover:bg-h101 transition hover:transition-all"
            :class="buttonClass" @click="redirectToPage">
            {{ buttonText }}
        </button>
    </div>
</template>
