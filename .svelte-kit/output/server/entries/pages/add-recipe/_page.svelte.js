import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "form.svelte-6efcxf{display:flex;flex-direction:column;gap:1rem;max-width:400px;margin:0 auto}.form-group.svelte-6efcxf{display:flex;flex-direction:column}label.svelte-6efcxf{font-weight:bold;margin-bottom:0.5rem}input.svelte-6efcxf,textarea.svelte-6efcxf{padding:0.5rem;font-size:1rem;border:1px solid #ccc;border-radius:4px}button.svelte-6efcxf{padding:0.75rem;font-size:1rem;color:white;background-color:#8da08d;border:none;border-radius:4px;cursor:pointer}button.svelte-6efcxf:hover{background-color:#094a0c}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    let title = '';\\r\\n    let description = '';\\r\\n    let ingredients = '';\\r\\n    let image = '';\\r\\n    let tags = '';\\r\\n\\r\\n    async function addRecipe() {\\r\\n        const newRecipe = {\\r\\n            title,\\r\\n            description,\\r\\n            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),\\r\\n            image,\\r\\n            tags: tags.split(',').map(tag => tag.trim()),\\r\\n            kalória_adagonként: 0,\\r\\n        fehérje_adagonként: 0,\\r\\n        szh_adagonként: 0,\\r\\n        zsír_adagonként: 0\\r\\n        };\\r\\n\\r\\n        const response = await fetch('/api/recipes', {\\r\\n            method: 'POST',\\r\\n            headers: { 'Content-Type': 'application/json' },\\r\\n            body: JSON.stringify(newRecipe)\\r\\n        });\\r\\n\\r\\n        if (response.ok) {\\r\\n            alert('Recipe added successfully!');\\r\\n            title = '';\\r\\n            description = '';\\r\\n            ingredients = '';\\r\\n            image = '';\\r\\n            tags = '';\\r\\n        } else {\\r\\n            alert('Failed to add recipe.');\\r\\n        }\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<h1>Add a New Recipe</h1>\\r\\n<form on:submit|preventDefault={addRecipe}>\\r\\n    <div class=\\"form-group\\">\\r\\n        <label>Recipe Title</label>\\r\\n        <input type=\\"text\\" bind:value={title} required />\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"form-group\\">\\r\\n        <label>Description</label>\\r\\n        <textarea bind:value={description}></textarea>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"form-group\\">\\r\\n        <label>Ingredients (comma-separated)</label>\\r\\n        <input type=\\"text\\" bind:value={ingredients} required />\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"form-group\\">\\r\\n        <label>Image URL</label>\\r\\n        <input type=\\"url\\" bind:value={image} />\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"form-group\\">\\r\\n        <label>Tags (comma-separated)</label>\\r\\n        <input type=\\"text\\" bind:value={tags} />\\r\\n    </div>\\r\\n\\r\\n    <button type=\\"submit\\">Add Recipe</button>\\r\\n</form>\\r\\n\\r\\n<style>\\r\\n    form {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1rem;\\r\\n        max-width: 400px;\\r\\n        margin: 0 auto;\\r\\n    }\\r\\n\\r\\n    .form-group {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n\\r\\n    label {\\r\\n        font-weight: bold;\\r\\n        margin-bottom: 0.5rem;\\r\\n    }\\r\\n\\r\\n    input, textarea {\\r\\n        padding: 0.5rem;\\r\\n        font-size: 1rem;\\r\\n        border: 1px solid #ccc;\\r\\n        border-radius: 4px;\\r\\n    }\\r\\n\\r\\n    button {\\r\\n        padding: 0.75rem;\\r\\n        font-size: 1rem;\\r\\n        color: white;\\r\\n        background-color: #8da08d;\\r\\n        border: none;\\r\\n        border-radius: 4px;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n\\r\\n    button:hover {\\r\\n        background-color: #094a0c;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsEI,kBAAK,CACD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IACd,CAEA,yBAAY,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CAEA,mBAAM,CACF,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,MACnB,CAEA,mBAAK,CAAE,sBAAS,CACZ,OAAO,CAAE,MAAM,CACf,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GACnB,CAEA,oBAAO,CACH,OAAO,CAAE,OAAO,CAChB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OACZ,CAEA,oBAAM,MAAO,CACT,gBAAgB,CAAE,OACtB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "";
  let ingredients = "";
  let image = "";
  let tags = "";
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-llc9xo">Add a New Recipe</h1> <form class="svelte-6efcxf"><div class="form-group svelte-6efcxf"><label class="svelte-6efcxf" data-svelte-h="svelte-8zog1g">Recipe Title</label> <input type="text" required class="svelte-6efcxf"${add_attribute("value", title, 0)}></div> <div class="form-group svelte-6efcxf"><label class="svelte-6efcxf" data-svelte-h="svelte-yaz8sq">Description</label> <textarea class="svelte-6efcxf">${escape("")}</textarea></div> <div class="form-group svelte-6efcxf"><label class="svelte-6efcxf" data-svelte-h="svelte-1roj1gw">Ingredients (comma-separated)</label> <input type="text" required class="svelte-6efcxf"${add_attribute("value", ingredients, 0)}></div> <div class="form-group svelte-6efcxf"><label class="svelte-6efcxf" data-svelte-h="svelte-17joo3s">Image URL</label> <input type="url" class="svelte-6efcxf"${add_attribute("value", image, 0)}></div> <div class="form-group svelte-6efcxf"><label class="svelte-6efcxf" data-svelte-h="svelte-yvprin">Tags (comma-separated)</label> <input type="text" class="svelte-6efcxf"${add_attribute("value", tags, 0)}></div> <button type="submit" class="svelte-6efcxf" data-svelte-h="svelte-1wune54">Add Recipe</button> </form>`;
});
export {
  Page as default
};