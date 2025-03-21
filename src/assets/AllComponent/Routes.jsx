import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import Btn from "./OtherComponent/Btn";
import BtnData from "./OtherComponent/BtnData";
import ProductData from "./OtherComponent/ProductData";



    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          children: [
            {
                path:'/',
                element: <Btn></Btn>,
                   children: [
                    {
                      path:'/',
                      element: <BtnData></BtnData>,
                      loader: () => fetch('./Category.json')
                    },
                   ]
            }
          ]
        },
      ]);
 export default router;