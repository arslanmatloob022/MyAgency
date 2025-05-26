import { ref, onMounted, onUnmounted } from 'vue';

export function useOffcanvas() {
    const isOffcanvasOpen = ref(false);
    const isOverlayOpen = ref(false);
    const isBodyOverlayOpen = ref(false);

    const closeOffcanvas = () => {
        isOffcanvasOpen.value = false;
        isOverlayOpen.value = false;
    };

    const openOffcanvas = () => {
        isOffcanvasOpen.value = true;
        isOverlayOpen.value = true;
    };

    const closeBodyOverlay = () => {
        isBodyOverlayOpen.value = false;
    };

    const handleClick = (event) => {
        if (event.target.closest(".offcanvas__close") || event.target.closest(".offcanvas__overlay")) {
            closeOffcanvas();
        }

        if (event.target.closest(".sidebar__toggle")) {
            openOffcanvas();
        }

        if (event.target.closest(".body-overlay")) {
            closeBodyOverlay();
        }
    };

    onMounted(() => {
        document.addEventListener("click", handleClick);
    });

    onUnmounted(() => {
        document.removeEventListener("click", handleClick);
    });

    return {
        isOffcanvasOpen,
        isOverlayOpen,
        isBodyOverlayOpen,
        closeOffcanvas,
        openOffcanvas,
        closeBodyOverlay
    };
}
