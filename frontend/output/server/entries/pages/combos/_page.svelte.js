import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute, n as null_to_empty } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { s as state } from "../../../chunks/store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".badge.svelte-193k8i0{background-color:red;color:white;padding:4px 8px;margin-right:10px;text-align:center;border-radius:5px}",
  map: null
};
let tagClass = "badge";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_state;
  let $page, $$unsubscribe_page;
  $$unsubscribe_state = subscribe(state, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let combos = [];
  let kameos = [];
  let tags = [];
  let selectedTags = [];
  let kameo = "";
  const character = $page.url.searchParams.get("character");
  let w = window.innerWidth;
  let iframeWidth = Math.round(w / 2).toString();
  if (w < 930) {
    iframeWidth = w.toString();
  }
  let iframeHeight = Math.round(iframeWidth / 1.64).toString();
  const getFilteredCombos = (combos2, kameoName = "") => {
    if (selectedTags.length === 0 && !kameoName) {
      return combos2;
    }
    let new_combos = [];
    let checker = (arr, target) => target.every((v) => arr.includes(v));
    for (let i = 0; i < combos2.length; i++) {
      if (checker(selectedTags.map((tag) => tag.id), combos2[i].tags.map((tag) => tag.id))) {
        new_combos.push(combos2[i]);
      } else if (checker(combos2[i].tags.map((tag) => tag.id), selectedTags.map((tag) => tag.id))) {
        new_combos.push(combos2[i]);
      }
    }
    return new_combos.filter((combo) => combo.kameo_name == kameoName);
  };
  $$result.css.add(css);
  $$unsubscribe_state();
  $$unsubscribe_page();
  return `<h3 class="my-4 text-lg text-purple-800 font-bold" data-svelte-h="svelte-jof8kw">Optionally, you can select tags:</h3> <div class="grid grid-rows-5 grid-flow-col gap-2">${each(tags, (tag) => {
    return `<label><input type="checkbox" name="selectedTags"${add_attribute("value", tag.id, 0)}> <span class="${escape(null_to_empty(tagClass), true) + " svelte-193k8i0"}" style="${"background-color:" + escape(tag.color, true)}">${escape(tag.name)}</span> </label>`;
  })}</div>  <h3 class="my-8 text-lg text-purple-800 font-bold" data-svelte-h="svelte-12ozpks">Choose your kameo:</h3> <div class="grid grid-rows-2 grid-flow-col gap-4">${each(kameos, (kameo2) => {
    return `<div><p class="text-center">${escape(kameo2.name)}</p> <button><img${add_attribute("src", kameo2.image, 0)}${add_attribute("alt", kameo2.name, 0)} style="width:70px;height:90px;"></button> </div>`;
  })}</div> <h1 class="my-8 text-lg text-purple-800 font-bold">${escape(character)} combos:</h1> <ul>${each(getFilteredCombos(combos, kameo), (combo) => {
    return `<li class="text-purple-800 text-center text-lg my-2 border-t-4 bg-green-100">${escape(combo.title)}</li> ${each(combo.tags, (tag) => {
      return `<span class="badge svelte-193k8i0" style="${"background-color:" + escape(tag.color, true)}">${escape(tag.name)}</span>`;
    })} <div class="my-2"></div> <iframe title="mk1"${add_attribute(
      "src",
      combo.clip_source == "T" ? `https://clips.twitch.tv/embed?clip=${combo.clip}&parent=localhost` : `http://www.youtube.com/embed/${combo.clip}`,
      0
    )} frameborder="0" allowfullscreen="true" scrolling="no"${add_attribute("height", iframeHeight, 0)}${add_attribute("width", iframeWidth, 0)}></iframe> <button class="bg-orange-400 hover:bg-orange-600 text-white font-bold mt-2 mb-6 py-2 px-4 rounded-full" data-svelte-h="svelte-1ngcf74">add to favorites
        </button>`;
  })} </ul>`;
});
export {
  Page as default
};
