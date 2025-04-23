//props 덩어리들 다 여기서 가져다 쓰는 용도



import React, { createContext, useState } from 'react';

export const LocationContext = createContext({});
export function LocationProvider({ children }) {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [step, setStep] = useState(1);
    const [tab, setTab] = useState('select');
    const [activeTab, setActiveTab] = useState('명소');
    const [map, setMap] = useState(null);

    return (
        <LocationContext.Provider value={{

            selectedDates, setSelectedDates,
            selectedRegion, setSelectedRegion,
            selectedCity, setSelectedCity,
            searchKeyword, setSearchKeyword,
            step, setStep,
            tab, setTab,
            activeTab, setActiveTab,
            map,setMap
        }}>
            {children}
        </LocationContext.Provider>
    );
}