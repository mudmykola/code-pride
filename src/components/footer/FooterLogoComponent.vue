<script setup >
import { ref } from 'vue';
import content from "@/data/content.json";

const phoneNumber = ref('+516 777 6758');
const mail = ref('codepride@example.com');

const logoFooter = ref(require('@/assets/images/logo-gooter.svg'));
</script>

<template>
    <div class="footer-logo__box text-default">
        <div class="footer-logo">
            <img :src="logoFooter" alt="logo-footer">
        </div>
        <div class="footer-phone">
            <a :href="'tel:' + phoneNumber">{{ phoneNumber }}</a>
        </div>
        <div class="footer-mail">
            <a :href="'mail:' + mail">{{ mail }}</a>
        </div>
        <div class="footer-city">
            <p>{{ content.footerLogo.city }}</p>
        </div>
    </div>
</template>
