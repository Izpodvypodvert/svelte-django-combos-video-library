

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/combos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f7c03660.js","_app/immutable/chunks/scheduler.292d8fbe.js","_app/immutable/chunks/index.e8f90f00.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.82667fcb.js","_app/immutable/chunks/singletons.e47ddd63.js","_app/immutable/chunks/index.33f33a55.js","_app/immutable/chunks/store.cb9d5d67.js"];
export const stylesheets = ["_app/immutable/assets/3.170d6b34.css"];
export const fonts = [];
