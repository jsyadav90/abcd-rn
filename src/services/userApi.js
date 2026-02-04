const API_URL = `${import.meta.env.VITE_API_URL}/api/users`;

// 🔹 Fetch all users (protected)
// export const fetchUsers = async () => {
//   const res = await fetch(API_URL, {
//     credentials: "include", // 🔴 REQUIRED
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch users");
//   }

//   return res.json();
// };

import { apiFetch } from "./apiFetch";

export const fetchUsers = async () => {
  const res = await apiFetch(API_URL);

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to fetch users");
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
    credentials: "include",
  });

  let data = {};
  try {
    data = await res.json();
  } catch (e) {
    // ignore JSON parse errors
  }

  if (!res.ok) {
    const error = new Error(data.message || "Failed to delete user");
    error.status = res.status; // 👈 attach manually
    throw error;
  }

  return data;
};



// export const deleteUser = async (req, res) => {
//   try {
//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     // prevent self delete
//     if (req.user.id.toString() === req.params.id.toString()) {
//       return res
//         .status(403)
//         .json({ message: "You cannot delete your own account" });
//     }

//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (user.role === "super_admin") {
//       return res
//         .status(403)
//         .json({ message: "System super admin cannot be deleted" });
//     }

//     await UserLogin.findOneAndDelete({ user: user._id });
//     await User.findByIdAndDelete(user._id);

//     res.json({ message: "User deleted successfully" });
//   } catch (err) {
//     console.error("DELETE ERROR:", err);
//     res.status(500).json({ message: err.message });
//   }
// };


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
