import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checkForm;
  let email = "", password = "";
  checkForm = email !== "";
  return `<div class="px-8 py-6 mt-4 text-left bg-white shadow-lg"><h3 class="text-2xl font-bold text-center" data-svelte-h="svelte-n0gll1">Login to your account</h3> <form><div class="mt-4"><div><label class="block" for="email">Email<label><input type="text" placeholder="Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"${add_attribute("value", email, 0)}></label></label></div> <div class="mt-4"><label class="block">Password<label><input type="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"${add_attribute("value", password, 0)}></label></label></div> <div class="flex items-baseline justify-between"><button ${!checkForm ? "disabled" : ""} type="submit" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button> <a href="/sign-up" class="text-sm text-blue-600 hover:underline" data-svelte-h="svelte-1xu137h">Sign-up</a></div></div></form></div>`;
});
export {
  Page as default
};
