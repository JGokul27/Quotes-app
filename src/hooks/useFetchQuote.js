import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchQuote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random'); 
            setQuote(response.data.content);
            setAuthor(response.data.author);
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return { quote, author, fetchQuote };
};

export default useFetchQuote;
