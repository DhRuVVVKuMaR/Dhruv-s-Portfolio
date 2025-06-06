import { Box, Container, Heading, Text, VStack, HStack, useColorModeValue, Input, Textarea, Button, Icon, Grid, GridItem, FormControl, FormLabel, FormErrorMessage, useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import React, { useState } from 'react'

const MotionBox = motion(Box)
const MotionGrid = motion(Grid)
const MotionVStack = motion(VStack)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const bgColor = useColorModeValue('white', 'dark.800')
  const textColor = useColorModeValue('dark.600', 'dark.300')
  const cardBg = useColorModeValue('white', 'dark.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.message) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Message sent!',
        description: "I'll get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

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
        bg={useColorModeValue('brand.50', 'brand.900')}
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

      <Container maxW="1200px" py={20} position="relative">
        <MotionGrid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={12}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <GridItem>
            <MotionVStack align="start" spacing={8} variants={itemVariants}>
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                lineHeight="1.2"
                bgGradient="linear(to-r, brand.500, purple.500)"
                bgClip="text"
              >
                Let's Connect
              </Heading>
              
              <Text fontSize="xl" color={textColor} lineHeight="1.8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </Text>

              <VStack align="start" spacing={6} w="full">
                <HStack spacing={4}>
                  <Icon as={FaEnvelope} w={6} h={6} color="brand.500" />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">Email Address</Text>
                    <Text color={textColor}>codewithdhruvkumar@gmail.com</Text>
                  </VStack>
                </HStack>
                <HStack spacing={4}>
                  <Icon as={FaMapMarkerAlt} w={6} h={6} color="brand.500" />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">Location</Text>
                    <Text color={textColor}>Noida, Uttar Pradesh, India</Text>
                  </VStack>
                </HStack>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                <Text fontWeight="bold">Connect with me</Text>
                <HStack spacing={4}>
                  <Button
                    as="a"
                    href="https://github.com/DhRuVVVKuMaR"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)', color: 'brand.500' }}
                  >
                    <Icon as={FaGithub} w={6} h={6} />
                  </Button>
                  <Button
                    as="a"
                    href="https://www.linkedin.com/in/dhruv-kumar23/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)', color: 'brand.500' }}
                  >
                    <Icon as={FaLinkedin} w={6} h={6} />
                  </Button>
                  <Button
                    as="a"
                    href="https://x.com/DhruvK08747294"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="ghost"
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)', color: 'brand.500' }}
                  >
                    <Icon as={FaTwitter} w={6} h={6} />
                  </Button>
                </HStack>
              </VStack>
            </MotionVStack>
          </GridItem>

          {/* Contact Form */}
          <GridItem>
            <MotionBox
              variants={itemVariants}
              bg={cardBg}
              p={8}
              borderRadius="2xl"
              boxShadow="xl"
              border="1px solid"
              borderColor={borderColor}
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isInvalid={errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      size="lg"
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      size="lg"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.subject}>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      size="lg"
                    />
                    <FormErrorMessage>{errors.subject}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      size="lg"
                      rows={6}
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="purple"
                    size="lg"
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </MotionBox>
          </GridItem>
        </MotionGrid>
      </Container>
    </Box>
  )
}

export default Contact 