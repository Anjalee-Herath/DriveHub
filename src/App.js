import './App.css';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navigation from './components/Navigation/Navigation';
import BrandNew from './components/Sections/BrandNew';
import Categories from './components/Sections/Categories/Categories';
import content from './data/content.json';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <BrandNew/>
      {content?.categories && content?.categories?.map((item, index) => <Categories key={item?.title+index} {...item}/>)}
      <Footer/>
    </div>
  );
}

export default App;
