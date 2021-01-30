import React from 'react';


const Header = ()=>{

  const heading={
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "45px",
    textAlign: 'center',
    fontFamily: "Arial",
    marginBottom: '30px'
  }

  const whiteColor={
    color: 'white'
  }

  return(
    <div style={heading}>
      <h1 style={whiteColor} className="ui header"> Widget </h1>
    </div>
  )
}

export default Header;