import React from 'react';

function Header({title}) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

// const styleHandler ={
//   color:"red",
//   textAlign: "center",
//   backgroundColor : '#444',
//   padding: 10

// }
Header.defaultProps = {
  title: "Task Tracker"
}

export default Header

