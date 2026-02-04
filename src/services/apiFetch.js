export const apiFetch = async (url, options = {}) => {
  let res = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      ...options.headers,
    },
  });

  if (res.status === 401) {
    // try refresh
    const refreshRes = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (!refreshRes.ok) {
      throw new Error("Session expired. Please login again.");
    }

    const data = await refreshRes.json();
    localStorage.setItem("accessToken", data.accessToken);

    // retry original request
    res = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
        ...options.headers,
      },
    });
  }

  return res;
};
