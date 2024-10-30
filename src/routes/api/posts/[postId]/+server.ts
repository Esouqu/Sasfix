import { type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params, fetch }) => {
  try {
    const url = `https://dummyjson.com/posts/${params.postId}`;
    const res = await fetch(url).then((res) => res.json());

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    const err = error as Error;

    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};