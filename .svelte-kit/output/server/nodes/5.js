

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/menu/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BDOVmd_Y.js","_app/immutable/chunks/scheduler.CszMd_qe.js","_app/immutable/chunks/index.B2ovvTLf.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
