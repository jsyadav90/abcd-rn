import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddUserForm from "./AddUserForm.jsx";
import { fetchUserById, updateUser } from "../../services/userApi";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetchUserById(id);
        setUserData(res); // backend should return a user object
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    loadUser();
  }, [id]);

  const handleUpdate = async (updatedData) => {
    try {
      await updateUser(id, updatedData);
      navigate("/users");
    } catch (err) {
      console.error("Failed to update user", err);
      alert("Failed to update user");
    }
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <AddUserForm
      formData={userData}  // existing data
      onSave={handleUpdate} // update function
      onClose={() => navigate("/users")}
    />
  );
};

export default EditUserPage;
