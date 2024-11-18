

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DmVmq7hj.js","_app/immutable/chunks/scheduler.CszMd_qe.js","_app/immutable/chunks/index.B2ovvTLf.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.C9RZqJXW.js"];
export const stylesheets = ["_app/immutable/assets/6.CRHQ-qv3.css"];
export const fonts = [];
