import React from 'react';


const Dropdown = ({options, selected, onSelectedChange})=>{

  const renderedOptions = options.map((option) =>{

    if(option.value === selected.value){
      return null;  //don´t render 
    }

    return(
      <div 
      key={option.value} 
      className="item"
      onClick={() =>{
        onSelectedChange(option);
      }}>
        {option.lable}
      </div>
    );
  })

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.lable}</div>
          <div className="menu visible transition">
            {renderedOptions}
          </div>
        </div>
      </div>    
    </div>
  );
}

export default Dropdown;