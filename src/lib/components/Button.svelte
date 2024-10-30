<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		style?: 'like' | 'dislike' | 'default';
		color?: string;
		textColor?: string;
		isDisabled?: boolean;
		onclick?: ((e: MouseEvent) => void) | null;
		onkeydown?: ((e: KeyboardEvent) => void) | null;
		children: Snippet;
	}

	const { style = 'default', isDisabled, onclick, onkeydown, children }: ButtonProps = $props();
</script>

<div class="button {style}" class:disabled={isDisabled}>
	<button type="button" {onclick} {onkeydown}>
		{@render children()}
	</button>
</div>

<style lang="scss">
	.button {
		position: relative;

		&.disabled {
			opacity: 0.3;
			pointer-events: none;
		}

		&:hover {
			& button {
				filter: brightness(90%);
			}
		}

		&:active {
			& button {
				scale: 0.95;
			}
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.5rem;
			border: none;
			color: var(--text-color-variant);
			background-color: rgba(4 4 5 / 4%);
			user-select: none;
			cursor: pointer;
		}
	}
</style>
