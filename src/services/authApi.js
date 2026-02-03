const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

// 🔹 Login
export const loginUser = async (formData) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔴 REQUIRED (cookie set here)
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

// 🔹 Logout
export const logoutUser = async () => {
  const res = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });

  return res.json();
};

// 🔹 Get logged-in user (optional but recommended)
export const getMe = async () => {
  const res = await fetch(`${API_URL}/me`, {
    credentials: "include",
  });

  if (!res.ok) return null;
  return res.json();
};
