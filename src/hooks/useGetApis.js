import React, { useEffect, useState } from 'react'

export const useGetApis = (urls) => {
  const [data , setData] = useState([])
  const [error , setError] = useState()
  const [loading , setLoading] = useState(false)
  
  useEffect(()=>{
    async function fetchMultipleAPIs(urls) {
       try {
        const responses = await Promise.all(urls?.map(urls => fetch(urls)));
        const data = await Promise.all(responses.map(res => res.json()));
        setData(data)
        setLoading(false)
       } catch (err) {
        setError(err)
        setLoading(false)
       }
    }
    urls && fetchMultipleAPIs(urls)
  },[urls])
  
  return { data, error, loading }
}
