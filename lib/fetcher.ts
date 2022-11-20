export default function getcher(url: string, data: undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "applicatio/json",
    },
    body: JSON.stringify(data),
  });
}
