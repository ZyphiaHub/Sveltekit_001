import fs from 'fs';
import path from 'path';

// Az ingredients.json elérési útja
const ingredientsPath = path.resolve('src/lib/data/ingredients.json');

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const data = fs.readFileSync(ingredientsPath, 'utf-8');
    const ingredients = JSON.parse(data);

    return new Response(JSON.stringify(ingredients), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const newIngredient = await request.json();

    const data = fs.readFileSync(ingredientsPath, 'utf-8');
    const ingredients = JSON.parse(data);
    ingredients.push(newIngredient);

    fs.writeFileSync(ingredientsPath, JSON.stringify(ingredients, null, 2));

    return new Response(JSON.stringify({ message: 'Ingredient added successfully' }), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
    const { id } = await request.json();

    const data = fs.readFileSync(ingredientsPath, 'utf-8');
    const ingredients = JSON.parse(data);

    // Az összetevő eltávolítása az id alapján
    // @ts-ignore
    const updatedIngredients = ingredients.filter(ingredient => ingredient.id !== id);

    // JSON fájl frissítése
    fs.writeFileSync(ingredientsPath, JSON.stringify(updatedIngredients, null, 2));

    return new Response(JSON.stringify({ message: 'Ingredient deleted successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
