import HeroSection from './components/HeroSection';
import {FeaturesSection} from './components/FeaturesSection';
import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { CardsHeading } from './components/CardsHeading';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <CardsHeading />
      <Cards/>
      <FeaturesSection />
    </>
  )
}

export default App
