import React from 'react'

const Button = ({ label, onClick,className }) => {
  return (
    <div>
      <button
      onClick={onClick}
      className = {className}
    >
      {label}
    </button>
    </div>
  )
}

export default Button
