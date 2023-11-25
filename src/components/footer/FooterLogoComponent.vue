<script setup >
import { ref, computed } from 'vue';
import { useStore } from "vuex";
import content from "@/data/content.json";

const store = useStore();

const footer = computed(() => store.getters.allFooters);

const phoneNumber = ref('+516 777 6758');
const mail = ref('codepride@example.com');

const logoFooter = ref(require('@/assets/images/logo-gooter.svg'));
</script>

<template>
    <div class="footer-logo__box text-default">
        <div class="footer-logo">
            <img :src="logoFooter" alt="logo-footer">
        </div>
        <div class="footer-phone mt-[3.375rem]">
            <a class=" font-medium text-[1.75rem]" :href="'tel:' + phoneNumber">{{ phoneNumber }}</a>
        </div>
        <div class="footer-mail  mt-[2rem]">
            <a class=" font-medium text-[1.75rem]" :href="'mail:' + mail">{{ mail }}</a>
        </div>
        <div class="footer-city font-medium text-[1.75rem] mt-[2rem] w-[16.375rem]">
            <p>{{ content.footerLogo.city }}</p>
        </div>
        <div class="footer-social mt-[2.5rem]">
            <ul class="flex items-center gap-[1.75rem]">
                <li v-for="item in footer" :key="item.id">
                    <a :href="item.link">
                        <img :src="require('@/assets/images/' + item.imageUrl)" :alt="item.imageAlt">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
