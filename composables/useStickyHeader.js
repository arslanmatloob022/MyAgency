import { onMounted, onUnmounted, ref } from "vue";

export function useStickyHeader(scrollThreshold = 250) {
    const isSticky = ref(false);

    const handleScroll = () => {
        isSticky.value = window.scrollY > scrollThreshold;
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

    return { isSticky };
}
