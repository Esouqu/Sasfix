<script lang="ts">
	import type { IPublication } from '$lib/interfaces';
	import ReactionGroup from './ReactionGroup.svelte';
	import Tag from './Tag.svelte';

	interface Props extends IPublication {
		withoutCommentsLink?: boolean;
	}

	const { id, title, body, reactions, tags, withoutCommentsLink }: Props = $props();
</script>

<div class="publication">
	<div class="publication-content">
		<h2 class="text-header">{title}</h2>
		<p class="text-body">{body}</p>
	</div>
	<div class="publication-footer">
		<ReactionGroup likes={reactions.likes} dislikes={reactions.dislikes} />
		{#if !withoutCommentsLink}
			<a href="/{id}" class="text-caption" aria-label="Comments">Open comments</a>
		{/if}
		<span class="text-caption" style="color: #C8C8C8;">Today</span>
		<div class="publication-tags">
			{#each tags as tag, idx}
				<Tag text={tag} isFirst={idx === 0} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.publication {
		&-content {
			& h2 {
				margin: 0;
				margin-bottom: 0.55rem;
			}

			& p {
				margin: 0;
				margin-bottom: 1.2rem;
			}
		}
		&-footer {
			display: flex;
			align-items: center;
			gap: 0.65rem;
		}
		&-tags {
			display: flex;
			gap: 0.3rem;
		}
	}
</style>
