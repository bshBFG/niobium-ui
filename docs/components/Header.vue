<script setup lang="ts">
interface Props {
  links: Array<{
    label: string
    to: string
    icon?: string
  }>
}

defineProps<Props>()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-white/70 font-sans backdrop-blur -mb-px">
    <div class="mx-auto h-16 max-w-7xl flex items-center justify-between gap-3 px-4 lg:px-8">
      <div>
        <NuxtLink
          to="/"
          class="flex items-center gap-2"
        >
          <NbLogo class="h-9 w-9" />
          <span class="text-2xl font-500">Niobium UI</span>
        </NuxtLink>
      </div>

      <div>
        <ul>
          <li
            v-for="link in links"
            :key="link.to"
          >
            <NuxtLink
              :to="link.to"
              class="p-4 text-sm/6 font-semibold hover:text-indigo-500"
              active-class="text-indigo-500"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
