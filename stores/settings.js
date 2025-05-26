import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
    const isSearchOpen = ref(false)

    const toggleSearch = () => {
        isSearchOpen.value = !isSearchOpen.value;
    };

    const closeSearch = () => {
        isSearchOpen.value = false;
    };

    return {
        isSearchOpen,
        toggleSearch,
        closeSearch,
    };
})