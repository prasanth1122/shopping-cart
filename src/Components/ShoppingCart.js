import React, { useContext, useEffect, useState } from "react";
import MyCartContext from "../Contexts/MyCartContext";
import ItemCard from "./ItemCard";
const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(MyCartContext);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems")))
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      getTotalCost();
    }
  }, [cartItems]);
  function getTotalCost() {
    let sum = 0;
    for (const item of cartItems) {
      sum += item.price;
    }

    setTotalCost(sum);
  }
  function handleCheckOut() {
    setCartItems([]);
    localStorage.removeItem("cartItems")
    alert("Checkout done! your cart is now emptied");
  }
  return (
    <div className="shoppingCart__page">
      <h1 className="page__header">My Cart</h1>
      {cartItems.length === 0 && <h1>There are no items in your Cart</h1>}
      {cartItems.length !== 0 && (
        <div className="shoppingCart__container">
          <div className="items__container">
            {cartItems.map((item) => (
              <ItemCard
                item={item}
                itemId={item.id}
                key={item.id}
                btnType={"removeBtn"}
              />
            ))}
          </div>
          <div className="checkout__list_container dark">
            <h1 className="page__txt">
              <center>Checkout List</center>
            </h1>
            <ol>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{item.title}</span>
                    <span>{item.price}₹</span>
                  </div>
                </li>
              ))}
            </ol>
            <hr />
            <p className="totalCost_disp">
              <b>Total</b>
              <span>{totalCost} ₹</span>
            </p>
            <hr />
            <button
              className="btn page__txt checkOut_btn"
              onClick={() => handleCheckOut()}
            >
              Click To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
