import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, useColorMode, useColorModeValue, Badge, Flex } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaUserTie, FaBriefcase, FaLaptopCode, FaCode, FaServer, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPhp } from 'react-icons/fa'
import { SiCplusplus, SiTypescript, SiTailwindcss, SiPandas, SiNumpy, SiExpress } from 'react-icons/si'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionHStack = motion(HStack)
const MotionBadge = motion(Badge)
const MotionIcon = motion(Icon)

const skills = [
  { name: 'React', icon: FaReact, color: 'cyan' },
  { name: 'TypeScript', icon: SiTypescript, color: 'blue' },
  { name: 'Node.js', icon: FaNodeJs, color: 'green' },
  { name: 'ExpressJS', icon: SiExpress, color: 'gray' },
  { name: 'Python', icon: FaPython, color: 'yellow' },
  { name: 'Pandas', icon: SiPandas, color: 'teal' },
  { name: 'Numpy', icon: SiNumpy, color: 'orange' },
  { name: 'SQL', icon: FaDatabase, color: 'purple' },
  { name: 'AWS', icon: FaAws, color: 'orange' },
  { name: 'HTML5', icon: FaHtml5, color: 'orange' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'blue' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'cyan' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'yellow' },
  { name: 'C++', icon: SiCplusplus, color: 'blue' },
  { name: 'Git', icon: FaGitAlt, color: 'red' },
  { name: 'PHP', icon: FaPhp, color: 'purple' },
]

const experiences = [
  {
    title: 'AI Software Development Intern',
    company: 'SabPaisa',
    period: 'June 2024 - Present',
    description: 'Built AI-powered workflow optimization desktop app (WoFlow) using React, Electron, and Gemini AI. Improved stability, performance, and collaborated on code reviews.',
    icon: FaLaptopCode,
  },
  {
    title: 'Web Development Intern',
    company: 'SkillCraft Technologies',
    period: 'Jan 2025 - Feb 2025',
    description: 'Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.',
    icon: FaUserTie,
  },
  {
    title: 'Open Source Contributor',
    company: 'Girl Script Summer of Code',
    period: 'Oct 2024 - Nov 2024',
    description: 'As a GSSoC Contributor, I collaborated on real-world open-source projects using JavaScript, Python, and React. I worked with global mentors and peers, contributed quality code, and enhanced my problem-solving and debugging skills—while actively promoting the open-source spirit.',
    icon: FaBriefcase,
  },
]

