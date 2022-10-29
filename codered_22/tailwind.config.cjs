const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {
      colors: {
        'custom-teal': '#e5fef5',
      }
    },

  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
