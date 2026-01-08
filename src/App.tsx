import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MonthlyDataPage from "./pages/MonthlyDataPage";
import SettingPage from "./pages/SettingPage";
import HomeLayout from "./layouts/HomeLayout";


const router = createBrowserRouter([{
  path: "/",
  element: <HomeLayout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path:'/login',
      element: <LoginPage />,
    },
    {
      path:'/monthly-data',
      element: <MonthlyDataPage/>,
    },
    {
      path:'/settings',
      element: <SettingPage />,
    },
  ],
}]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
