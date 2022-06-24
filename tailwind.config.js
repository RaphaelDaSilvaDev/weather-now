/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Quicksand, sans-serif',
        reem: 'Reem Kufi, sans-serif',
      },
      colors: {
        gray: {
          400: '#595959',
          600: '#333333',
        },
        initial: {
          100: '#EBEBEB',
          200: '#BABABA'
        },
        sunny: {
          100: '#FAE078',
          200: '#FFBD95 '
        },
        cloudy: {
          100: '#6EFAE7',
          200: '#72EEEE'
        },
        rain: {
          100: '#5BE0FE',
          200: '#5CCBFE'
        },
        havyRain: {
          100: '#019DC1',
          200: '#006594'
        },
        nigthSunny: {
          100: '#084D91',
          200: '#051A2E '
        },
        nigthCloudy: {
          100: '#04295D',
          200: '#02070E'
        },
        nigthRain: {
          100: '#08153A',
          200: '#040816 '
        },
        nigthHavyRain: {
          100: '#010118',
          200: '#030317 '
        }
      }
    },
  },
  plugins: [],
}
