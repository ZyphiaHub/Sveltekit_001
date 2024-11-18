import { c as create_ssr_component, d as each, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let weeklyMenu = Array(7).fill().map(() => Array(5).fill(""));
  let recipes = [];
  return ` <h1 data-svelte-h="svelte-vfdtr6">Heti Menü</h1> <table><thead><tr>${each(["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"], (day) => {
    return `<th>${escape(day)}</th>`;
  })}</tr></thead> <tbody>${each(Array(5), (_, rowIndex) => {
    return `<tr>${each(weeklyMenu, (column, columnIndex) => {
      return `<td><select><option value="" disabled selected data-svelte-h="svelte-sjomet">Válassz receptet</option>${each(recipes, (recipe) => {
        return `<option${add_attribute("value", recipe.title, 0)}>${escape(recipe.title)}</option>`;
      })}</select> </td>`;
    })} </tr>`;
  })}</tbody></table>  <button data-svelte-h="svelte-pewvzl">Menü mentése</button>`;
});
export {
  Page as default
};
