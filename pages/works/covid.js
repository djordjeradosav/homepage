import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Button,
  Box,
} from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';
import NextLink from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Covid-Tracker">
    <Container>
      <Title>
        Covid-Tracker <Badge>2020</Badge>
      </Title>
      <P>Track a number of cases all around the world in one app.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://covid-19-tracker-1b350.web.app/">
            https://covid-19-tracker-1b350.web.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS / Firebase / Material-UI / Styled-Components</span>
        </ListItem>
      </List>

      <WorkImage src="../images/covid.PNG" alt="Covid-Tracker" />
      <Box my={6} align="center">
        <NextLink
          href="https://github.com/djordjeradosav/covid-traked"
          passHref
        >
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
