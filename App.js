import React from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { useState, useEffect } from "react";
import {toast} from "react-toastify";



const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  
  async function fetchData (){
    setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        // output -->
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
        }
      setLoading(false);
    }


    useEffect( () =>{
    fetchData();
  },[]);
  return (
    <div>
      <div>
        <Navbar/>
        </div>

        <div>
         <Filter filterData = {filterData}/>
        </div>
        <div>
        {
          loading ? (<Spinner/>)  :  (<Cards courses = {courses}/>)
        }
        
       </div>

    </div>
  );
};

export default App;
