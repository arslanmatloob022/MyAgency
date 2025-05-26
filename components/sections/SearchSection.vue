<script setup lang="ts">
import {useSettingsStore} from "~/stores/settings";

const settingStore = useSettingsStore();
</script>

<template>
  <div class="search-wrap" :class="{'d-block' : settingStore.isSearchOpen}">
    <div class="search-inner">
      <i class="fas fa-times search-close" :class="{ open: settingStore.isSearchOpen }" id="search-close" @click="settingStore.closeSearch"></i>
      <div class="search-cell">
        <form method="get">
          <div class="search-field-holder">
            <input type="search" class="main-search-input" placeholder="Search...">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>