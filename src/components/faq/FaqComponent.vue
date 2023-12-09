<script setup>
import content from '@/data/content';

import FaqListComponent from './FaqListComponent.vue';
</script>

<template>
    <div class="pb-[17.625rem] pt-[7.5rem]">
        <div class="container mx-auto">
            <div class="faq-box">
                <h1 class="faq-box__title  text-center">
                    {{ content.faq.title }}
                </h1>
                <faq-list-component />
            </div>
        </div>
    </div>
</template>
  