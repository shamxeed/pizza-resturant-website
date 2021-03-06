import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/hero';
import Product from './components/products';
import { productData, productDataTwo } from './components/products/Data';
import Feature from './components/feature';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Product heading='Choose Your Fave' data={productData} />
      <Feature />
      <Product heading='Sweet Treats For You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
