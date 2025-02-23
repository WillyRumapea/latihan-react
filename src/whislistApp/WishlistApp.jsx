import { useState } from "react";
import { v4 } from "uuid";
import WishlistForm from "./WishlistForm";
import WishlistList from "./WishlistList";

export default function WishlistApp() {
  const [wishes, setWishes] = useState([]);
  const [filteredCateWish, setfilteredCateWish] = useState("");

  function handleAddWish(wish, price, cate) {
    const newWish = {
      id: v4(),
      wish: wish,
      price: price,
      cate: cate,
      state: false,
    };
    setWishes((currentWish) => [...currentWish, newWish]);
    console.log(wishes);
  }

  function handleSwitchState(id) {
    setWishes((currWish) =>
      currWish.map((wish) =>
        wish.id === id ? { ...wish, state: !wish.state } : wish
      )
    );
  }

  function handleFilter(categories) {
    setfilteredCateWish(categories);
  }

  const filteredWish = filteredCateWish
    ? wishes.filter((wish) => wish.cate === filteredCateWish)
    : wishes;

  const totalPrice = wishes.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div>
      <WishlistForm onAddWish={handleAddWish} />
      <WishlistList
        items={filteredWish}
        switchState={handleSwitchState}
        filterCate={handleFilter}
        totalPrice={totalPrice}
      />
    </div>
  );
}
