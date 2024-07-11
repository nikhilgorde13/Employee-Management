import './App.css'
import VendorCard from "./vendor";
import EmployeeDataGrid from "./employee";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Email from "./email";
import {Sidebar} from "./Sidebar.tsx";

function App() {
    // const customerData = {
    //     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //     "createdAt": "2024-07-10T19:29:58.691Z",
    //     "updatedAt": "2024-07-10T19:29:58.691Z",
    //     "createdBy": "string",
    //     "updatedBy": "string",
    //     "name": "ssssssssssssssssssssss",
    //     "email": "string",
    //     "upi": "string",
    //     "phone": "string",
    //     "address": "string",
    //     "contactPerson": "string",
    //     "registrationNumber": "string",
    //     "panNumber": "string",
    //     "getRegistrationNumber": "string",
    //     "bankAccountNumber": "string",
    //     "deleted": true
    // }

    const router = createBrowserRouter([
        {
            path: "/employees",
            element: <EmployeeDataGrid/>
        }, {
            path: "/emails",
            element: <Email/>
        }, {
            path: "/vendors",
            element: <VendorCard />
        },
    ]   );

    return (
        /* <><BrowserRouter>
             <Routes>
                 <Route path="/" element={<EmployeeDataGrid/>}>
                     <Route path={"/employees"} element={<EmployeeDataGrid/>}/>
                     <Route path="/emails" element={<Email/>}/>
                     <Route path="/vendors" element={<VendorCard/>}/>
                 </Route>
             </Routes>
         </BrowserRouter>

         </>*/
       <> <Sidebar />
        <RouterProvider router={router}/></>
    )
}

export default App
// vendor={{
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         "createdAt": "2024-07-10T19:29:58.691Z",
//         "updatedAt": "2024-07-10T19:29:58.691Z",
//         "createdBy": "string",
//         "updatedBy": "string",
//         "name": "ssssssssssssssssssssss",
//         "email": "string",
//         "upi": "string",
//         "phone": "string",
//         "address": "string",
//         "contactPerson": "string",
//         "registrationNumber": "string",
//         "panNumber": "string",
//         "getRegistrationNumber": "string",
//         "bankAccountNumber": "string",
//         "deleted": true
// }