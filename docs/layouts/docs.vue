<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
</script>

<template>
  <div class="min-h-[calc(100dvh-var(--ui-header-height))]">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
        <div class="lg:col-span-2">
          <nav>
            <div
              v-for="(navItem, index) in navigation"
              :key="index"
            >
              <div class="mt-4">
                {{ navItem.title }}
              </div>
              <template v-if="navItem.children">
                <div
                  v-for="(childNavItem, index) in navItem.children"
                  :key="index"
                  class="border-l pl-4"
                >
                  <div v-if="childNavItem.children">
                    {{ childNavItem.title }}
                  </div>
                  <NuxtLink
                    v-else
                    :to="childNavItem._path"
                  >
                    {{ childNavItem.title }}
                  </NuxtLink>
                </div>
              </template>
            </div>
          </nav>
        </div>
        <div class="lg:col-span-8">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
