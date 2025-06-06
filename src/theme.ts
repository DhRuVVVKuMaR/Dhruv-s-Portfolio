import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
    dark: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
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
    pink: {
      50: '#FDF2F8',
      100: '#FCE7F3',
      200: '#FBCFE8',
      300: '#F9A8D4',
      400: '#F472B6',
      500: '#EC4899',
      600: '#DB2777',
      700: '#BE185D',
      800: '#9D174D',
      900: '#831843',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'dark.900',
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
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
        textTransform: 'uppercase',
        letterSpacing: 'wider',
        fontSize: 'sm',
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'purple.500' : 'brand.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'purple.600' : 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'purple.700' : 'brand.700',
          },
        }),
        outline: (props: any) => ({
          border: '2px solid',
          borderColor: props.colorMode === 'dark' ? 'purple.500' : 'brand.500',
          color: props.colorMode === 'dark' ? 'purple.500' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'purple.500' : 'brand.500',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
        ghost: (props: any) => ({
          color: props.colorMode === 'dark' ? 'purple.500' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'purple.50' : 'brand.50',
            transform: 'translateY(-2px)',
          },
        }),
        gradient: (props: any) => ({
          bgGradient: props.colorMode === 'dark' 
            ? 'linear(to-r, purple.500, brand.500)'
            : 'linear(to-r, brand.500, purple.500)',
          color: 'white',
          _hover: {
            bgGradient: props.colorMode === 'dark'
              ? 'linear(to-r, purple.600, brand.600)'
              : 'linear(to-r, brand.600, purple.600)',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: 'tight',
      },
    },
    Text: {
      baseStyle: {
        letterSpacing: 'wide',
      },
    },
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'dark.800' : 'white',
          borderRadius: 'xl',
          boxShadow: props.colorMode === 'dark' 
            ? '0 4px 6px rgba(0, 0, 0, 0.3)'
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 8px 12px rgba(0, 0, 0, 0.4)'
              : '0 8px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      }),
    },
  },
  layerStyles: {
    card: (props: any) => ({
      bg: props.colorMode === 'dark' ? 'dark.800' : 'white',
      borderRadius: '2xl',
      boxShadow: props.colorMode === 'dark' 
        ? '0 4px 20px rgba(0, 0, 0, 0.2)'
        : '0 4px 20px rgba(0, 0, 0, 0.05)',
      _hover: {
        boxShadow: props.colorMode === 'dark'
          ? '0 8px 30px rgba(0, 0, 0, 0.3)'
          : '0 8px 30px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(-4px)',
      },
      transition: 'all 0.3s ease',
    }),
    gradientBg: (props: any) => ({
      bgGradient: props.colorMode === 'dark'
        ? 'linear(to-br, dark.900, dark.800)'
        : 'linear(to-br, gray.50, white)',
    }),
    glass: (props: any) => ({
      bg: props.colorMode === 'dark'
        ? 'rgba(26, 26, 26, 0.8)'
        : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid',
      borderColor: props.colorMode === 'dark'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)',
    }),
    heroGradient: (props: any) => ({
      bgGradient: props.colorMode === 'dark'
        ? 'linear(to-br, dark.900, purple.900)'
        : 'linear(to-br, brand.50, purple.50)',
    }),
    sectionGradient: (props: any) => ({
      bgGradient: props.colorMode === 'dark'
        ? 'linear(to-br, dark.800, dark.900)'
        : 'linear(to-br, white, gray.50)',
    }),
    animatedBorder: (props: any) => ({
      position: 'relative',
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        padding: '2px',
        background: props.colorMode === 'dark'
          ? 'linear-gradient(45deg, purple.500, brand.500)'
          : 'linear-gradient(45deg, brand.500, purple.500)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      },
    }),
  },
})

export default theme 