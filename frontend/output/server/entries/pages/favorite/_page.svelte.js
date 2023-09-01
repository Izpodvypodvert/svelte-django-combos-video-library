import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".badge.svelte-193k8i0{background-color:red;color:white;padding:4px 8px;margin-right:10px;text-align:center;border-radius:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let combos = [];
  let unique_characters = [];
  let w = window.innerWidth;
  let iframeWidth = Math.round(w / 2).toString();
  if (w < 930) {
    iframeWidth = w.toString();
  }
  let iframeHeight = Math.round(iframeWidth / 1.64).toString();
  $$result.css.add(css);
  return `<h2 class="my-8 text-lg text-purple-800 font-bold" data-svelte-h="svelte-16ppbfh">Choose your favorite characters:</h2> <div class="grid grid-rows-2 grid-flow-col gap-4">${each(unique_characters, (character) => {
    return `<div><p class="text-left">${escape(character.name)}</p> <button><img${add_attribute("src", character.image, 0)}${add_attribute("alt", character.name, 0)} style="width:70px;height:90px;"></button> </div>`;
  })}</div> <h1 class="my-8 text-lg text-purple-800 font-bold" data-svelte-h="svelte-16j2fta">Favorite combos:</h1> <ul>${each(combos, (combo) => {
    return `<li class="text-purple-800 text-center text-lg my-2 border-t-4 bg-green-100">${escape(combo.title)}</li> ${each(combo.tags, (tag) => {
      return `<span class="badge svelte-193k8i0" style="${"background-color:" + escape(tag.color, true)}">${escape(tag.name)}</span>`;
    })} <div class="my-2"></div> <iframe title="mk1"${add_attribute(
      "src",
      combo.clip_source == "T" ? `https://clips.twitch.tv/embed?clip=${combo.clip}&parent=localhost` : `http://www.youtube.com/embed/${combo.clip}`,
      0
    )} frameborder="0" allowfullscreen="true" scrolling="no"${add_attribute("height", iframeHeight, 0)}${add_attribute("width", iframeWidth, 0)}></iframe> <button class="bg-orange-400 hover:bg-orange-600 text-white font-bold mt-2 mb-6 py-2 px-4 rounded-full" data-svelte-h="svelte-h1ad22">remove from favorites
    </button>`;
  })} </ul>`;
});
export {
  Page as default
};
