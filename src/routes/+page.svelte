<script lang="ts">
	import { page } from '$app/stores';
	import Publication from '$lib/components/Publication.svelte';
</script>

<div class="home-page">
	{#await $page.data.publicationsResponse}
		Loading...
	{:then publicationsResponse}
		{#if publicationsResponse}
			<div class="publications">
				{#each publicationsResponse.posts as publication}
					<Publication {...publication} />
				{/each}
			</div>
		{/if}
	{/await}
</div>

<style lang="scss">
	.publications {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
