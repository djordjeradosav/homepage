import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import {
  IoLogoDribbble,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io5';

import Image from 'next/image';
import Footer from '../components/footer';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a front-end developer based in Serbia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Djordje Radosavljevic
          </Heading>
          <p>( Developer / Designer )</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Djordje is a student and a front-end developer based in Obrenovac with
          a passion for building digital services. He has a knack for all things
          launching products, from planning and designing all the way to solving
          real-life problems with code. When not online, he loves hanging out
          with his guitar. Currently, he is a student at{' '}
          <NextLink href="http://www.fon.bg.ac.rs/" passHref scroll={false}>
            <Link>Faculty of Organisational Science</Link>
          </NextLink>{' '}
          in Belgrade. He publishes his design on{' '}
          <NextLink href="https://dribbble.com/MotherKaguya" passHref>
            <Link target="_blank">Dribbble</Link>
          </NextLink>{' '}
          and code on{' '}
          <NextLink href="https://github.com/djordjeradosav" passHref>
            <Link target="_blank">Git Hub</Link>
          </NextLink>{' '}
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Belgrade , Serbia.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Enrolled in college
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Hopefully something great till the end of the year
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Art, Music, Playing Guitar, Day Trading, Markets</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/djordjeradosav" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @djordjeradosav
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/radosavljevic.dj/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @radosavljevic.dj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/radosavljevix" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @radosavljevix
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://dribbble.com/MotherKaguya" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDribbble />}
              >
                @radosavljevic
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Footer />
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
