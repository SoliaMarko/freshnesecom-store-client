export const themeColors = () => ({
  primary: {
    100: '#151515',
    200: '#575757',
    300: '#A9A9A9',
    400: '#D1D1D1',
    500: '#EBEBEB',
    600: '#F5F5F5',
    700: '#F9F9F9',
    800: '#FFFFFF'
  },
  secondary: {
    100: '#6A983C',
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
    100: '#E5704B',
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
});

export const themeSettings = () => {
  const colors = themeColors();

  return {
    palette: {
      background: {
        default: colors.primary[800]
      },
      primary: {
        main: colors.primary[100],
        light: colors.primary[600]
      },
      secondary: {
        main: colors.secondary[100],
        dark: colors.secondary[200]
      },
      additional: {
        main: colors.tangerineShade[100]
      }
    }
  };
};
