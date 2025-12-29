'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
    isLoading: true,
    setLoading: () => { },
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
