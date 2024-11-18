<script>
    import { onMount } from 'svelte';

    // 7 oszlop, mindegyikben 5 recept
    // @ts-ignore
    let weeklyMenu = Array(7).fill().map(() => Array(5).fill(''));
    /**
	 * @type {any[]}
	 */
    let recipes = []; // Ezt a receptadatok betöltéséhez használjuk

    async function loadMenu() {
        const response = await fetch('/api/menu');
        if (response.ok) {
            const data = await response.json();
            weeklyMenu = data.menu.map((/** @type {{ recipes: any; }} */ day) => day.recipes);
        }
    }

    async function saveMenu() {
        const response = await fetch('/api/menu', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ menu: weeklyMenu.map((recipes, index) => ({ day: getDayName(index), recipes })) })
        });
        
        if (!response.ok) {
            console.error('Failed to save menu');
        }
    }

    /**
	 * @param {number} index
	 */
    function getDayName(index) {
        const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
        return days[index];
    }

    onMount(() => {
        loadMenu();
        loadRecipes();
    });

    async function loadRecipes() {
        const response = await fetch('/api/recipes');
        recipes = await response.json();
    }
</script>

<!-- Heti menü táblázat megjelenítése -->
<h1>Heti Menü</h1>
<table>
    <thead>
        <tr>
            {#each ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"] as day}
                <th>{day}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Array(5) as _, rowIndex}
            <tr>
                {#each weeklyMenu as column, columnIndex}
                    <td>
                        <select bind:value={weeklyMenu[columnIndex][rowIndex]} on:change={saveMenu}>
                            <option value="" disabled selected>Válassz receptet</option>
                            {#each recipes as recipe}
                                <option value={recipe.title}>{recipe.title}</option>
                            {/each}
                        </select>
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<!-- Menü mentése gomb -->
<button on:click={saveMenu}>Menü mentése</button>
