<script setup>
import content from "@/data/content.json";
import WorksListComponent from '@/components/works/WorksListComponent';
</script>

<template>
<<<<<<< HEAD
    <div class=" bg-c103">
        <div class="works-box container mx-auto">
            <h2 class=" text-center font-medium text-[4rem] pt-[7.5rem] pb-[6.25rem]">{{ content.works.title }}</h2>
            <div class="works-box__list">
=======
    <div class=" bg-c107">
        <div class="works-box container mx-auto">
            <h2 class=" text-center font-medium text-[4rem] pt-[7.5rem] pb-[6.25rem]">{{ content.works.title }}</h2>
            <div class="works-box__list pb-[7.5rem]">
>>>>>>> feature/CDP_footer
                <works-list-component />
            </div>
        </div>
    </div>
</template>
