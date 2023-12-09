import { computed } from 'vue';
import { useStore } from 'vuex';

export function setupAccordion() {
    const store = useStore();
    const GET_FAQ = computed(() => store.getters.GET_FAQ);

    const toggleAccordion = (index) => {
        GET_FAQ.value.forEach((item, i) => {
            if (i === index) {
                item.isOpen = !item.isOpen;
            } else {
                item.isOpen = false;
            }
        });
    };

    return {
        toggleAccordion,
    };
}