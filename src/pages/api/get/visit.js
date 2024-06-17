// pages/api/get.js
import visit_data from "@db/visitdata.json";

export default async function handler(req, res) {
  res.send({
    data: JSON.stringify(visit_data.at(-1)),
    event: "update",
    id: String(Math.floor(Math.random() * 1000000)),
  });
}
