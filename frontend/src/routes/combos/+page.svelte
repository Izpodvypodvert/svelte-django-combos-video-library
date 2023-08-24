<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { state } from "../../store";


    let combos = []
    let kameos = []
    let tags = []
    let selectedTags = []
    let kameo = ''
    let tagClass = "badge"
    const character = $page.url.searchParams.get('character');

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
        const res = await fetch(`http://127.0.0.1:8000/api/v1/combos/?character__name=${character}`, requestOptions1);
        combos = await res.json()
        const res2 = await fetch('http://127.0.0.1:8000/api/v1/kameos', requestOptions1);
		kameos = await res2.json()
        const res3 = await fetch('http://127.0.0.1:8000/api/v1/tags', requestOptions1);
		tags = await res3.json()
        // selectedTags = [...tags]

    });

    const toggleKameo = ( kameoName) => {
        $: kameo = kameoName
    }
    
    const getFilteredCombos = (combos, kameoName='') => {
        if (selectedTags.length === 0 && !kameoName) {
            return combos
        }
        let new_combos = []
        let checker = (arr, target) => target.every(v => arr.includes(v));
        
        for (let i = 0; i < combos.length; i++) {

            if (checker(selectedTags.map(tag => tag.id), combos[i].tags.map(tag => tag.id))) {
                new_combos.push(combos[i])
                 
            } else if (checker(combos[i].tags.map(tag => tag.id), selectedTags.map(tag => tag.id))) {
                new_combos.push(combos[i])    
            }
           
        }
 
        // if (!kameoName) {
        //     return new_combos
        // }
         
 
        return new_combos.filter(combo => combo.kameo_name == kameoName)
    }

    const handleTag = (event) => {
        let tagID = event.target.value
        let tag = tags.filter(t => t.id == tagID)[0]

        
        if (!selectedTags.includes(tag)) {
            selectedTags.push(tag)
        } else {
            selectedTags = selectedTags.filter(item => item.id != tagID)
        }
        
        $: kameo = ''
        
    }

    const addToFavorites = async (combo) => {
        console.log($state.account.id, combo.id)
        let user = $state.account
        let url = `http://localhost:8000/api/v1/combos/${combo.id}/favorite/`
        let requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Token ${localStorage.getItem("auth_token")}`,
                },
                body: JSON.stringify({
                        combo,
                        user
                    }),

                }
        await fetch(url, requestOptions).catch(error => console.log(error))
    }
</script>
<h3 class="my-4 text-lg text-purple-800 font-bold">Optionally, you can select tags:</h3>
<div class="grid grid-rows-5 grid-flow-col gap-2">
{#each tags as tag}
        <label>
            <input
                type="checkbox"
                name="selectedTags"
                on:change={(event) => handleTag(event)}
                value={tag.id}
                             
            /> 
            <span class={tagClass} style="background-color:{tag.color}">{tag.name}</span>
        </label>
{/each}
</div>
<!-- <Checkbox bind:selectedTags={selectedTags} {tagClass} {tags}/> -->

<h3 class="my-8 text-lg text-purple-800 font-bold"> Choose your kameo: </h3>
<div class="grid grid-rows-2 grid-flow-col gap-4">
    {#each kameos as kameo}
    <div>
        <p class="text-center">{kameo.name}</p>
        <button on:click={() => toggleKameo( kameo.name)}>
            <img src={kameo.image}
             alt={kameo.name}
             style="width:70px;height:90px;"
             >
        </button>
    </div>
    {/each}
</div>
<h1 class="my-8 text-lg text-purple-800 font-bold"> {character} combos:</h1>

<ul>
    {#each getFilteredCombos(combos, kameo) as combo}
        
        <li class="text-purple-800 text-center text-lg my-2 border-t-4 bg-green-100">{combo.title}</li>
        {#each combo.tags as tag}
        <span class="badge" style="background-color:{tag.color}">{tag.name}</span> 
        {/each}
        <div class="my-2"></div>
        <iframe
         title="mk1"
         src={combo.clip_source == "T" ? `https://clips.twitch.tv/embed?clip=${combo.clip}&parent=localhost`: `http://www.youtube.com/embed/${combo.clip}`}
         frameborder="0"
         allowfullscreen="true"
         scrolling="no"
         height={iframeHeight}
         width={iframeWidth}
         >
        </iframe>
        <button on:click={() => addToFavorites(combo)}
                class="bg-orange-400 hover:bg-orange-600 text-white font-bold mt-2 mb-6 py-2 px-4 rounded-full"
            >add to favorites
        </button>
    {/each}
</ul>

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

