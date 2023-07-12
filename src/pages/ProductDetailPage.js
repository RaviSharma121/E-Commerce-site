import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/product.list/components/ProductDetail";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
     );
}

export default Home;