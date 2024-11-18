// src/lib/recipesStore.js
import { writable } from 'svelte/store';
import { fetchRecipes, addRecipe, updateRecipe, deleteRecipe } from '$lib/api';

export const recipes = writable([]);

export async function loadRecipes() {
    const data = await fetchRecipes();
    recipes.set(data);
}

// @ts-ignore
export async function addNewRecipe(newRecipe) {
    await addRecipe(newRecipe);
    loadRecipes(); // frissítés
}

// @ts-ignore
export async function updateExistingRecipe(updatedRecipe) {
    await updateRecipe(updatedRecipe);
    loadRecipes(); // frissítés
}

// @ts-ignore
export async function removeRecipe(id) {
    await deleteRecipe(id);
    loadRecipes(); // frissítés
}
