import React,{useState, useEffect} from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import NavbarPage from "../../../module/header/Navbar/Navbar";
import { AppContext } from "../../../context/AppContext";


export function RootLayout(){
    const [searchMovies, setSearchMovies] = useState("");
    const navigate = useNavigate(); 


    useEffect(()=>{
        if(searchMovies){
          navigate("/search")
        }else{
          navigate("/");
        }
      },[searchMovies]);
  
    return(
    
            <AppContext.Provider value={{ searchMovies, setSearchMovies}}>
            <NavbarPage />
            <Outlet />
            </AppContext.Provider>
        
    );
}