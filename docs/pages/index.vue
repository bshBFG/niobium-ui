<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

<template>
  <div class="relative grid min-h-[calc(100dvh-var(--ui-header-height))] place-items-center">
    <div
      v-if="data"
      class="flex flex-col items-center gap-4"
    >
      <div class="flex items-center justify-center gap-2">
        <NbLogo class="h-14 w-14" />
        <span class="text-4xl">
          {{ data.title }}
        </span>
      </div>
      <div class="text-xl text-slate-500">
        {{ data.description }}
      </div>
    </div>
  </div>
</template>
