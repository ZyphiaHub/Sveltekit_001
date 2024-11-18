<script>
    let title = '';
    let description = '';
    let ingredients = '';
    let image = '';
    let tags = '';

    async function addRecipe() {
        const newRecipe = {
            title,
            description,
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
            image,
            tags: tags.split(',').map(tag => tag.trim()),
            kalória_adagonként: 0,
        fehérje_adagonként: 0,
        szh_adagonként: 0,
        zsír_adagonként: 0
        };

        const response = await fetch('/api/recipes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRecipe)
        });

        if (response.ok) {
            alert('Recipe added successfully!');
            title = '';
            description = '';
            ingredients = '';
            image = '';
            tags = '';
        } else {
            alert('Failed to add recipe.');
        }
    }
</script>

<h1>Add a New Recipe</h1>
<form on:submit|preventDefault={addRecipe}>
    <div class="form-group">
        <label>Recipe Title</label>
        <input type="text" bind:value={title} required />
    </div>

    <div class="form-group">
        <label>Description</label>
        <textarea bind:value={description}></textarea>
    </div>

    <div class="form-group">
        <label>Ingredients (comma-separated)</label>
        <input type="text" bind:value={ingredients} required />
    </div>

    <div class="form-group">
        <label>Image URL</label>
        <input type="url" bind:value={image} />
    </div>

    <div class="form-group">
        <label>Tags (comma-separated)</label>
        <input type="text" bind:value={tags} />
    </div>

    <button type="submit">Add Recipe</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    input, textarea {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.75rem;
        font-size: 1rem;
        color: white;
        background-color: #8da08d;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #094a0c;
    }
</style>
