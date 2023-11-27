<script setup>
import content from '@/data/content';

import FooterLogoComponent from "@/components/footer/FooterLogoComponent.vue";
import FooterWhyMenuComponent from "./FooterWhyMenuComponent.vue";
import FooterPricingMenuComponent from '@/components/footer/FooterPricingMenuComponent';
</script>

<template>
    <div class="footer bg-c100 w-full">
        <div class="container mx-auto">
            <div class="footer-inner flex justify-between pt-[32.125rem]">
                <footer-logo-component />
                <footer-why-menu-component />
                <footer-pricing-menu-component />
            </div>
            <div class="footer-copy border-t-2 border-c105 mt-[7rem]">
                <h2 class="text-default text-[1.25rem] font-light text-center pt-[2rem] pb-[5.625rem]">
                    {{ content.footerLogo.copy }}</h2>
            </div>
        </div>
    </div>
</template>
