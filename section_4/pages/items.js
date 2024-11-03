import fs from "fs";
import path from "path";

export async function getStaticProps() {
  // Read and parse data from the JSON file
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(jsonData);

  return {
    props: {
      items,
    },
  };
}

export default function ItemsPage({ items }) {
  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
