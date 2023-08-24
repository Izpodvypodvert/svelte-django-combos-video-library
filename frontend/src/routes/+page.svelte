<script>
	import { onMount } from 'svelte';
	import { state } from "../store";

	let characters = []

	onMount(async () => {
		const res = await fetch('http://127.0.0.1:8000/api/v1/characters');
		characters = await res.json()

	});


	
</script>

<h1 class="my-8 text-lg text-purple-800 font-bold"> Choose your character: </h1>
<div class="grid grid-rows-5 grid-flow-col gap-4">
	{#each characters as character}
	<div>
		<p class="text-left">{character.name}</p>
		<a href={`/combos?character=${character.name}`}>
			<img src={character.image}
				alt={character.name}
				style="width:70px;height:90px;"
				>
		</a>
	</div>
	{/each}

</div>

