import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import Btn from "./OtherComponent/Btn";
import BtnData from "./OtherComponent/BtnData";




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
                      path:'/:id',
                      element: <BtnData></BtnData>,
                      loader: () => fetch('./Category.json')
                    },
                   ]
            }
          ]
        },
      ]);
 export default router;