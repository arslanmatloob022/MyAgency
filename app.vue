<script setup>
const { $wow } = useNuxtApp();

onMounted(() => {
  $wow.init();
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
