import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{

  const baseUrl = "https://en.wikipedia.org/w/api.php";
  const[term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  console.log(results);
  useEffect(() => {

    const search = async()=>{
      const {data} = await axios.get(baseUrl, {
        params:{
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term
        }
      });
      setResults(data.query.search);
    }

    if(term){
      search();
    } 
  }, [term]);

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
  })

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