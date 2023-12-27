<script setup>
import { ref } from 'vue';
import content from '@/data/content';

const imgFuture = ref(require('@/assets/images/future-image-1.png'));
const imgFutureList = ref(require('@/assets/images/future-image-2.png'));
const imgArrowLink = ref(require('@/assets/images/arrow-left.png'));
</script>

<template>
    <div class="future bg-c107">
        <div class="container mx-auto">
            <div class="future-box">
                <div class="future-box__title w-[39.375rem]">
                    <h2 class="text-[4rem] font-medium">{{ content.future.title }}</h2>
                    <p class=" text-[1.5rem] font-light mb-[5rem]">{{ content.future.desc }}</p>
                </div>
                <div class="future-box__content flex justify-between">
                    <div class="future-box__image relative w-[46.25rem]">
                        <img class=" rounded-[2.75rem]" :src="imgFuture" alt="image-future">
                        <span
                            class=" absolute top-[2rem] left-[2rem] bg-c107 py-[0.375rem] px-[1rem] rounded-[2.75rem] text-[0.875rem]">{{ content.future.community }}</span>
                        <span
                            class=" absolute top-[4.125rem] left-[2rem] bg-c107 py-[0.375rem] px-[1rem] rounded-[2.75rem] mt-[0.375rem] text-[0.875rem]">{{ content.future.data }}</span>
                        <span
                            class=" absolute top-[2rem] right-[2rem] text-[1.5rem] font-medium  bg-c107 w-[23.75rem] py-[1rem] px-[1.5rem] rounded-[2.75rem]">{{ content.future.afterDesc }}</span>
                        <button
                            class=" absolute bottom-[2rem] right-[2rem] bg-c107 border border-b-c101 rounded-[100%] p-[0.75rem]"><img
                                :src="imgArrowLink" alt="image-arrow"></button>
                    </div>
                    <div class="future-box__list">
                        <ul>
                            <li class="relative">
                                <img class=" rounded-[2.75rem]" :src="imgFutureList" alt="image-future-list">
                                <span></span>
                                <button
                                    class="absolute bottom-[2rem] right-[2rem] bg-c107 border border-b-c101 rounded-[100%] p-[0.75rem]"><img
                                        :src="imgArrowLink" alt="image-arrow"></button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
