import React from 'react';


const Link = ({href, className, children})=>{

  const onClick = (event)=>{
    event.preventDefault();
    window.history.pushState({}, '', )
  }
  return(
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};


export default Link;