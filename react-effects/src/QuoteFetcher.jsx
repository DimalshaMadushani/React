import {useState, useEffect } from 'react'
const RANDOM_QUOTE_URL = "https://api.quotable.io/random";

export default function QuoteFetcher(){
    const [quote,setQuote] = useState("")

    useEffect(() => {
        fetchQuote();
    },[])

    async function fetchQuote(){
        const response = await fetch(RANDOM_QUOTE_URL)
        const jsonResponse = await response.json()
        // setQuote(data.content)
        const randomQuote = jsonResponse.content
        setQuote(randomQuote)
    }

    return(
        <div>
            <p>{quote}</p>

            <button onClick={fetchQuote}>Get the quote Suing handler</button>
        </div>
    )
}