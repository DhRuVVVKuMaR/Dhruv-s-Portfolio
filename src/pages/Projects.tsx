import React from 'react'
import { Box, Container, Heading, SimpleGrid, VStack, Image, Text, Button, Badge, useColorModeValue, Flex, Icon } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionBadge = motion(Badge)
const MotionButton = motion(Button)

const projects = [
  {
    title: 'Tripzy',
    description: 'A full-stack AI-powered travel planning platform that offers smart itinerary suggestions with a dynamic, immersive user interface.',
    image: '/tripzyfinal.png',
    technologies: ['React', 'Express', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/DhRuVVVKuMaR/TRIPZY',
    live: 'https://tripzy-one.vercel.app/',
  },
  {
    title: 'Super Market Billing Management System',
    description: 'A C++-based billing system with inventory management, automated tax calculations, and real-time stock tracking.',
    image: '71EDyrYjGJL._AC_UF1000,1000_QL80_.jpg',
    technologies: ['C++', 'OOPs', 'File Handling'],
    github: 'https://github.com/DhRuVVVKuMaR/SuperMarket-Billing-Management-System',
  },
  {
    title: 'Rescue Meals',
    description: 'Rescue Meals is a responsive web app that combats food waste and hunger by enabling users to donate surplus food or money. Built with PHP and MySQL, it features secure authentication, a personalized dashboard, and multiple payment options. The platform emphasizes transparency, security, and real-world scalability through robust backend handling and local deployment via XAMPP.',
    image: 'coverimage.jpeg',
    technologies: ['HTML5', 'CSS', 'JS','PHP','MySQL','XAMPP'],
    github: 'https://github.com/DhRuVVVKuMaR/rescuemeals',
  },
  {
    title: 'Flappy Bird Game',
    description: 'Built a fully functional Flappy Bird clone in Java using object-oriented programming principles and Java Swing for GUI. The game features smooth background scrolling, realistic bird physics, pipe generation, collision detection, and persistent high score tracking. Designed modular components (Bird, Pipe, GamePanel) and a state management system for clean structure and easy scalability. Demonstrates strong skills in game development, GUI programming, and software architecture.',
    image: 'birdgame.png',
    technologies: ['Java', 'Java Swing', 'Object-Oriented Programming'],
    github: 'https://github.com/DhRuVVVKuMaR/flappyBird_javagame',
  },
  {
    title: 'Huffman-Based File Compressor',
    description: 'Built a lossless file compression and decompression tool in C++ using Huffman Coding. Leveraged a greedy algorithm with priority queues (min-heaps) to construct the Huffman Tree, used binary trees for encoding, and hash maps for efficient character lookup. Enabled bit-level file operations for compact storage and created a command-line interface (CLI) for seamless interaction. Demonstrates proficiency in data structures, algorithm design, and low-level file manipulation.',
    image: 'huffman.png',
    technologies: ['C++', 'Priority Queue', 'Hash Map','Bit Manipulation', 'Command-Line Interface (CLI)', 'Binary Trees'],
    github: 'https://github.com/DhRuVVVKuMaR/huffman-file-compressor',
  },
  {
    title: 'WoFlow - AI Workflow Optimizer',
    description: 'WoFlow is a cutting-edge Electron desktop app that leverages Gemini AI to supercharge your productivity. Instantly analyze your workflow with smart screenshot monitoring, custom and predefined AI prompts, and actionable insights. Enjoy a seamless, modern experience powered by React and Material-UI. Export comprehensive reports and visualize your workflow like never before.',
    image: 'woflow.png',
    technologies: ['Electron', 'React', 'Material-UI', 'Gemini AI', 'jsPDF', 'Recharts', 'FFmpeg'],
    github: 'https://github.com/DhRuVVVKuMaR/WoFlow',
  }
]

const Projects = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const descColor = useColorModeValue('gray.600', 'gray.300');
  const titleColor = useColorModeValue('purple.700', 'purple.200');
  const badgeColor = useColorModeValue('purple', 'purple');
  const sectionBg = useColorModeValue('gray.50', 'gray.900');
  const subtitleColor = useColorModeValue('gray.600', 'gray.300');

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
    <Box minH="100vh" bg={sectionBg}>
      <Container maxW="1200px" py={20} position="relative">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h2"
              size="xl"
              bgGradient="linear(to-r, brand.500, purple.500, pink.500)"
              bgClip="text"
              textAlign="center"
              mb={4}
            >
              My Projects
            </Heading>
            <Text
              textAlign="center"
              color={subtitleColor}
              fontSize="lg"
              maxW="600px"
              mx="auto"
            >
              Here are some of my recent projects that showcase my skills and experience
            </Text>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {projects.map((project) => (
                <MotionBox
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Box
                    bg={cardBg}
                    borderRadius="2xl"
                    overflow="hidden"
                    layerStyle="card"
                    h="full"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box position="relative" overflow="hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        height="200px"
                        width="100%"
                        objectFit="cover"
                        transition="transform 0.3s ease"
                        _hover={{ transform: 'scale(1.05)' }}
                      />
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bgGradient="linear(to-b, transparent, rgba(0,0,0,0.7))"
                        opacity={0}
                        transition="opacity 0.3s ease"
                        _groupHover={{ opacity: 1 }}
                      />
                    </Box>
                    <Box p={6} flex="1" display="flex" flexDirection="column">
                      <Heading as="h3" size="md" mb={2} color={titleColor}>
                        {project.title}
                      </Heading>
                      <Text color={descColor} mb={4} flex="1">
                        {project.description}
                      </Text>
                      <Box mb={4}>
                        {project.technologies.map((tech) => (
                          <MotionBadge
                            key={tech}
                            mr={2}
                            mb={2}
                            colorScheme={badgeColor}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {tech}
                          </MotionBadge>
                        ))}
                      </Box>
                      <Flex gap={2} mt="auto">
                        <MotionButton
                          leftIcon={<FaGithub />}
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.github, '_blank')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          GitHub
                        </MotionButton>
                        {project.live && (
                          <MotionButton
                            leftIcon={<FaExternalLinkAlt />}
                            size="sm"
                            variant="gradient"
                            onClick={() => window.open(project.live, '_blank')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            color={useColorModeValue('purple.600', 'gray.100')}
                          >
                            Live Demo
                          </MotionButton>
                        )}
                        {!project.live && (
                          <MotionButton
                            leftIcon={<FaExternalLinkAlt />}
                            size="sm"
                            variant="gradient"
                            isDisabled
                            color={useColorModeValue('gray.500', 'gray.400')}
                          >
                            Live Demo
                          </MotionButton>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects 