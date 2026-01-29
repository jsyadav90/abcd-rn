import React from "react";

const AddNewButton = ({ label, onClick,className }) => {
  return (
    <button
      onClick={onClick}
      className = {className}
    >
      + Add New {label}
    </button>
  );
};

export default AddNewButton;