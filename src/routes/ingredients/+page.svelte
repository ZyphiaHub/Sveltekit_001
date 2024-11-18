<script>
    import { onMount } from 'svelte';
    /**
	 * @type {any[]}
	 */
    let ingredients = [];

    // Összetevők lekérése az API-ból
    async function fetchIngredients() {
        const response = await fetch('/api/ingredients');
        ingredients = await response.json();
    }

    // Összetevők betöltése az oldal betöltésekor
    onMount(fetchIngredients);

    // Összetevő törlése
    /**
	 * @param {any} id
	 */
    async function deleteIngredient(id) {
        const response = await fetch('/api/ingredients', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });

        if (response.ok) {
            ingredients = ingredients.filter(ingredient => ingredient.id !== id);
        }
    }

    let name = '';
    let quantity = '';
    let unit = '';
    let calories = '';
    let protein = '';
    let fat = '';
    let sugar = '';
    let notes = '';
    let image = '';

    async function addIngredient() {
        const newIngredient = { id: crypto.randomUUID(), name, quantity, unit, calories, protein, fat, sugar, notes, image };
        const response = await fetch('/api/ingredients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIngredient)
        });

        if (response.ok) {
            ingredients = [...ingredients, newIngredient];
            name = quantity = unit = calories = protein = fat = sugar = notes = image = '';
        }
    }
</script>

<h1>Új összetevő hozzáadása</h1>
<form on:submit|preventDefault={addIngredient}>
    <input type="text" bind:value={name} placeholder="Név" required />
    <input type="number" bind:value={quantity} placeholder="Mennyiség" required />
    <input type="text" bind:value={unit} placeholder="Mértékegység" required />
    <input type="number" bind:value={calories} placeholder="Kalória" required />
    <input type="number" bind:value={protein} placeholder="Fehérje" required />
    <input type="number" bind:value={fat} placeholder="Zsír" required />
    <input type="number" bind:value={sugar} placeholder="Cukor" required />
    <input type="text" bind:value={notes} placeholder="Megjegyzés" />
    <input type="text" bind:value={image} placeholder="Kép útvonala" />
    <button type="submit">Hozzáadás</button>
</form>

<h1>Összetevők listája</h1>
<table>
    <thead>
        <tr>
            <th>Név</th>
            <th>Mennyiség</th>
            <th>Mértékegység</th>
            <th>Kalória</th>
            <th>Fehérje</th>
            <th>Zsír</th>
            <th>Cukor</th>
            <th>Megjegyzés</th>
            <th>Kép</th>
            <th>Művelet</th>
        </tr>
    </thead>
    <tbody>
        {#each ingredients as ingredient}
            <tr>
                <td>{ingredient.name}</td>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.unit}</td>
                <td>{ingredient.calories}</td>
                <td>{ingredient.protein}</td>
                <td>{ingredient.fat}</td>
                <td>{ingredient.sugar}</td>
                <td>{ingredient.notes}</td>
                <td>
                    <img src="{ingredient.image}" alt="{ingredient.name}" width="50" height="50" />
                </td>
                <td>
                    <button on:click={() => deleteIngredient(ingredient.id)}>Törlés</button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        padding: 10px;
        border: 1px solid #dfdfc3;
        text-align: left;
    }

    th {
        background-color: #dbd6b9;
    }

    img {
        border-radius: 4px;
    }
</style>
