const API_URL = `${import.meta.env.VITE_API_URL}/api/users`;

// 🔹 Fetch all users (protected)
export const fetchUsers = async () => {
  const res = await fetch(API_URL, {
    credentials: "include", // 🔴 REQUIRED
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

// 🔹 Add user (admin only)
export const addUser = async (user) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔴 REQUIRED
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to add user");
  }

  return res.json();
};

// 🔹 Fetch single user
export const fetchUserById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    credentials: "include", // 🔴 REQUIRED
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
};

// 🔹 Update user
export const updateUser = async (id, user) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔴 REQUIRED
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to update user");
  }

  return res.json();
};

// 🔹 Delete user
export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include", // 🔴 REQUIRED
  });

  if (!res.ok) {
    throw new Error("Failed to delete user");
  }

  return res.json();
};

// 🔹 Enable / Disable login
export const toggleUserLogin = async (id) => {
  const res = await fetch(`${API_URL}/${id}/toggle-login`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔴 REQUIRED
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Action not allowed");
  }

  return data;
};
