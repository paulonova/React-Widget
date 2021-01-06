import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{

  const baseUrl = "https://en.wikipedia.org/w/api.php";
  const[term, setTerm] = useState('programming');
  const[debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);


  useEffect(() =>{
    const timerId = setTimeout(() =>{
      setDebouncedTerm(term);
    }, 1000);

    return ()=>{
      clearTimeout(timerId);
    }

  }, [term]);

  useEffect(() =>{
    const search = async()=>{
      const {data} = await axios.get(baseUrl, {
        params:{
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: debouncedTerm
        }
      });
      setResults(data.query.search);
    }

    search();

  }, [debouncedTerm]);

 

  /** Not recommended!!! ***
   * <span>dangerouslySetInnerHTML={{ __html: result.snippet}}</span> */

  const resetResult=(result)=>{
     result = result.replaceAll('<span class="searchmatch">', '')
                    .replaceAll('</span>', '');
     return result;    
  }

  const renderResults = results.map((result) => {
    return(
      <div key={result.pageid} className="item">
      <div className="right floated content">
        <a  href={`https://en.wikipedia.org?curid=${result.pageid}`} 
            target='_blanc'
            className="ui button">Go</a>
      </div>
        <div className="content">
          <div className="header">
          <br/>
            <h3>{result.title}</h3>
          </div>
            <span>{resetResult(result.snippet)}</span>
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className="ui form">
        <div className="filed">
          <label>Enter search term</label>
          <input 
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"/>
        </div>
      </div>
      <div className="ui celled list">
       {renderResults}
      </div>
     

    </div>
  );
};


export default Search;




/**
 * EXPLANATION:
 * 
 * const timeoutId = setTimeout(() =>{
      if(term){
        search();
      } 
    }, 500);
    
    return ()=>{
      clearTimeout(timeoutId);
    }

 * When I type my first letter a timeOut is set to delay the API request,
 * then, when I type the next letter the timeOut will be cancel and a new one will be sett
 * and so on until the time goes by. Because the return will be call first all the time in useEffect()
 * function..
 */