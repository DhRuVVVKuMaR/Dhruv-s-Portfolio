import React, { useEffect, useState } from 'react';
import { Box, Flex, Link, Button, useColorModeValue, Container, IconButton, useDisclosure, VStack, HStack, Text, useColorMode, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { getTheme, modernLight, elegantDark } from '../theme';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionLink = motion(Link);

const Navbar = () => {
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [themeName, setThemeName] = useState(() => localStorage.getItem('themeName') || 'light');

  useEffect(() => {
    localStorage.setItem('themeName', themeName);
    // Dynamically update the theme (for ChakraProvider in App.tsx)
    const event = new CustomEvent('themeChange', { detail: themeName });
    window.dispatchEvent(event);
  }, [themeName]);

  const handleThemeToggle = () => {
    setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
    toggleColorMode();
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      },
    },
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <MotionBox
      variants={navVariants}
      initial="hidden"
      animate="visible"
      bg={bgColor}
      position="sticky"
      top={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
    >
      <Container maxW="1200px">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          {/* Logo and Name */}
          <MotionBox
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              as={RouterLink}
              to="/"
              display="flex"
              alignItems="center"
              gap={2}
              _hover={{ textDecoration: 'none' }}
            >
              <MotionBox
                w="45px"
                h="45px"
                borderRadius="xl"
                position="relative"
                overflow="hidden"
                bgGradient="linear(to-br, brand.500, purple.500)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                boxShadow="0 4px 14px rgba(0, 0, 0, 0.1)"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'scale(1.05) rotate(5deg)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-br, brand.400, purple.400)"
                  opacity={0.5}
                  transform="rotate(45deg)"
                  transition="all 0.3s ease"
                />
                <Text
                  position="relative"
                  zIndex={1}
                  fontSize="lg"
                  fontWeight="bold"
                  letterSpacing="tight"
                >
                  DK
                </Text>
              </MotionBox>
              <Text
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
                display={{ base: 'none', sm: 'block' }}
                letterSpacing="tight"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  bgGradient: 'linear(to-r, brand.500, purple.500)',
                  transition: 'width 0.3s ease',
                }}
                _hover={{
                  _after: {
                    width: '100%',
                    left: '0',
                  },
                  color: 'brand.500',
                }}
              >
                Dhruv Kumar
              </Text>
            </Link>
          </MotionBox>

          {/* Desktop Menu */}
          <MotionFlex
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            gap={8}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item) => (
              <MotionLink
                key={item.name}
                as={RouterLink}
                to={item.path}
                px={3}
                py={2}
                rounded="md"
                fontWeight="medium"
                position="relative"
                color={useColorModeValue('gray.700', 'gray.200')}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  bottom: '0',
                  left: '50%',
                  bg: 'brand.500',
                  transition: 'all 0.3s ease',
                }}
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.500',
                  _after: {
                    width: '100%',
                    left: '0',
                  },
                }}
              >
                {item.name}
              </MotionLink>
            ))}
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="brand"
                variant="solid"
                size="md"
                px={6}
                borderRadius="full"
                bgGradient="linear(to-r, brand.500, accent.500)"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                transition="all 0.2s"
              >
                Contact Me
              </Button>
            </MotionBox>
            {/* Theme Toggle Button */}
            <MotionBox
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                aria-label="Toggle theme"
                icon={themeName === 'light' ? <FaMoon /> : <FaSun />}
                onClick={handleThemeToggle}
                variant="ghost"
                size="md"
                borderRadius="full"
                _hover={{
                  bg: useColorModeValue('gray.100', 'gray.700'),
                  color: 'brand.500',
                }}
              />
            </MotionBox>
          </MotionFlex>

          {/* Mobile Menu Button */}
          <Flex display={{ base: 'flex', md: 'none' }} alignItems="center" gap={2}>
            <MotionBox
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                aria-label="Toggle theme"
                icon={themeName === 'light' ? <FaMoon /> : <FaSun />}
                onClick={handleThemeToggle}
                variant="ghost"
                size="md"
                borderRadius="full"
                _hover={{
                  bg: useColorModeValue('gray.100', 'gray.700'),
                  color: 'brand.500',
                }}
              />
            </MotionBox>
            <MotionBox
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <IconButton
                onClick={onToggle}
                icon={isOpen ? <FaTimes /> : <FaBars />}
                variant="ghost"
                aria-label="Toggle menu"
                borderRadius="full"
                _hover={{
                  bg: useColorModeValue('gray.100', 'gray.700'),
                  color: 'brand.500',
                }}
              />
            </MotionBox>
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              display={{ base: 'block', md: 'none' }}
              pb={4}
              mt={2}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
            >
              <VStack spacing={4} align="stretch" p={4}>
                {menuItems.map((item, index) => (
                  <MotionLink
                    key={item.name}
                    as={RouterLink}
                    to={item.path}
                    px={4}
                    py={3}
                    rounded="lg"
                    fontWeight="medium"
                    color={useColorModeValue('gray.700', 'gray.200')}
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue('gray.50', 'gray.700'),
                      color: 'brand.500',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </MotionLink>
                ))}
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <Button
                    as={RouterLink}
                    to="/contact"
                    colorScheme="brand"
                    variant="solid"
                    size="md"
                    w="full"
                    borderRadius="full"
                    bgGradient="linear(to-r, brand.500, accent.500)"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    transition="all 0.2s"
                  >
                    Contact Me
                  </Button>
                </MotionBox>
              </VStack>
            </MotionBox>
          )}
        </AnimatePresence>
      </Container>
    </MotionBox>
  );
};

export default Navbar; 