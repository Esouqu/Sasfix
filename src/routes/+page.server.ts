import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch('/api/posts');

  return {
    publicationsResponse: await res.json(),
  }
};