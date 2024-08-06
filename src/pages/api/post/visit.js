import fs from "fs/promises";

export default async function POST(req, res) {
  if (req.method === "POST") {
    const { city, country, flag } = req.body;
    // Store visit data in your chosen database (replace with your implementation)
    await storeVisitData(city, country, flag);

    res.status(200).json({ success: "ok" });
  } else {
    res.status(405).end(); // Allow only POST method
  }
}

async function storeVisitData(city, country, flag) {
  const filePath = "public/db/visitdata.json";
  const data = await fs.readFile(filePath, "utf-8");
  let visitData = [];
  try {
    visitData = JSON.parse(data); // Parse existing data if present
    if (city && country && flag) {
      visitData.push({ city, country, flag });
      await fs.writeFile(filePath, JSON.stringify(visitData));
    }
  } catch (error) {
    // Handle potential parsing errors (e.g., empty file)
  }
}
