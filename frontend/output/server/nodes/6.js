

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sign-up/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.6f98d0ad.js","_app/immutable/chunks/scheduler.292d8fbe.js","_app/immutable/chunks/index.e8f90f00.js","_app/immutable/chunks/index.33f33a55.js","_app/immutable/chunks/store.cb9d5d67.js"];
export const stylesheets = [];
export const fonts = [];
