<!-- src/lib/Navbar.svelte -->
<nav>
    <ul>
        <li><a href="/">Kezdőlap</a></li>
        <li><a href="/menu">Heti Menü</a></li>
        <li><a href="/ingredients">Összetevők</a></li>
        <li><a href="/recipes">Receptek</a></li>
        <li><a href="/add-recipe">Új recept</a></li>
    </ul>
</nav>

<style>
    nav {
        background-color: #333;
        color: white;
        padding: 1rem;
    }
    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li a {
        color: white;
        text-decoration: none;
    }
    li a:hover {
        text-decoration: underline;
    }
</style>
