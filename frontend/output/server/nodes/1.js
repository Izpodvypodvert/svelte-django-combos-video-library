

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.df1d1904.js","_app/immutable/chunks/scheduler.292d8fbe.js","_app/immutable/chunks/index.e8f90f00.js","_app/immutable/chunks/stores.82667fcb.js","_app/immutable/chunks/singletons.e47ddd63.js","_app/immutable/chunks/index.33f33a55.js"];
export const stylesheets = [];
export const fonts = [];
