import {useState, useEffect } from 'react'
const RANDOM_QUOTE_URL = "https://api.quotable.io/random";

export default function QuoteFetcherLoader(){
    const [quote,setQuote] = useState("")
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchQuote(){
            const response = await fetch(RANDOM_QUOTE_URL)
            const jsonResponse = await response.json()
            // setQuote(data.content)
            const randomQuote = jsonResponse.content
            setQuote(randomQuote)
            setIsLoading(false)
        }
        fetchQuote();
    },[])


    return(
        <div>
            {/* {isLoading && <p >Loading...</p>} */}
            <p className='Loader' style={{opacity:isLoading ? 1: 0}}>Loading</p>
            <h1>{quote}</h1>

            {/* <button >Get the quote Suing handler</button> */}
        </div>
    )
}