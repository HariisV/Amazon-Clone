import './App.css';
import Navbar from './components/moleculs/Navbar';
import Product from './components/moleculs/Product';
import Hero from './components/moleculs/Hero';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Hero />
        <div className="flex gap-5" id="product-3">
          <Product
            id="1"
            title="i13 Pro Max 5G smartphone 512GB Dual SIM - Putih, 128GB"
            price="13.000.000"
            rating={5}
            image="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/30/fe2041e8-3e52-4db5-9c63-6592380b514b.jpg"
          />
          <Product
            id="1"
            title="i13 Pro Max 5G smartphone 512GB Dual SIM - Putih, 128GB"
            price="13.000.000"
            rating={5}
            image="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/30/fe2041e8-3e52-4db5-9c63-6592380b514b.jpg"
          />
          <Product
            id="1"
            title="i13 Pro Max 5G smartphone 512GB Dual SIM - Putih, 128GB"
            price="13.000.000"
            rating={5}
            image="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/30/fe2041e8-3e52-4db5-9c63-6592380b514b.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
