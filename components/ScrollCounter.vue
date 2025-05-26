<template>
  <span ref="counterElement">{{ formattedCount }} {{ suffix }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  start: { type: Number, default: 0 }, // Starting number
  end: { type: Number, required: true }, // Ending number
  duration: { type: Number, default: 1000 }, // Animation duration in milliseconds
  delay: { type: Number, default: 10 }, // Delay between increments
  suffix: { type: String, default: null}
});

const count = ref(props.start);
const formattedCount = ref(props.start); // Format the number with commas
const counterElement = ref(null); // Reference to the counter element

let observer;

const animateCounter = () => {
  const increment = (props.end - props.start) / (props.duration / props.delay);
  const timer = setInterval(() => {
    if (count.value < props.end) {
      count.value += increment;
      formattedCount.value = Math.floor(count.value); // Update formatted count
    } else {
      count.value = props.end;
      formattedCount.value = props.end; // Ensure final value is exact
      clearInterval(timer);
    }
  }, props.delay);
};

onMounted(() => {
  // Set up Intersection Observer
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(); // Start the counter when the element is in the viewport
            observer.unobserve(entry.target); // Stop observing after the animation starts
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
  );

  // Observe the counter element
  if (counterElement.value) {
    observer.observe(counterElement.value);
  }
});

onUnmounted(() => {
  // Clean up the observer when the component is unmounted
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>