const About = () => {
  const { colorMode } = useColorMode()
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardShadow = useColorModeValue('lg', 'dark-lg')
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const labelColor = useColorModeValue('gray.600', 'gray.400');
  const sectionBg = useColorModeValue('gray.50', 'gray.900')

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <Box minH="100vh" bg={sectionBg} py={16} px={{ base: 4, md: 8 }}>
      <Container maxW="900px">
        <VStack spacing={12} align="stretch">
          {/* About Section */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <MotionBox
              variants={itemVariants}
              layerStyle="glass"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
            >
              <Heading
                as="h2"
                size="xl"
                mb={4}
                bgGradient="linear(to-r, brand.500, purple.500, pink.500)"
                bgClip="text"
              >
                About Me
              </Heading>
              <Text fontSize="lg" color={textColor} mb={6}>
                I'm a passionate Full Stack Developer who loves crafting elegant, performant, and user-friendly web applications.
                With a focus on building scalable solutions and a keen eye for detail, I transform ideas into impactful digital experiences.
              </Text>
              <Box
                bg={useColorModeValue('gray.100', 'gray.700')}
                borderRadius="md"
                px={4}
                py={2}
                display="inline-block"
              >
                <Text fontSize="md" fontStyle="italic" color={labelColor}>
                  "Bridging the gap between innovative design and robust functionality."
                </Text>
              </Box>
            </MotionBox>
          </MotionBox>

          {/* Skills Section */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Heading
              as="h3"
              size="lg"
              mb={6}
              bgGradient="linear(to-r, brand.500, purple.500)"
              bgClip="text"
            >
              Skills & Technologies
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
              {skills.map((skill) => (
                <MotionBox
                  key={skill.name}
                  variants={skillVariants}
                  whileHover="hover"
                >
                  <Box
                    layerStyle="card"
                    p={4}
                    borderRadius="xl"
                    textAlign="center"
                    cursor="pointer"
                  >
                    <MotionIcon
                      as={skill.icon}
                      w={8}
                      h={8}
                      color={`${skill.color}.500`}
                      mb={2}
                    />
                    <Text fontWeight="medium" color={textColor}>
                      {skill.name}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>

          {/* Volunteer Experience Section */}
          <MotionBox
            variants={itemVariants}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            layerStyle="glass"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            w="full"
          >
            <Heading as="h3" size="md" mb={6} color="brand.500">
              Volunteer Experience
            </Heading>
            <VStack spacing={6} align="stretch">
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <VStack
                  bg={useColorModeValue('white', 'gray.700')}
                  p={5}
                  borderRadius="xl"
                  boxShadow="md"
                  align="start"
                  spacing={3}
                >
                  <HStack justify="space-between" w="full">
                    <Heading size="sm" color="purple.500">
                      Core Committee Member
                    </Heading>
                    <Badge colorScheme="purple">2023 - 2025</Badge>
                  </HStack>
                  <Text fontWeight="bold" fontSize="md" color={useColorModeValue('gray.700', 'gray.200')}>
                    Jaypee Youth Club
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Actively contributed to organizing student engagement events, workshops, and social initiatives at JIIT Noida.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <VStack
                  bg={useColorModeValue('white', 'gray.700')}
                  p={5}
                  borderRadius="xl"
                  boxShadow="md"
                  align="start"
                  spacing={3}
                >
                  <HStack justify="space-between" w="full">
                    <Heading size="sm" color="purple.500">
                      Student Volunteer
                    </Heading>
                    <Badge colorScheme="purple">2024 - Present</Badge>
                  </HStack>
                  <Text fontWeight="bold" fontSize="md" color={useColorModeValue('gray.700', 'gray.200')}>
                    IEEE AP-S Student Branch Chapter, JIIT Noida
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Assisted in planning and executing seminars and outreach programs focused on antennas and signal propagation.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <VStack
                  bg={useColorModeValue('white', 'gray.700')}
                  p={5}
                  borderRadius="xl"
                  boxShadow="md"
                  align="start"
                  spacing={3}
                >
                  <HStack justify="space-between" w="full">
                    <Heading size="sm" color="purple.500">
                      Event Coordinator
                    </Heading>
                    <Badge colorScheme="purple">2024 - Present</Badge>
                  </HStack>
                  <Text fontWeight="bold" fontSize="md" color={useColorModeValue('gray.700', 'gray.200')}>
                    IEEE MTT-S Student Branch Chapter, JIIT Noida
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Supported technical events and knowledge-sharing sessions on microwave theory and communication techniques.
                  </Text>
                </VStack>
              </MotionBox>
            </VStack>
          </MotionBox>

          {/* Experience Section */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Heading
              as="h3"
              size="lg"
              mb={6}
              bgGradient="linear(to-r, brand.500, purple.500)"
              bgClip="text"
            >
              Experience
            </Heading>
            <VStack spacing={6} align="stretch">
              {experiences.map((exp, index) => (
                <MotionBox
                  key={exp.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Box
                    layerStyle="glass"
                    p={6}
                    borderRadius="xl"
                    position="relative"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      bgGradient: 'linear(to-b, brand.500, purple.500)',
                      borderRadius: 'full',
                    }}
                  >
                    <HStack spacing={4} mb={4}>
                      <Icon as={exp.icon} w={6} h={6} color="brand.500" />
                      <Box>
                        <Heading as="h4" size="md" color={textColor}>
                          {exp.title}
                        </Heading>
                        <Text color="purple.500" fontSize="sm">
                          {exp.company}
                        </Text>
                      </Box>
                    </HStack>
                    <Text color={textColor} mb={2}>
                      {exp.period}
                    </Text>
                    <Text color={textColor}>
                      {exp.description}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default About 