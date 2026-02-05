// services/apiFetch.js
export const apiFetch = async (url, options = {}) => {
  let res = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (res.status === 401) {
    // try refresh
    const refreshRes = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/refresh`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!refreshRes.ok) {
      window.location.href = "/login.html";
      throw new Error("Session expired");
    }

    // retry original request
    res = await fetch(url, {
      ...options,
      credentials: "include",
    });
  }

  return res;
};
