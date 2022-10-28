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
  <Layout title="Messenger Clone">
    <Container>
      <Title>
        Messenger Clone <Badge>2020</Badge>
      </Title>
      <P> Messenger clone app, build with ReactJS.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS / Firebase / Material-UI</span>
        </ListItem>
      </List>

      <WorkImage src="../images/messenger.png" alt="Messenger Clone" />
      <Box my={6} align="center">
        <NextLink href="https://github.com/djordjeradosav/m-clone" passHref>
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
