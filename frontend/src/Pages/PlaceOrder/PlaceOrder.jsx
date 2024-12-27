import { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext.jsx";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, url, cartItems } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email address"
          />
          <input
            type="text"
            placeholder="Street"
            name="street"
            onChange={onChangeHandler}
            value={data.street}
          />
          <div className="multi-fields">
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={onChangeHandler}
              value={data.city}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={onChangeHandler}
              value={data.state}
            />
          </div>
          <div className="multi-fields">
            <input
              type="text"
              placeholder="Zip code"
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              onChange={onChangeHandler}
              value={data.country}
            />
          </div>
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
          />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-ditails">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-ditails">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-ditails">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
            </div>
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
