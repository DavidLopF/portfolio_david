import { Config } from 'tailwindcss'

const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js', // 👈 importante para Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // 👈 habilita componentes de Flowbite
  ],
}

export default config
