

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sign-in/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.076cf48c.js","_app/immutable/chunks/scheduler.292d8fbe.js","_app/immutable/chunks/index.e8f90f00.js","_app/immutable/chunks/store.cb9d5d67.js","_app/immutable/chunks/index.33f33a55.js"];
export const stylesheets = [];
export const fonts = [];
