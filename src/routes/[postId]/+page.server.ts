import { apiRoutes } from "$lib/constants";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, fetch }) => {
  const [publicationsResponse, commentsResponse] = await Promise.all([
    fetch(apiRoutes.posts + `/${params.postId}`),
    fetch(apiRoutes.comments + `/${params.postId}`),
  ]);

  return {
    singlePublication: await publicationsResponse.json(),
    commentsResponse: await commentsResponse.json(),
  }
};