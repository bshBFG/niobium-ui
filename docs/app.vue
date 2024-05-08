<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

const links = computed(() => {
  return [
    {
      label: 'Docs',
      icon: 'i-heroicons-book-open',
      to: '/getting-started',
    },
  ]
})

provide('navigation', navigation)
</script>

<template>
  <div class="">
    <NuxtLoadingIndicator />

    <Header :links="links" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
