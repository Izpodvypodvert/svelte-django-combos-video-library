import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import { d as derived, r as readable } from "../../../chunks/index.js";
import "regexparam";
function getLocation() {
  const hashPosition = window.location.href.indexOf("#/");
  let location = hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : "/";
  const qsPosition = location.indexOf("?");
  let querystring = "";
  if (qsPosition > -1) {
    querystring = location.substr(qsPosition + 1);
    location = location.substr(0, qsPosition);
  }
  return { location, querystring };
}
const loc = readable(
  null,
  // eslint-disable-next-line prefer-arrow-callback
  function start(set) {
    set(getLocation());
    const update = () => {
      set(getLocation());
    };
    window.addEventListener("hashchange", update, false);
    return function stop() {
      window.removeEventListener("hashchange", update, false);
    };
  }
);
derived(loc, ($loc) => $loc.location);
derived(loc, ($loc) => $loc.querystring);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checkform;
  let username = "", email = "", password = "";
  checkform = username !== "";
  return `<div class="px-8 py-6 mt-4 text-left bg-white shadow-lg"><h3 class="text-2xl font-bold text-center" data-svelte-h="svelte-1027oc5">Sign up</h3> <form><div class="mt-4"><div><label class="block" for="email">Email<label><input type="text" placeholder="Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"${add_attribute("value", email, 0)}></label></label></div> <div class="mt-4"><label class="block">Password<label><input type="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"${add_attribute("value", password, 0)}></label></label></div> <div class="mt-4"><label class="block">Username<label><input type="text" placeholder="Username" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"${add_attribute("value", username, 0)}></label></label></div> <div class="flex items-baseline justify-between"><button ${!checkform ? "disabled" : ""} type="submit" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign-up</button> <a href="/sign-in" class="text-sm text-blue-600 hover:underline" data-svelte-h="svelte-od591f">Login</a></div></div></form></div>`;
});
export {
  Page as default
};
