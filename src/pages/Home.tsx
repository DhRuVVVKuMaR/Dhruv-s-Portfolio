import React, { useState } from 'react';
import {
  Box, Container, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, SimpleGrid, Icon, Avatar, Badge
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiChakraui, SiFramer, SiTypescript, SiTailwindcss, SiPandas, SiNumpy, SiExpress } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

const techStack = [
  { icon: FaReact, label: 'React' },
  { icon: FaNodeJs, label: 'Node.js' },
  { icon: SiExpress, label: 'ExpressJS' },
  { icon: FaPython, label: 'Python' },
  { icon: SiPandas, label: 'Pandas' },
  { icon: SiNumpy, label: 'Numpy' },
  { icon: FaHtml5, label: 'HTML5' },
  { icon: FaCss3Alt, label: 'CSS3' },
  { icon: SiTailwindcss, label: 'TailwindCSS' },
  { icon: FaJs, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: FaPhp, label: 'PHP' },
  { icon: SiCplusplus, label: 'C++' },
  { icon: FaDatabase, label: 'MySQL' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiChakraui, label: 'Chakra UI' },
  { icon: SiFramer, label: 'Framer Motion' },
];

const stats = [
  { label: 'Projects', value: 8 },
  { label: 'Technologies', value: 10 },
  { label: 'Years Experience', value: 2 },
  { label: 'Hackathons', value: 5 },
];

const typewriterWords = [
  "Full Stack Developer.",
  "Open Source Enthusiast.",
  "UI/UX Lover.",
  "Problem Solver.",
  "Tech Explorer."
];

function useTypewriter(words, speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  React.useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  React.useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
}

const Home = () => {
  const navigate = useNavigate();
  const typewriter = useTypewriter(typewriterWords);
  const bgColor = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const accentGradient = 'linear(to-r, brand.500, purple.500, pink.500)';

  return (
    <Box minH="100vh" bg={bgColor} position="relative" overflow="hidden">
      {/* Animated Gradient Background */}
      <MotionBox
        position="absolute"
        top="-10%"
        left="-10%"
        w="700px"
        h="700px"
        borderRadius="full"
        bgGradient="radial(ellipse at top left, brand.200, purple.200, transparent 70%)"
        filter="blur(120px)"
        opacity={0.5}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        zIndex={0}
      />
      <MotionBox
        position="absolute"
        bottom="-10%"
        right="-10%"
        w="700px"
        h="700px"
        borderRadius="full"
        bgGradient="radial(ellipse at bottom right, purple.300, pink.200, transparent 70%)"
        filter="blur(120px)"
        opacity={0.5}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.7, 0.5, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        zIndex={0}
      />
      <Container maxW="1200px" py={{ base: 12, md: 24 }} position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
          {/* Hero Section */}
            <VStack align="start" spacing={8}>
                <MotionHeading
                  as="h1"
              size="3xl"
              fontWeight="extrabold"
              lineHeight="1.1"
              bgGradient={accentGradient}
                  bgClip="text"
              initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                >
              Hi, I'm Dhruv Kumar
                </MotionHeading>
              <MotionText
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="bold"
                color={textColor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              minH="48px"
            >
              {typewriter}
              </MotionText>
            <Text fontSize="xl" color={textColor} maxW="lg">
              I build beautiful, performant, and user-focused web applications. I love solving problems, learning new tech, and collaborating with creative people.
            </Text>
            <HStack spacing={4}>
              <MotionButton
                colorScheme="purple"
                size="lg"
                  rightIcon={<FaArrowRight />}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
                  px={8}
                fontWeight="bold"
                bgGradient={accentGradient}
                _hover={{ bgGradient: 'linear(to-r, purple.600, pink.500)' }}
                >
                  View Projects
              </MotionButton>
              <MotionButton
                  variant="outline"
                  size="lg"
                leftIcon={<FaDownload />}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                  px={8}
                fontWeight="bold"
                borderColor="purple.400"
                color="purple.400"
                onClick={() => {
                  const resumeUrl = '/resume.pdf';
                  fetch(resumeUrl)
                    .then(response => {
                      if (!response.ok) throw new Error('Resume file not found');
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
                    .catch(() => {
                      alert('Resume file not found. Please contact me directly for my resume.');
                    });
                }}
              >
                Resume
              </MotionButton>
            </HStack>
            {/* Quick Stats */}
            <HStack spacing={8} pt={4} flexWrap="wrap">
              {stats.map((stat, i) => (
                <MotionVStack
                  key={stat.label}
                  spacing={0}
                  align="center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                >
                  <Text fontSize="3xl" fontWeight="bold" bgGradient={accentGradient} bgClip="text">
                    {stat.value}+
                  </Text>
                  <Text fontSize="md" color={textColor} fontWeight="medium">
                    {stat.label}
                  </Text>
                </MotionVStack>
              ))}
            </HStack>
          </VStack>
          {/* Animated Profile Card */}
          <MotionBox
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="2xl"
            p={8}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            position="relative"
            overflow="hidden"
            _hover={{ boxShadow: '0 8px 32px rgba(130, 90, 255, 0.25)' }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="40%"
              bgGradient={accentGradient}
              opacity={0.15}
              zIndex={1}
            />
            <Avatar
              src="/dhruv.jpg"
              name="Dhruv Kumar"
              size="2xl"
              borderWidth={4}
              borderColor="purple.400"
              mb={4}
              zIndex={2}
              boxShadow="lg"
            />
            <Heading size="md" mb={1} color={textColor} zIndex={2}>
              Dhruv Kumar
            </Heading>
            <Badge colorScheme="purple" mb={2} zIndex={2}>
              Full Stack Developer
            </Badge>
            <Text color={textColor} textAlign="center" zIndex={2}>
              B.Tech ECE @ JIIT Noida<br />Passionate about building impactful digital products.
            </Text>
          </MotionBox>
        </SimpleGrid>
        {/* About Preview Section */}
              <MotionBox
          mt={20}
          bg={cardBg}
          borderRadius="2xl"
          boxShadow="xl"
          p={{ base: 6, md: 12 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack align="start" spacing={4}>
              <Heading size="lg" bgGradient={accentGradient} bgClip="text">
                About Me
                </Heading>
                    <Text fontSize="lg" color={textColor}>
                I'm a passionate Full Stack Developer who loves crafting elegant, performant, and user-friendly web applications. With a focus on building scalable solutions and a keen eye for detail, I transform ideas into impactful digital experiences.
                    </Text>
              <Button
                variant="link"
                colorScheme="purple"
                fontWeight="bold"
                onClick={() => navigate('/about')}
                rightIcon={<FaArrowRight />}
                _hover={{ textDecoration: 'underline', color: 'purple.400' }}
              >
                Read More
              </Button>
            </VStack>
            {/* Tech Stack Carousel */}
            <MotionHStack
              spacing={6}
              overflowX="auto"
              py={4}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              sx={{
                '::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
                }}
            >
              {techStack.map((tech, i) => (
                <MotionBox
                  key={tech.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  p={3}
                  borderRadius="xl"
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  boxShadow="md"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  minW="70px"
                >
                  <Icon as={tech.icon} w={8} h={8} color="purple.400" mb={2} />
                  <Text fontSize="sm" color={textColor} fontWeight="medium">
                    {tech.label}
                  </Text>
                </MotionBox>
              ))}
            </MotionHStack>
          </SimpleGrid>
            </MotionBox>
      </Container>
    </Box>
  );
};

export default Home; 