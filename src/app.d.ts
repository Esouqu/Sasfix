import 'unplugin-icons/types/svelte';
import type { IPublicationsResponse, ICommentsResponse, IPublication } from "$lib/interfaces";

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			singlePublication?: Promise<IPublication>;
			publicationsResponse?: Promise<IPublicationsResponse>;
			commentsResponse?: Promise<ICommentsResponse>;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
