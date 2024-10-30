<script lang="ts">
	import type { IComment } from '$lib/interfaces';
	import userImage from '$lib/assets/userImagePlaceholder.png';

	const { body, user }: IComment = $props();

	const deletedText = 'This comment has been deleted.';

	let isDeleted = $state(false);

	function returnComment() {
		isDeleted = false;
	}

	function deleteComment() {
		isDeleted = true;
	}
</script>

<div class="comment">
	<div class="comment-image">
		<img src={userImage} alt="User Avatar" />
	</div>
	<div class="comment-content">
		<div class="comment-username text-body">{user.username}</div>
		{#if isDeleted}
			<div class="comment-body text-body" style="display: inline;">{deletedText}</div>
			<button type="button" class="comment-return-button text-body" onclick={returnComment}>
				Return
			</button>
		{:else}
			<div class="comment-body text-body">{body}</div>
			<div class="comment-footer">
				<span class="text-caption" style="margin-right: 1rem; color: #C8C8C8;">Today</span>
				<button type="button" class="comment-delete-button text-caption" onclick={deleteComment}>
					Delete
				</button>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.comment {
		display: flex;
		gap: 0.5rem;
		color: var(--text-color);

		&-image {
			display: flex;
			align-items: start;
			border-radius: 50%;

			& img {
				object-fit: contain;
				width: 100%;
				user-select: none;
			}
		}

		&-username {
			margin-bottom: 0.25rem;
			font-weight: 600;
		}

		&-body {
			margin-bottom: 0.5rem;
		}

		&-delete-button {
			border: none;
			padding: 0;
			text-decoration: underline;
			text-underline-offset: 0.25rem;
			color: var(--red-color);
			background-color: transparent;
			cursor: pointer;

			&:hover {
				opacity: 0.7;
			}
		}

		&-return-button {
			display: inline;
			padding: 0;
			border: none;
			text-decoration-color: #ff6b0030;
			text-decoration-line: underline;
			text-underline-offset: 0.25rem;
			color: var(--primary-color);
			background-color: transparent;
			cursor: pointer;

			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>
