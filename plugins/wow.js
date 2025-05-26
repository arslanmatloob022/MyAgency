import WOW from 'wow.js';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            wow: new WOW()
        }
    };
});