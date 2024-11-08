import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Trusted} from '../components/trusted';
import {Box} from '../components/styles/box';
import {Features1} from '../components/features1';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Faq} from '../components/faq';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';

/*

   TODO: Finish the following areas of the landing page.
      * Trusted
      * 3rd Feature
      * Testmonials
      * Statistics
      * Frequently Asked Questions
      * Footer (IN PROGRESS)
*/


const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Features1 />
            <Features2 />
            <Plans />
            <Trial />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
