<script setup >
import content from "@/data/content.json";
import HiringListComponent from "./HiringListComponent.vue";
</script>

<template>
    <div class="hiring py-[7.5rem] bg-default">
        <div class="container mx-auto">
            <div class="hiring-title text-center mb-[5rem]">
                <p class="font-light text-[1.5rem] uppercase">{{ content.hiring.subtitle }}</p>
                <h2 class="pt-[1.5rem]  font-medium text-[4rem]">{{ content.hiring.title }}</h2>
            </div>
            <div class="hiring-box">
                <hiring-list-component />
            </div>
        </div>
    </div>
</template>
