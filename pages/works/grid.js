import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Button,
  Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { IoLogoGithub } from 'react-icons/io5';
import NextLink from 'next/link';

const Work = () => (
  <Layout title="Learn-Grid">
    <Container>
      <Title>
        Learn-Grid <Badge>2022</Badge>
      </Title>
      <P>Just a project where I learned to use grid css.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://learn-grid.vercel.app/">
            https://learn-grid.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML / CSS / Vercel</span>
        </ListItem>
      </List>

      <WorkImage src={'../images/grid.png'} alt="LearnGrid" />
      <Box my={6} align="center">
        <NextLink href="https://github.com/djordjeradosav/learn-grid" passHref>
          <Button colorScheme="teal" leftIcon={<IoLogoGithub />}>
            Visit GitHub
          </Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
