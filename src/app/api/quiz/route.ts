import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: unknown },
) {
  console.log("params: ", params);

  // const searchParams = request.nextUrl.searchParams;

  // const keysIterator = searchParams.keys();
  // const queryKeys = Array.from(keysIterator);

  // const queries = {};
  // queryKeys.forEach((key) => {
  //   queries[key] = searchParams.get(key);
  // });

  const res = await fetch(`${process.env.API_URL}?type=multiple&amount=10`);

  if (!res.ok) {
    if (res.status === 429) {
      // const response = Response.json({
      //   message: "Too many request. Please try again",
      //   status: res.status,
      //   statusText: res.statusText,
      // });

      // return response;
      throw new Error("Too many request. Please try again.");
    }

    throw new Error("Failed to fetch data.");
  }

  const data = await res.json();

  // return Response.json({
  //   data,
  //   status: res.status,
  //   statusText: res.statusText,
  // });
  return Response.json(data);
}
