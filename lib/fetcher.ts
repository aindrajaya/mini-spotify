export default async function fetcher(url: string, data = undefined) {
  const res = await fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status > 299 && res.status < 200) {
    throw new Error();
  }
  return res.json();
}
