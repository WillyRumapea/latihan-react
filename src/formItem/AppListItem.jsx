import { useState } from "react";
import FormItem from "./FormItem";
import ListItem from "./ListItem";

export default function AppListItem() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((itemsBef) => [...itemsBef, item]);
  }

  return (
    <>
      <FormItem onAddItem={handleAddItem} />
      <ListItem items={items} />
    </>
  );
}
