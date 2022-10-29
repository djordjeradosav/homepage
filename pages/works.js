import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Image,
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <Divider mt={5} mb={5} />
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="covid" passHref title="Covid-19 Tracker">
            <Image src="../images/covid.PNG" passHref borderRadius={10} />
            Track a number of cases all around the world in one app.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="biolink" passHref title="Bio Link">
            <Image src="../images/biolink.PNG" passHref borderRadius={10} />A
            simple link in the description to link all your social media.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="messenger" passHref title="Messenger Clone">
            <Image src="../images/messenger.png" passHref borderRadius={10} />
            Messenger clone app, build with ReactJS.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ig" passHref title="Instagram Clone">
            <Image src="../images/ig.jpeg" passHref borderRadius={10} />
            Instagram clone app, build with ReactJS.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="grid" passHref title="Learn Grid">
            <Image src="../images/grid.PNG" passHref borderRadius={10} />
            Just a project where I learned to use grid css.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';
