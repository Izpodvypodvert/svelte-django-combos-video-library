<script>
    export let selectedTags, tagClass, tags;
</script>

{#each tags as tag}
        <label>
            <input
                type="checkbox"
                name="selectedTags"
                bind:group={selectedTags}
                value={tag}
                checked="true"             
            /> 
            <span class={tagClass} style="background-color:{tag.color}">{tag.name}</span>
        </label>
{/each}