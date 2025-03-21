import { Link, Outlet } from "react-router-dom";
import ProductData from "./ProductData";



const Btn = () => {
    
    return (
        <Link>
            <div className="grid grid-cols-3 my-10">
                <div className="grid col-span-1">
                    <Outlet></Outlet>
                </div>
                <div className="grid col-span-2">
                   <ProductData></ProductData>
                </div>
            </div>
        </Link>
    );
};

export default Btn;