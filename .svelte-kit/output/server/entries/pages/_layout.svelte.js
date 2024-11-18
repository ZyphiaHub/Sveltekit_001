import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css = {
  code: "nav.svelte-zcijlt.svelte-zcijlt{background-color:#333;color:white;padding:1rem}ul.svelte-zcijlt.svelte-zcijlt{display:flex;gap:1rem;list-style:none;margin:0;padding:0}li.svelte-zcijlt a.svelte-zcijlt{color:white;text-decoration:none}li.svelte-zcijlt a.svelte-zcijlt:hover{text-decoration:underline}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<!-- src/lib/Navbar.svelte -->\\r\\n<nav>\\r\\n    <ul>\\r\\n        <li><a href=\\"/\\">Kezdőlap</a></li>\\r\\n        <li><a href=\\"/menu\\">Heti Menü</a></li>\\r\\n        <li><a href=\\"/ingredients\\">Összetevők</a></li>\\r\\n        <li><a href=\\"/recipes\\">Receptek</a></li>\\r\\n        <li><a href=\\"/add-recipe\\">Új recept</a></li>\\r\\n    </ul>\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n    nav {\\r\\n        background-color: #333;\\r\\n        color: white;\\r\\n        padding: 1rem;\\r\\n    }\\r\\n    ul {\\r\\n        display: flex;\\r\\n        gap: 1rem;\\r\\n        list-style: none;\\r\\n        margin: 0;\\r\\n        padding: 0;\\r\\n    }\\r\\n    li a {\\r\\n        color: white;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    li a:hover {\\r\\n        text-decoration: underline;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAYI,+BAAI,CACA,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IACb,CACA,8BAAG,CACC,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACb,CACA,gBAAE,CAAC,eAAE,CACD,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,IACrB,CACA,gBAAE,CAAC,eAAC,MAAO,CACP,eAAe,CAAE,SACrB"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <nav class="svelte-zcijlt" data-svelte-h="svelte-1gi5vyq"><ul class="svelte-zcijlt"><li class="svelte-zcijlt"><a href="/" class="svelte-zcijlt">Kezdőlap</a></li> <li class="svelte-zcijlt"><a href="/menu" class="svelte-zcijlt">Heti Menü</a></li> <li class="svelte-zcijlt"><a href="/ingredients" class="svelte-zcijlt">Összetevők</a></li> <li class="svelte-zcijlt"><a href="/recipes" class="svelte-zcijlt">Receptek</a></li> <li class="svelte-zcijlt"><a href="/add-recipe" class="svelte-zcijlt">Új recept</a></li></ul> </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
