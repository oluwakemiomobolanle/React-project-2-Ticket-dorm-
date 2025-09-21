import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import Header from "./components/header";

// import Footer from "./components/footer"

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import FindEventPage from "./pages/FindEventPage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="FindEventPage" element={<FindEventPage />} />
      <Route path="AboutPage" element={<AboutPage />} />
      <Route path="SignInPage" element={<SignInPage />} />
      <Route path="SignUpPage" element={<SignUpPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
