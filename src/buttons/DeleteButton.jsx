import React from 'react'

const DeleteButton = ({label, onClick,className}) => {
  return (
    <div>
      <button
      onClick={onClick}
      className = {className}
    >
      Delete {label}
    </button>
    </div>
  )
}

export default DeleteButton
