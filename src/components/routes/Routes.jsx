import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../pages/layout/RootLayout";
import MoviePage from "../pages/Movies/Movies";
import LandPage from "../pages/tvShows/tvShows";
import LoginPage from "../pages/Login/Login";
import SignUpPage from "../pages/SignUp/SignUp";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import SearchPage from "../pages/Search/Search";
import Movie from "../pages/movie/Movie";
import ReactPage from "../pages/react/React";
import IntroPage from "../pages/intro/Intro";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<PageNotFound/>,
    children: [
      
      { path: "/" , element: <IntroPage />},
      { path: "/react" , element: <ReactPage />},
      { path: "/land", element: <LandPage /> },
      { path: "/movies", element: <MoviePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/:movieName/:movieId", element:<Movie/>},
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
];

export const AppRoutes = createBrowserRouter(routes);
