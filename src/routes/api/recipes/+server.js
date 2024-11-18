import fs from 'fs';
import path from 'path';

// A recipes.json elérési útja
const recipesPath = path.resolve('src/lib/data/recipes.json');

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const data = fs.readFileSync(recipesPath, 'utf-8');
    const recipes = JSON.parse(data);

    return new Response(JSON.stringify(recipes), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const newRecipe = await request.json();

    const data = fs.readFileSync(recipesPath, 'utf-8');
    const recipes = JSON.parse(data);
    recipes.push(newRecipe);

    fs.writeFileSync(recipesPath, JSON.stringify(recipes, null, 2));

    return new Response(JSON.stringify({ message: 'Recipe added successfully' }), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request }) {
    const updatedRecipe = await request.json();

    const data = fs.readFileSync(recipesPath, 'utf-8');
    const recipes = JSON.parse(data);

    // @ts-ignore
    const index = recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (index !== -1) {
        recipes[index] = updatedRecipe;
        fs.writeFileSync(recipesPath, JSON.stringify(recipes, null, 2));
        
        return new Response(JSON.stringify({ message: 'Recipe updated successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } else {
        return new Response(JSON.stringify({ error: 'Recipe not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
    const { id } = await request.json();

    const data = fs.readFileSync(recipesPath, 'utf-8');
    const recipes = JSON.parse(data);

    // @ts-ignore
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);

    fs.writeFileSync(recipesPath, JSON.stringify(updatedRecipes, null, 2));

    return new Response(JSON.stringify({ message: 'Recipe deleted successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
