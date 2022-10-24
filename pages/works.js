import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbCovid from '../public/images/covid.png';
import thumbBioLink from '../public/images/biolink.png';
import thumbGrid from '../public/images/grid.png';

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
