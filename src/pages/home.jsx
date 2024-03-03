import Footer from '../components/footer';
import HomeHeader from './home-component/home-header';
import HomeVideo from './home-component/home-video';
import KnmaOpen from './home-component/knma-open';
import SectionThree from './home-component/section3';
import SpotLight from './home-component/spotlite';

const HomePage=()=> {
  return (
    <>
      <HomeHeader />
      <HomeVideo />
      <SpotLight />
      <SectionThree />
      <KnmaOpen />
      <Footer />
    </>
  );
}

export default HomePage;