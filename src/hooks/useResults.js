import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something Went Wrong');
        }
    }
    // Call Search Api when componenet is rendered 
    // searchApi('pasta');


    return [searchApi, results, errorMessage]
};