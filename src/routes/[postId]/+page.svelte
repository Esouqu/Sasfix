<script lang="ts">
	import { page } from '$app/stores';
	import Comment from '$lib/components/Comment.svelte';
	import Publication from '$lib/components/Publication.svelte';
</script>

<div class="post-page">
	{#await $page.data.singlePublication}
		Loading...
	{:then singlePublication}
		{#if singlePublication}
			<Publication {...singlePublication} withoutCommentsLink />
		{/if}
	{/await}
	<div>
		{#await $page.data.commentsResponse}
			Loading...
		{:then commentsResponse}
			{#if commentsResponse}
				<div class="text-header" style="margin-bottom: 1.2rem;">
					{commentsResponse.comments.length} comments
				</div>
				<div class="comments-wrapper">
					{#each commentsResponse.comments as comment}
						<Comment {...comment} />
					{/each}
				</div>
			{/if}
		{/await}
	</div>
</div>

<style lang="scss">
	.post-page {
		display: flex;
		flex-direction: column;
		gap: 2.35rem;
	}
	.comments-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
