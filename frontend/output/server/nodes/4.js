

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/favorite/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9780d171.js","_app/immutable/chunks/scheduler.292d8fbe.js","_app/immutable/chunks/index.e8f90f00.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.170d6b34.css"];
export const fonts = [];
