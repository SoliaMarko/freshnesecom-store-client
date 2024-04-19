/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {preflight: false},
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: {
        DEFAULT: '#FFFFFF'
      },
      primary: {
        DEFAULT: '#151515',
        200: '#575757',
        300: '#A9A9A9',
        400: '#D1D1D1',
        500: '#EBEBEB',
        600: '#F5F5F5',
        700: '#F9F9F9'
      },
      secondary: {
        DEFAULT: '#6A983C',
        200: '#46760A',
        300: '#92C064',
        400: '#C8DEB3',
        500: '#F4F8EC'
      },
      sandShade: {
        100: '#D0A866',
        200: '#B28A48',
        300: '#ECD2A6',
        400: '#FAEDD8',
        500: '#FFF9F0'
      },
      tangerineShade: {
        DEFAULT: '#E5704B',
        200: '#C7522D',
        300: '#EB8D70',
        400: '#F7C6B7',
        500: '#FFF1ED'
      },
      cyanShade: {
        100: '#37D0D6',
        200: '#19B2B8',
        300: '#7CD0D3',
        400: '#B9E6E8',
        500: '#ECF6F6'
      }
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Poppins']
    },
    extend: {}
  },
  plugins: []
};
