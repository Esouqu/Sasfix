<script lang="ts">
	interface Props {
		text: string;
		isFirst?: boolean;
	}

	const { text, isFirst = false }: Props = $props();
</script>

<div class="tag" class:first={isFirst}>
	<span class="text-caption">{text}</span>
</div>

<style lang="scss">
	.tag {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 0.25rem;
		border-radius: 0.2rem;
		color: var(--text-color);
		background-color: #f5f5f5;

		&.first {
			margin-left: 0.25rem;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: -10%;
				z-index: -1;
				border-radius: 0.1rem 0.2rem;
				rotate: -45deg;
				height: 80%;
				aspect-ratio: 1 / 1;
				background-color: #f5f5f5;
				translate: 0 -50%;
				clip-path: polygon(0 0, 0 100%, 100% 0);
			}
		}
	}
</style>
