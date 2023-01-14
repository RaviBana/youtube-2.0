import React, {useContext, useState} from 'react';
import { AiFillYoutube, AiOutlineSearch ,AiFillBell} from 'react-icons/ai';
import { BiVideoPlus } from 'react-icons/bi';
import { Context } from '../context/ContextAPI';
import { Link, useLocation,useNavigate } from "react-router-dom";
 
const Header = () => {
    const {selectCategory, setSelectCategory} = useContext(Context)
    const [searchQuery, setSearchQuery] = useState()
    const navigate = useNavigate()

    const searchHandler = (event) =>{
        if(((event?.key === 'Enter') || (event === 'searchbtn') )&& searchQuery.length>0 ){
            console.log('navigate')
            navigate(`/searchResult/${searchQuery}`)

        }
    }

    return (
        <div className='header'>
            <Link to={'/'} id='logo' className='d-flex aic jcsb link'>
                <i><AiFillYoutube /></i>
                <span id='you'>YouTube</span>
            </Link>

            <div id="search">
                <input type="text" value={searchQuery} onKeyUp={searchHandler} onChange ={(e)=>setSearchQuery(e.target.value)} placeholder='Search...'/>
                <button onClick={()=>searchHandler('searchbtn')}><AiOutlineSearch /></button>
            </div>

            <div id='left-header' className='d-flex aic jcsb'>
                <div className='d-flex aic jcsb'>
                <i><BiVideoPlus/></i>
                <i><AiFillBell/></i>
                </div>
                <img src="icon-img.JPG" alt="" />
            </div>

        </div>
    )
}

export default Header