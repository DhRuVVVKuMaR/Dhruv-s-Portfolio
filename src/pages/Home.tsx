import { Box, Container, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, Flex, Icon, Grid, GridItem, useColorMode, IconButton, Badge, SimpleGrid } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaCode, FaLaptopCode, FaServer, FaDownload, FaUserTie } from 'react-icons/fa'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionGrid = motion(Grid)
const MotionText = motion(Text)
const MotionHeading = motion(Heading)
const MotionBadge = motion(Badge)

const Home = () => {
  const navigate = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'dark.800')
  const textColor = useColorModeValue('dark.600', 'dark.300')
  const [isHovered, setIsHovered] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  
  // Transform values for scroll animations
  const imageOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.6]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
  const imageY = useTransform(smoothProgress, [0, 0.5], [0, 30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  // Animation variants for the image container
  const imageContainerVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the image
  const imageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box position="relative" overflow="hidden" minH="100vh" bg={bgColor}>
      {/* Animated Background Elements */}
      <MotionBox
        position="absolute"
        top="-20%"
        right="-10%"
        w="600px"
        h="600px"
        borderRadius="full"
        bg={colorMode === 'dark' ? 'brand.900' : 'brand.50'}
        opacity="0.6"
        filter="blur(100px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="600px"
        h="600px"
        borderRadius="full"
        bg={colorMode === 'dark' ? 'purple.900' : 'purple.50'}
        opacity="0.6"
        filter="blur(100px)"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.6, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxW="1200px" py={20} position="relative">
        <MotionGrid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={12}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <GridItem>
            <VStack align="start" spacing={8}>
              <MotionBox variants={itemVariants}>
                <MotionBadge
                  colorScheme="purple"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                  mb={4}
                  animate={floatingAnimation}
                >
                  Welcome to my portfolio
                </MotionBadge>
                <MotionHeading
                  as="h1"
                  size="2xl"
                  fontWeight="bold"
                  lineHeight="1.2"
                  bgGradient="linear(to-r, brand.500, purple.500, pink.500)"
                  bgClip="text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Hi, I'm Dhruv 👋
                </MotionHeading>
              </MotionBox>
              
              <MotionText
                fontSize="xl"
                color={textColor}
                lineHeight="1.8"
                variants={itemVariants}
              >
                A Full Stack Developer passionate about building modern, responsive, and user-friendly web apps. Skilled in React.js, PHP, MySQL, C++, and DSA, I love turning ideas into impactful digital products.
              </MotionText>

              <MotionFlex variants={itemVariants} gap={4} wrap="wrap">
                <Button
                  rightIcon={<FaArrowRight />}
                  colorScheme="purple"
                  size="lg"
                  onClick={() => navigate('/projects')}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  View Projects
                </Button>
                <Button
                  leftIcon={<FaDownload />}
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const resumeUrl = 'DhruvKumarResume.pdf';
                    fetch(resumeUrl)
                      .then(response => {
                        if (!response.ok) {
                          throw new Error('Resume file not found');
                        }
                        return response.blob();
                      })
                      .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'Dhruv_Kumar_Resume.pdf';
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                      })
                      .catch(error => {
                        console.error('Error downloading resume:', error);
                        alert('Resume file not found. Please contact me directly for my resume.');
                      });
                  }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Resume
                </Button>
              </MotionFlex>

              {/* Quick Stats Section */}
              <MotionBox
                variants={itemVariants}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                layerStyle="glass"
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                w="full"
              >
                <Heading as="h3" size="md" mb={6} color="brand.500">
                  Quick Stats
                </Heading>
                <SimpleGrid columns={2} spacing={6}>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <VStack
                      bg={useColorModeValue('white', 'gray.700')}
                      p={4}
                      borderRadius="xl"
                      boxShadow="md"
                      align="start"
                    >
                      <HStack>
                        <Icon as={FaCode} w={5} h={5} color="purple.500" />
                        <Text fontWeight="bold" fontSize="lg">5+</Text>
                      </HStack>
                      <Text fontSize="sm" color={textColor}>Projects Completed</Text>
                    </VStack>
                  </MotionBox>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <VStack
                      bg={useColorModeValue('white', 'gray.700')}
                      p={4}
                      borderRadius="xl"
                      boxShadow="md"
                      align="start"
                    >
                      <HStack>
                        <Icon as={FaLaptopCode} w={5} h={5} color="purple.500" />
                        <Text fontWeight="bold" fontSize="lg">12+</Text>
                      </HStack>
                      <Text fontSize="sm" color={textColor}>Technologies Mastered</Text>
                    </VStack>
                  </MotionBox>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <VStack
                      bg={useColorModeValue('white', 'gray.700')}
                      p={4}
                      borderRadius="xl"
                      boxShadow="md"
                      align="start"
                    >
                      <HStack>
                        <Icon as={FaServer} w={5} h={5} color="purple.500" />
                        <Text fontWeight="bold" fontSize="lg">3+</Text>
                      </HStack>
                      <Text fontSize="sm" color={textColor}>Full Stack Projects</Text>
                    </VStack>
                  </MotionBox>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <VStack
                      bg={useColorModeValue('white', 'gray.700')}
                      p={4}
                      borderRadius="xl"
                      boxShadow="md"
                      align="start"
                    >
                      <HStack>
                        <Icon as={FaUserTie} w={5} h={5} color="purple.500" />
                        <Text fontWeight="bold" fontSize="lg">2+</Text>
                      </HStack>
                      <Text fontSize="sm" color={textColor}>Years Experience</Text>
                    </VStack>
                  </MotionBox>
                </SimpleGrid>
              </MotionBox>
            </VStack>
          </GridItem>

          <GridItem>
            <MotionBox
              variants={imageContainerVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              position="relative"
              maxW="400px"
              mx="auto"
              style={{
                opacity: imageOpacity,
                scale: imageScale,
                y: imageY,
              }}
            >
              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                layerStyle="animatedBorder"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, brand.500, purple.500)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                  mixBlendMode: 'overlay',
                }}
                _hover={{
                  _before: {
                    opacity: 0.3,
                  },
                }}
              >
                {/* Animated Background Gradient */}
                <MotionBox
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-br, brand.500, purple.500)"
                  opacity={0.1}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                    opacity: useTransform(smoothProgress, [0, 0.5], [0.1, 0.05]),
                  }}
                />

                {/* Main Image with Enhanced Animations */}
                <MotionBox
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  position="relative"
                  overflow="hidden"
                  borderRadius="2xl"
                  transform="perspective(1000px)"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <Image
                    src="/dhruv.jpg"
                    alt="Dhruv's Profile Picture"
                    borderRadius="2xl"
                    w="100%"
                    h="auto"
                    maxH="400px"
                    objectFit="cover"
                    transition="all 0.5s ease"
                    fallbackSrc="https://placehold.co/400x400/2D3748/FFFFFF?text=Profile+Image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x400/2D3748/FFFFFF?text=Profile+Image";
                    }}
                    _hover={{
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  />

                  {/* Animated Overlay */}
                  <MotionBox
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
                    opacity={0}
                    animate={{
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </MotionBox>

                {/* Enhanced Glow Effect */}
                <MotionBox
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  boxShadow="0 0 30px rgba(59, 130, 246, 0.3)"
                  opacity={0}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    opacity: useTransform(smoothProgress, [0, 0.5], [0, 0.3]),
                  }}
                  zIndex={1}
                />

                {/* Animated Border */}
                <MotionBox
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  border="2px solid"
                  borderColor="transparent"
                  borderRadius="2xl"
                  animate={{
                    borderColor: ['rgba(59, 130, 246, 0.3)', 'rgba(147, 51, 234, 0.3)', 'rgba(59, 130, 246, 0.3)'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Box>
            </MotionBox>
          </GridItem>
        </MotionGrid>

        {/* Scroll Progress Indicator */}
        <MotionBox
          position="fixed"
          top={0}
          left={0}
          right={0}
          height="4px"
          bgGradient="linear(to-r, brand.500, purple.500, pink.500)"
          style={{ scaleX: smoothProgress }}
          transformOrigin="0%"
        />
      </Container>
    </Box>
  )
}

export default Home 