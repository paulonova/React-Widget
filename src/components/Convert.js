import React, {useState, useEffect} from 'react';
import axios from 'axios';

const apiKey="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const Convert = ({language, text})=>{

  const [translated, setTranslated] = useState('');
  const [debaoucedText, setDebouncedText] = useState(text);

  useEffect(()=>{
    const timmerId = setTimeout(()=>{
      setDebouncedText(text);
    }, 700);

    return ()=>{
      clearTimeout(timmerId);
    }
  }, [text])

  useEffect(()=>{

    const doTranslation = async ()=>{
     const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params:{
          q: debaoucedText,
          target: language.value,
          key: apiKey
        }
      });
      setTranslated(res.data.data.translations[0].translatedText);
    }   

    doTranslation();
    
  }, [language, debaoucedText]);

  return(
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;