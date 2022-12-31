export default async function fetcher(url: string, data?: any) {
  const res = await fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  if (res.status > 299 && res.status < 200) {
    throw new Error();
  }
  return res.json();
}
