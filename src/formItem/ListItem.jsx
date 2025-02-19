export default function ListItem({ items }) {
  return (
    <div>
      <h1>List Item</h1>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
