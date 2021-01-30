import React, {useState} from 'react';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Accordion from './components/Accordion';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';
import Menu from './components/Menu';


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
    label: 'The color Red',
    value: 'tomato'
  },

  {
    label: 'The color Green',
    value: 'green'
  },

  {
    label: 'The color Blue',
    value: 'blue'
  }
];

const App = () =>{

const [selected, setSelected] = useState(options[0]);

  return(
    <div>
    <Header/>
    <Menu/>
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown
        label='Select a Color'
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  );
};


export default App;

/**
 * PS: When you pass a props from an inside component
 * the props be available to the parents also.
 * EX:
 * <Route path="/">
      <Accordion items={items}/>  //props available to Route
    </Route>
 */