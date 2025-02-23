export default function WishlistList({
  items,
  switchState,
  filterCate,
  totalPrice,
}) {
  function handleCate(e) {
    filterCate(e.target.value);
  }

  return (
    <div>
      <h1> Wishlist List</h1>
      <select onChange={handleCate}>
        <option value="short_term">short term</option>
        <option value="long_term">long term</option>
      </select>
      <br />
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.wish} - {item.cate}
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => switchState(item.id)}
              />
            </li>
          );
        })}
      </ul>
      <p>total price: {totalPrice} </p>
    </div>
  );
}
