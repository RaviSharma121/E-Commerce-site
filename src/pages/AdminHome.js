import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navbar/NavBar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
            Foot
        </div>
     );
}

export default AdminHome;