// src/contexts/LocationContext.jsx
import React, { createContext, useState } from 'react';

export const LocationContext = createContext({
    selectedRegion: '',
    setSelectedRegion: () => {},
    selectedCity: '',
    setSelectedCity: () => {},
});

export function LocationProvider({ children }) {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    return (
        <LocationContext.Provider value={{
            selectedRegion,
            setSelectedRegion,
            selectedCity,
            setSelectedCity,
        }}>
            {children}
        </LocationContext.Provider>
    );
}