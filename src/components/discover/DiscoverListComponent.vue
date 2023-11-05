<script setup >
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const persone = computed(() => store.getters.allPersone);
</script>

<template>
    <div>
        <ul class="flex gap-[1.25rem] mb-[2.25rem]">
            <li v-for="item in persone" :key="item.id">
                <img class="discover-persone rounded-[6.25rem]" :src="require('@/assets/images/' + item.imageUrl)"
                    :alt="item.name" />
            </li>
        </ul>
    </div>
</template>
