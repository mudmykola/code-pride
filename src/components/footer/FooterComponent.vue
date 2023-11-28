<script setup>
import { ref } from "vue";
import content from '@/data/content';

import FooterLogoComponent from "@/components/footer/FooterLogoComponent.vue";
import FooterWhyMenuComponent from "./FooterWhyMenuComponent.vue";
import FooterPricingMenuComponent from '@/components/footer/FooterPricingMenuComponent';
import ButtonComponent from '../utils/ButtonComponent.vue';

const buttonText = ref("find a developer");
const buttonClass = ref("footer-btn__popup");
const route = "/pricing";
</script>

<template>
    <div class="footer bg-c100 w-full ">
        <div class="container mx-auto relative">
            <div class="footer-inner flex justify-between pt-[32.125rem]">
                <footer-logo-component />
                <footer-why-menu-component />
                <footer-pricing-menu-component />
            </div>
            <div class="footer-copy border-t-2 border-c105 mt-[7rem]">
                <h2 class="text-default text-[1.25rem] font-light text-center pt-[2rem] pb-[5.625rem]">
                    {{ content.footerLogo.copy }}</h2>
            </div>
            <div class="footer-popup bg-c106 rounded-[2.75rem] absolute top-[-10.625rem]  left-0 right-0">
                <div class="footer-popup__box text-c100 text-center py-[5rem] px-[12.5rem]">
                    <span class=" font-light text-[1.75rem] mb-[1.25rem]">{{ content.footerLogo.subtitle }}</span>
                    <h2 class=" font-medium text-[4rem] w-[100%]">{{ content.footerLogo.title }}</h2>
                    <p class=" font-light text-[2rem] mt-[2.5rem] mb-[3.25rem]">{{ content.footerLogo.description }}</p>
                    <button-component :buttonText="buttonText" :buttonClass="buttonClass" :route="route" />
                </div>
            </div>
        </div>
    </div>
</template>
