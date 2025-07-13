import { useEffect, useState } from "react";

interface Item {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
}

const LostItemsList = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
   
    const mockItems: Item[] = [
      {
        id: 1,
        title: "Blue Umbrella",
        description: "Left in classroom B4",
        location: "Block B",
        date: "2025-07-10",
        category: "Lost",
      },
      {
        id: 2,
        title: "USB Drive",
        description: "Found near library stairs",
        location: "Library",
        date: "2025-07-12",
        category: "Found",
      },
    ];
    setItems(mockItems);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Reported Items</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded shadow bg-white">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.category} on {item.date}</p>
            <p className="mt-2">{item.description}</p>
            <p className="text-sm text-gray-400 mt-1">Location: {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostItemsList;
