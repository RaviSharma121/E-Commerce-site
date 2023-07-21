import { Link } from "react-router-dom";
import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;