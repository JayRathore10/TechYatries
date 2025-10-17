import HeroSection from './components/HeroSection';
import {FeaturesSection} from './components/FeaturesSection';
import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { CardsHeading } from './components/CardsHeading';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import techYatriesFavicon from '../src/assets/images/logo.png';
import './App.css';

function App() {

  return (
    <>

      <link rel="icon" type="image/svg+xml" href={techYatriesFavicon} />

      <Header />
      <HeroSection />
      <CardsHeading />
      <Cards/>
      <FeaturesSection />
      <StatsSection />
      <Footer />
    </>
  )
}

export default App
