import { useNavigate } from "react-router-dom";
import AddUserForm from "./AddUserForm.jsx";
import { addUser } from "../../services/userApi";

const AddUserPage = () => {
  const navigate = useNavigate();

  const handleSaveUser = async (userData) => {
    try {
      await addUser(userData);
      navigate("/users");
    } catch (err) {
      console.error("User creation failed", err);
      alert("Failed to create user");
    }
  };

  return (
    <AddUserForm
      onSave={handleSaveUser}
      onClose={() => navigate("/users")}
    />
  );
};

export default AddUserPage;
