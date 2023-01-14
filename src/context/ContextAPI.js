import React, { useEffect, useState }  from 'react';
import { createContext } from 'react';
import { fetchDataFromApi } from '../utils/api';
export const Context = createContext();

const ContextAPI = (props) => {
   const [searchResult, setSearchResult] = useState(false)
   const  [loading, setLoading] = useState(false)
   const  [selectCategory, setSelectCategory] = useState('New')
   const  [mobileMenu, setMobileMenu] = useState(false)

    useEffect(()=>{
        fetchSelectedDataCategory(selectCategory)
        console.log(searchResult)
    },[selectCategory])

    const fetchSelectedDataCategory=(query)=>{
        setLoading(true)

        fetchDataFromApi(`search/?q=${query}`).then((res)=> 
        setSearchResult(res.data.contents)
        // console.log(setSearchResult(res.data.contents))
        )

        setLoading(false)
    }

    return (
        <Context.Provider value={{
            searchResult, setSearchResult,
            selectCategory, setSelectCategory,
            mobileMenu,setMobileMenu,
            loading,setLoading,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextAPI