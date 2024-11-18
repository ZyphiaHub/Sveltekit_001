<script>
    import { recipes, loadRecipes } from '$lib/recipeStore';
    /**
	 * @type {{ image: any; title: any; description: any; ingredients: any; instructions: any; } | null}
	 */
    let selectedRecipe = null;
    
    loadRecipes();

    /**
	 * @param {any} recipe
	 */
    function selectRecipe(recipe) {
        selectedRecipe = recipe;
    }
</script>

<h1>Receptek</h1>
<div class="container">
    <!-- Left-side full recipe detail -->
    <div class="recipe-detail">
        {#if selectedRecipe}
            <img src="{selectedRecipe.image}" alt="{selectedRecipe.title}" class="detail-image" />
            <h2>{selectedRecipe.title}</h2>
            <p>{selectedRecipe.description}</p>
    
            <h3>Kalóriaértékek adagonként:</h3>
            <ul>
                <li>Kalória: {selectedRecipe.kalória_adagonként} kcal</li>
                <li>Fehérje: {selectedRecipe.fehérje_adagonként} g</li>
                <li>Szénhidrát: {selectedRecipe.szh_adagonként} g</li>
                <li>Zsír: {selectedRecipe.zsír_adagonként} g</li>
            </ul>
    
            <h3>Ingredients:</h3>
            <ul>
                {#each selectedRecipe.ingredients as ingredient}
                    <li>{ingredient}</li>
                {/each}
            </ul>
    
            <h3>Instructions:</h3>
            <p>{selectedRecipe.instructions}</p>
        {/if}
    </div>
    
    
    <!-- Right-side recipe cards -->
    <div class="recipe-cards">
        {#each $recipes as recipe}
            <div class="card" on:click={() => selectRecipe(recipe)}>
                <img src="{recipe.image}" alt="{recipe.title}" class="card-image" />
                <div class="card-content">
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;
    }

    /* Left-side recipe detail */
    .recipe-detail {
        width: 60%;
        padding: 1rem;
        border-right: 1px solid #ccc;
    }

    .detail-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    /* Right-side recipe cards */
    .recipe-cards {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        overflow-y: auto;
    }

    .card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.2s ease-in-out;
        cursor: pointer;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card-image {
        width: 100%;
        height: auto;
    }

    .card-content {
        padding: 1rem;
        text-align: center;
    }
</style>
