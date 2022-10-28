import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbCovid from '../images/covid.png';
import thumbBioLink from '../images/biolink.png';
import thumbGrid from '../images/grid.png';
import thumbMess from '../images/messenger.png';
import thumbIg from '../images/ig.jpeg';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <Divider mt={5} mb={5} />
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="covid"
            thumbnail={thumbCovid}
            title="Covid-19 Tracker"
          >
            Track a number of cases all around the world in one app.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="biolink" thumbnail={thumbBioLink} title="Bio Link">
            A simple link in the description to link all your social media.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="messenger"
            thumbnail={thumbMess}
            title="Messenger Clone"
          >
            Messenger clone app, build with ReactJS.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ig" thumbnail={thumbIg} title="Instagram Clone">
            Instagram clone app, build with ReactJS.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="grid" thumbnail={thumbGrid} title="Learn Grid">
            Just a project where I learned to use grid css.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';
