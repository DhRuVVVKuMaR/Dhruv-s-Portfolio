import { extendTheme } from '@chakra-ui/react';

// Modern Light Theme
export const modernLight = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f5e6ff',
      100: '#e9d8fd',
      200: '#d6bcfa',
      300: '#b794f4',
      400: '#9f7aea',
      500: '#805ad5',
      600: '#6b46c1',
      700: '#553c9a',
      800: '#44337a',
      900: '#322659',
    },
    accent: {
      50: '#e0f7fa',
      100: '#b2ebf2',
      200: '#80deea',
      300: '#4dd0e1',
      400: '#26c6da',
      500: '#00bcd4',
      600: '#00acc1',
      700: '#0097a7',
      800: '#00838f',
      900: '#006064',
    },
    background: '#f8f9fa',
    text: '#22223b',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: 'background',
        color: 'text',
        transition: 'background-color 0.3s ease',
      },
      '::selection': {
        bg: 'brand.100',
        color: 'brand.700',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    }),
  },
});

// Elegant Dark Theme
export const elegantDark = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f5e6ff',
      100: '#d9b3ff',
      200: '#bf80ff',
      300: '#a64dff',
      400: '#8c1aff',
      500: '#7300e6',
      600: '#5900b3',
      700: '#400080',
      800: '#26004d',
      900: '#0d001a',
    },
    accent: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
    },
    background: '#181926',
    text: '#f3f3f3',
    purple: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: 'background',
        color: 'text',
        transition: 'background-color 0.3s ease',
      },
      '::selection': {
        bg: 'brand.100',
        color: 'brand.700',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    }),
  },
});

// Helper to select theme
export const getTheme = (themeName: string) => {
  if (themeName === 'dark') return elegantDark;
  return modernLight;
};

// Default export for compatibility
export default modernLight; 