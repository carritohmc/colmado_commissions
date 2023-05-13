import Product from '../components/product';
import './catalog.css';

const Catalog = () => {

    return (

        <div className="catalog">
            {/* <h3> Check out our amazing catalog below</h3> */}
        <Product/>
        <Product/>
        <Product/>
        </div>


    );

};

export default Catalog; 