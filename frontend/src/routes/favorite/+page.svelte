<script>
    import { onMount } from 'svelte';
    import { URL } from "../../constants"
    import { parent } from "../../constants"
    import { state } from "../../store";

let combos = []
let characters = []
let unique_characters = []
let combos_backup = []
    
let w = window.innerWidth;
let iframeWidth = Math.round(w / 2).toString()
if (w < 930) {
    iframeWidth = w.toString()    
}
let iframeHeight = Math.round(iframeWidth / 1.64).toString()

onMount(async () => {
    let requestOptions1 = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Token ${localStorage.getItem("auth_token")}`,
                },}
    let url = `${URL}/api/v1/combos/?is_favorited=${Number(true)}`
    const res = await fetch(url, requestOptions1);
    combos = await res.json()
    combos_backup = [...combos]
    characters = combos.map(combo => combo.character)
    unique_characters = [...new Map(characters.map((item) => [item["id"], item])).values()]
});


const removeFromFavorites = async (combo) => {
        let url = `${URL}/api/v1/combos/${combo.id}/favorite/`
        let requestOptions = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Token ${localStorage.getItem("auth_token")}`,
                },}
        await fetch(url, requestOptions).catch(error => console.log(error))
        let requestOptions1 = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Token ${localStorage.getItem("auth_token")}`,
                },}
        let url2 = `${URL}/api/v1/combos/?is_favorited=${Number(true)}`
        const res = await fetch(url2, requestOptions1);
        combos = await res.json()

    }

    

   const handleCharacters = (character_name) => {
       combos = combos_backup.filter(combo => combo.character.name == character_name)
   }
</script>
{#if $state.account}

<h2 class="my-8 text-lg text-purple-800 font-bold">Choose your favorite characters: </h2>
<div class="grid grid-rows-2 grid-flow-col gap-4">
	{#each unique_characters as character}
	<div>
		<p class="text-left">{character.name}</p>
		<button on:click={() => handleCharacters(character.name)}>
			<img src={character.image}
				alt={character.name}
				style="width:70px;height:90px;"
				>
		</button>
	</div>
	{/each}
</div>

<h1 class="my-8 text-lg text-purple-800 font-bold"> Favorite combos:</h1>
<ul>
    {#each combos as combo}
        
        <li class="text-purple-800 text-center text-lg my-2 border-t-4 bg-green-100">{combo.title}</li>
        {#each combo.tags as tag}
        <span class="badge" style="background-color:{tag.color}">{tag.name}</span> 
        {/each}
        <div class="my-2"></div>
        <iframe
         title="mk1"
         src={combo.clip_source == "T" ? `https://clips.twitch.tv/embed?clip=${combo.clip}&parent=${parent}`: `https://www.youtube.com/embed/${combo.clip}`}
         frameborder="0"
         allowfullscreen="true"
         scrolling="no"
         height={iframeHeight}
         width={iframeWidth}
         >
        </iframe>
        <button on:click={() => removeFromFavorites(combo)}
            class="bg-orange-400 hover:bg-orange-600 text-white font-bold mt-2 mb-6 py-2 px-4 rounded-full"
        >remove from favorites
    </button>
        
    {/each}
</ul>
{:else}
<a 
    href="/sign-up" 
    class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
    Sign up
</a>
<h1 class="my-8 text-lg text-purple-800 font-bold">
    so that you can add combos to your favorites.
</h1>
{/if}
<style>
    .badge {
  background-color: red;
  color: white;
  padding: 4px 8px;
  margin-right: 10px;
  text-align: center;
  border-radius: 5px;
}
</style>

