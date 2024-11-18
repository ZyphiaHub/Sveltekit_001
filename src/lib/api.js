// src/lib/api.js

// Lekéri a recepteket a szerverről
export async function fetchRecipes() {
    const response = await fetch('/api/recipes');
    return await response.json();
}

// Új receptet ad hozzá az adatbázishoz
// @ts-ignore
export async function addRecipe(newRecipe) {
    await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe)
    });
}

// Módosít egy meglévő receptet
// @ts-ignore
export async function updateRecipe(updatedRecipe) {
    await fetch('/api/recipes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecipe)
    });
}

// Töröl egy receptet az ID alapján
// @ts-ignore
export async function deleteRecipe(id) {
    await fetch('/api/recipes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    });
}
