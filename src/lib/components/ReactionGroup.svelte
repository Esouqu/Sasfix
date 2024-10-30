<script lang="ts">
	import LikeIcon from '~icons/fa6-regular/heart';
	import FilledLikeIcon from '~icons/fa6-solid/heart';
	import DislikeIcon from '~icons/fa6-regular/thumbs-down';
	import FilledDislikeIcon from '~icons/fa6-solid/thumbs-down';

	interface Props {
		likes: number;
		dislikes: number;
	}

	let { likes, dislikes }: Props = $props();

	let groupValue: string | null = $state(null);
	let reactionsOptions = $derived([
		{
			DefaultIcon: LikeIcon,
			FilledIcon: FilledLikeIcon,
			counter: groupValue === 'like' ? likes + 1 : likes,
			text: 'Like',
			value: 'like'
		},
		{
			DefaultIcon: DislikeIcon,
			FilledIcon: FilledDislikeIcon,
			counter: groupValue === 'dislike' ? dislikes + 1 : dislikes,
			text: 'Trash',
			value: 'dislike'
		}
	]);

	function check(val: string) {
		if (groupValue === val) {
			groupValue = null;
		} else {
			groupValue = val;
		}
	}
</script>

<div class="reaction-group">
	{#each reactionsOptions as { text, DefaultIcon, FilledIcon, counter, value } (text)}
		<button
			type="button"
			class="reaction-group-item {value} text-caption"
			class:checked={groupValue === value}
			onclick={(e) => check(value)}
		>
			<span>
				{#if groupValue === value}
					<FilledIcon width="0.875rem" />
				{:else}
					<DefaultIcon width="0.875rem" />
				{/if}
			</span>
			<span>{text}</span>
			<span class="reaction-group-counter">{counter}</span>
		</button>
	{/each}
</div>

<style lang="scss">
	.reaction-group {
		display: flex;
		gap: 0.0625rem;
		border-radius: 50rem;
		width: min-content;
		overflow: hidden;

		&-counter {
			opacity: 40%;
			font-variant-numeric: tabular-nums;
		}

		&-item {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.4rem 0.5rem 0.4rem 0.75rem;
			border: none;
			color: var(--text-color-variant);
			background-color: rgba(4 4 5 / 4%);
			transition: background-color 0.2s ease-in-out;
			user-select: none;
			cursor: pointer;

			& * {
				&:first-child {
					margin-right: 0.25rem;
				}

				&:nth-child(2) {
					margin-right: 0.4rem;
				}
			}

			&.checked {
				&.like {
					color: white;
					background-color: var(--red-color);

					& .reaction-group-counter {
						opacity: 100%;
					}
				}

				&.dislike {
					color: white;
					background-color: var(--text-color-variant);
				}
			}

			&:hover {
				background-color: rgb(0 0 0 / 10%);
			}

			& span {
				z-index: 1;
				display: flex;
				text-align: start;
				user-select: none;
				pointer-events: none;
			}
		}
	}
</style>
