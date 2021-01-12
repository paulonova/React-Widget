import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Dutch',
    value: 'nl'
  }
]

const apiKey="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Translate = ()=>{

const [language, setLanguage] = useState(options[0]);
const [text, setText] = useState('');

  return(
    <div className="ui form">
      <br/>
      <div className="field">
      <label>Enter text</label>
        <input value={text} onChange={(e)=>{
          setText(e.target.value);
        }}/>
      </div>
      
      <Dropdown 
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}/>
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language}/>
    </div>
  );
};


export default Translate;