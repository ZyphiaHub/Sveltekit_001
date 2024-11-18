

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ingredients/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.D1iQa9NX.js","_app/immutable/chunks/scheduler.CszMd_qe.js","_app/immutable/chunks/index.B2ovvTLf.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/4.BxWfS2aY.css"];
export const fonts = [];
