import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [ data , setdata ] = useState(null);
    const [ isLoading , setIsLoading ] = useState(true);
    const [ error , setError] = useState(null);
   
    useEffect(() =>{
        const abortController = new AbortController();
        
        fetch(url , { signal : abortController.signal })
          .then(res => {
            if(!res.ok){
              throw Error('Could not fetch the data');
            }
            return res.json();
          })
          .then(data => {
            setdata(data);
            setIsLoading(false);
            setError(null);
          })
          .catch(error => {
            if(!(error.name === 'AbortError')){
                setIsLoading(false);
                setError(error.message);
            }         
          })
          return ( ) =>  abortController.abort();
     },[url])
     return { data , isLoading , error };
}

export default useFetch;