import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/hero';
import Product from './components/products';
import { productData } from './components/products/Data';
import Feature from './components/feature';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Product heading='Choose Your Fave' data={productData} />
      <Feature />
    </Router>
  );
}

export default App;
