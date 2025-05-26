<template>
  <div :class="$style.wrap">
    <div :class="[$style.content, { [$style.paused]: paused }]">
      <div
          v-for="(_, index) in repeatArray"
          :key="index"
          :class="$style.text"
          :style="textStyle"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarqueeText',
  props: {
    duration: {
      type: Number,
      default: 30,
    },
    repeat: {
      type: Number,
      default: 2,
      validator(val) {
        return val > 0;
      },
    },
    paused: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const repeatArray = computed(() => Array(props.repeat).fill(0));

    const textStyle = computed(() => ({
      animationDuration: `${props.duration}s`,
      animationDirection: props.reverse ? 'reverse' : 'normal',
    }));

    return {
      repeatArray,
      textStyle,
    };
  },
};
</script>

<style module>
@import "@/assets/scss/_marquee.scss";
</style>