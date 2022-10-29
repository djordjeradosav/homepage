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
  <Layout title="BioLink">
    <Container>
      <Title>
        BioLink <Badge>2022</Badge>
      </Title>
      <P>A simple link in the description to link all your social media.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://linkbio-one.vercel.app/">
            https://linkbio-one.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML / CSS / Vercel / Chakra-UI </span>
        </ListItem>
      </List>

      <WorkImage src="../images/biolink.PNG" alt="BioLink" />
      <Box my={6} align="center">
        <NextLink href="https://github.com/djordjeradosav/linkbio" passHref>
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
