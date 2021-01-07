import React, {useState} from 'react';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items= [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    lable: 'The color Red',
    value: 'tomato'
  },

  {
    lable: 'The color Green',
    value: 'green'
  },

  {
    lable: 'The color Blue',
    value: 'blue'
  }
];

const App = () =>{

  const [selected, setSelected] = useState(options[0]);

  return(
    <div>
      <Dropdown 
      selected={selected} 
      onSelectedChange={setSelected}
      options={options}/>
    </div>
  );
};


export default App;

