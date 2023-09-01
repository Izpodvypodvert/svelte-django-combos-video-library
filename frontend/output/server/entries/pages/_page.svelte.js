import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let characters = [];
  return `<h1 class="my-8 text-lg text-purple-800 font-bold" data-svelte-h="svelte-1fxpa8w">Choose your character:</h1> <div class="grid grid-rows-5 grid-flow-col gap-4">${each(characters, (character) => {
    return `<div><p class="text-left">${escape(character.name)}</p> <a${add_attribute("href", `/combos?character=${character.name}`, 0)}><img${add_attribute("src", character.image, 0)}${add_attribute("alt", character.name, 0)} style="width:70px;height:90px;"></a> </div>`;
  })}</div>`;
});
export {
  Page as default
};
