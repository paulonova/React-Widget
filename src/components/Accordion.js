import React, {useState} from 'react';


const Accordion = ({items})=>{

  //Array destruction. Initialize the state with one variable and a call function
  const [activeIndex, setActiveIndex] = useState(null);

  //Helper method
  const onTitleClicked = (index)=>{
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {

    const active = index === activeIndex ? 'active' : '';

    return(
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  })

  return(
    <div className="ui styled accordion">
      {renderedItems}      
    </div>
  );
};


export default Accordion;