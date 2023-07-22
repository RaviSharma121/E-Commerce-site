import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/navbar/NavBar";

function AdminOrdersPage() {
    return ( 
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
     );
}

export default AdminOrdersPage;