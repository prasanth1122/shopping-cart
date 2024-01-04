import React, { useEffect, useContext } from "react";
import MyCartContext from "../Contexts/MyCartContext";
const ItemCard = ({ itemId, item, btnType }) => {
  // useEffect(()=>{
  //     console.log(item)
  // },[])

  const { cartItems, setCartItems } = useContext(MyCartContext);

  // useEffect(()=>{
  // }, cartItems)

  function handleAddCard() {
    for (const cartItem of cartItems) {
      if (cartItem.id === itemId) {
        alert("Item already added in cart");
        return;
      }
    }
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
    setCartItems([...cartItems, item]);
    alert("item added");
  }

  function handleRemoveCard() {
    setCartItems(cartItems.filter((item) => item.id !== itemId));

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((item) => item.id !== itemId))
    );
    alert("item removed from cart");
  }
  //
  return (
    <div className="item__card">
      <div className="card__image_container">
        <img src={item.thumbnail} alt={`${item.title} image`} />
      </div>
      <div className="card__body">
        <h1 className="page__txt bold">{item.title}</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="page__txt">Price: {item.price}₹</span>
          <span className="page__txt">⭐{item.rating}</span>
        </div>
        {btnType === "addBtn" && (
          <button
            className="btn page__txt dark"
            onClick={() => handleAddCard()}
          >
            Add To Cart
          </button>
        )}
        {btnType === "removeBtn" && (
          <button
            className="btn page__txt dark"
            onClick={() => handleRemoveCard()}
          >
            Remove From Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
