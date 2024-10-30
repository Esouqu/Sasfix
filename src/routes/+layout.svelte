<script lang="ts">
	import IKakProsto from '$lib/components/IKakProsto.svelte';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="layout">
	<IKakProsto />
	{@render children()}
</div>

<style>
	.layout {
		max-width: 676px;
		margin: 0.5rem auto;
	}
</style>
