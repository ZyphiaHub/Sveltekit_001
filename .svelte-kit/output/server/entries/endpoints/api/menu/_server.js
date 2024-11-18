import fs from "fs";
import path from "path";
const menuFilePath = path.resolve("src/lib/data/menu.json");
async function POST({ request }) {
  try {
    const menuData = await request.json();
    fs.writeFileSync(menuFilePath, JSON.stringify(menuData, null, 2), "utf-8");
    return new Response(JSON.stringify({ message: "Menü sikeresen elmentve!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Hiba történt a mentés során:", error);
    return new Response(JSON.stringify({ error: "Hiba történt a mentés során" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function GET() {
  const data = JSON.parse(fs.readFileSync(menuFilePath, "utf-8"));
  return new Response(JSON.stringify(data), { status: 200 });
}
async function PUT({ request }) {
  const updatedMenu = await request.json();
  fs.writeFileSync(menuFilePath, JSON.stringify(updatedMenu, null, 2));
  return new Response(null, { status: 204 });
}
export {
  GET,
  POST,
  PUT
};
