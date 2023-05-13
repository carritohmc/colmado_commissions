
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer'
import Catalog from './pages/catalog';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>
      <h3> Check out our amazing catalog below</h3>
      <Catalog/>

      </main>

     <Footer/>
    </div>


  );
}

export default App;
