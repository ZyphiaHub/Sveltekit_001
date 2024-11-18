import fs from "fs";
import path from "path";
const ingredientsPath = path.resolve("src/lib/data/ingredients.json");
async function GET() {
  const data = fs.readFileSync(ingredientsPath, "utf-8");
  const ingredients = JSON.parse(data);
  return new Response(JSON.stringify(ingredients), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function POST({ request }) {
  const newIngredient = await request.json();
  const data = fs.readFileSync(ingredientsPath, "utf-8");
  const ingredients = JSON.parse(data);
  ingredients.push(newIngredient);
  fs.writeFileSync(ingredientsPath, JSON.stringify(ingredients, null, 2));
  return new Response(JSON.stringify({ message: "Ingredient added successfully" }), {
    status: 201,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function DELETE({ request }) {
  const { id } = await request.json();
  const data = fs.readFileSync(ingredientsPath, "utf-8");
  const ingredients = JSON.parse(data);
  const updatedIngredients = ingredients.filter((ingredient) => ingredient.id !== id);
  fs.writeFileSync(ingredientsPath, JSON.stringify(updatedIngredients, null, 2));
  return new Response(JSON.stringify({ message: "Ingredient deleted successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export {
  DELETE,
  GET,
  POST
};
