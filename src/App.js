import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navigation from './components/Navigation/Navigation';
import BrandNew from './components/Sections/BrandNew';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <BrandNew/>
    </div>
  );
}

export default App;
