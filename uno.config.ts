import {
  defineConfig,
  presetUno,
  presetTypography,
  presetAttributify,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
  ],

  transformers: [
    transformerDirectives(),
  ],
})
