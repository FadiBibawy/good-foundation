import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  CallToAction,
  Services,
  Footer,
  Guides,
  Hero,
  Contact,
  Testimonial,
} from '@/sections/index';

const Home = () => {
  return (
    <LandingLayout>
      <Meta
        title="Good Foundation Construction Group"
        description="LLC for construction and renovation."
      />
      <Hero />
      <Services />
      <Contact />
      {/* <Guides /> */}
      <Testimonial />
      <CallToAction />
      <Footer />
    </LandingLayout>
  );
};

export default Home;
