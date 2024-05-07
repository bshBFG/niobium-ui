import {
  defineNuxtModule,
  // addPlugin,
  createResolver,
  installModule,
  addComponentsDir,
  // addTemplate,
} from '@nuxt/kit'

export interface ModuleOptions {
  prefix?: string
  disableGlobalStyles?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'niobium-ui',
    configKey: 'ui',
  },
  defaults: {
    prefix: 'U',
    disableGlobalStyles: false,
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')

    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('@headlessui/vue')

    nuxt.options.alias['#ui'] = runtimeDir

    nuxt.options.css.push('@unocss/reset/tailwind.css')

    // Modules

    await installModule('@unocss/nuxt')

    // Components

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'elements'),
      prefix: options.prefix,
    })
  },
})
