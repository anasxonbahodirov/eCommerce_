import React, { useState } from 'react'

export const usePost = () => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const mutate = async ({ bodyData, api, method , onSuccess, onError }) => {

        try {
            setLoading(true);
            const res = await fetch(api, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(bodyData)

            });
            const data = await res.json();
            setLoading(false);
            onSuccess(data);
            return data;


        } catch (error) {
            setError(error);
            setLoading(false);
            onError(error);
            return error;

        }
    }

    return { mutate , loading, error}
};

