// const API_URL = "http://localhost:5000/api/users";
// const API_URL = `${import.meta.env.API_URL}/api/users`;
   const API_URL = `${import.meta.env.VITE_API_URL}/api/users`;

export const fetchUsers = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addUser = async (user) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
};
