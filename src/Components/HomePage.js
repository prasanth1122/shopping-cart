import React,{useEffect, useContext} from "react";
import AllitemsContext from "../Contexts/AllitemsContext";
import axios from "axios";
import ItemCard from "./ItemCard";

const HomePage = () => {
  const {all_items, setAll_items} = useContext(AllitemsContext);
  
  useEffect(()=>{
    getAll_items()
  },[])

  async function getAll_items(){
    try{
      const response = await axios.get("https://dummyjson.com/products");
      // console.log(response.data.products)
      setAll_items(response.data.products)
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="home__page">
      <h1 className="page__header">All Items</h1>
      <div className="items__container">
        {
          all_items.map((item)=>(
            <ItemCard item={item} itemId={item.id} key={item.id} btnType={"addBtn"}/>
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
