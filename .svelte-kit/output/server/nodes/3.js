

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-recipe/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.5qpih04X.js","_app/immutable/chunks/scheduler.CszMd_qe.js","_app/immutable/chunks/index.B2ovvTLf.js"];
export const stylesheets = ["_app/immutable/assets/3.ZFMWBfjP.css"];
export const fonts = [];
