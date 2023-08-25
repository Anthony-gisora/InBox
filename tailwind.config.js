/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      login: 'url(./assets/login.png)',
      signup: 'url(./assets/official.jpg)',
      inbox: 'url(./assets/inbox.svg)',
      dp: 'url(./assets/dp.jpg)'
    },
    extend: {},
  },
  plugins: [],
}

