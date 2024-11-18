<script>
    import { onMount } from 'svelte';
    let weight = '';
    let height = '';
    /**
	 * @type {string | number | null}
	 */
    let bmi = null;
    let message = '';

    // Variables to hold today's menu
    /**
	 * @type {null}
	 */
    let todayMenu = null;

    function calculateBMI() {
        if (weight && height) {
            const heightInMeters = height / 100;
            bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

            if (bmi < 18.5) {
                message = 'Underweight';
            } else if (bmi < 24.9) {
                message = 'Normal weight';
            } else if (bmi < 29.9) {
                message = 'Overweight';
            } else {
                message = 'Obesity';
            }
        }
    }

    // Function to load today's menu from menu.json
    async function loadTodayMenu() {
        const response = await fetch('/api/menu');
        if (response.ok) {
            const data = await response.json();
            const dayIndex = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
            todayMenu = data.menu[dayIndex ? dayIndex - 1 : 6].recipes; // Adjust for Monday start
        }
    }

    onMount(() => {
        loadTodayMenu();
    });
</script>

<!-- Layout with the menu card on the left and the BMI calculator on the right -->
<div class="container">
    <!-- Today's menu card -->
    <div class="menu-card">
        <h2>Mai menü</h2>
        {#if todayMenu}
            <ul>
                {#each todayMenu as recipe}
                    <li>{recipe}</li>
                {/each}
            </ul>
        {:else}
            <p>Loading menu...</p>
        {/if}
    </div>

    <!-- BMI Calculator on the right -->
    <div class="bmi-calculator">
        <h2>BMI Calculator</h2>
        <label>
            Weight (kg):
            <input type="number" bind:value={weight} on:input={calculateBMI} min="0" />
        </label>
        <label>
            Height (cm):
            <input type="number" bind:value={height} on:input={calculateBMI} min="0" />
        </label>

        {#if bmi}
            <p>Your BMI: {bmi}</p>
            <p>{message}</p>
        {/if}
    </div>
</div>

<style>
    .container {
        display: flex;
        gap: 2rem;
        padding: 1rem;
    }

    .menu-card, .bmi-calculator {
        flex: 1;
        padding: 1rem;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .menu-card h2, .bmi-calculator h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .menu-card ul {
        padding: 0;
        list-style-type: none;
    }

    .menu-card li {
        font-size: 1.1rem;
        margin: 0.5rem 0;
    }

    .bmi-calculator label {
        display: block;
        margin: 0.5rem 0;
    }

    .bmi-calculator input {
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.25rem;
    }

    .bmi-calculator p {
        margin: 0.5rem 0;
        font-weight: bold;
    }
</style>
