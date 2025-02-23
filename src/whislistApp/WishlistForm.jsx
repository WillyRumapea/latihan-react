import { useState } from "react";

export default function WishlistForm({ onAddWish }) {
  const [wish, setWish] = useState("");
  const [cate, setCate] = useState("");
  const [price, setPrice] = useState("");

  function handleWish(e) {
    setWish(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function hanldeCate(e) {
    setCate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddWish(wish, price, cate);
    setWish("");
    setCate("");
    setPrice("");
  }

  return (
    <div>
      <h1>Wishlist App</h1>
      <form>
        <input type="text" onChange={handleWish} placeholder="your wish" />
        <input
          type="number"
          onChange={handlePrice}
          placeholder="price estimated"
        />
        <select onChange={hanldeCate}>
          <option value="short_term">short term</option>
          <option value="long_term">long term</option>
        </select>
        <button onClick={handleSubmit}>Add!</button>
      </form>
    </div>
  );
}
