import React, {useContext} from 'react';
import { categories } from '../utils/constants';
import { Context } from '../context/ContextAPI';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const LeftMenu = () => {

    const {selectCategory, setSelectCategory} = useContext(Context)
    console.log('hdh',selectCategory)

const clickHandler = (Type, Name)=>{
        switch(Type){
            case 'category' : setSelectCategory(Name)
            case 'New' : setSelectCategory(Name)
            default : return false
        }
}
const openmenu = () =>{
    let menu = document.querySelector('#searchmenu')
    let box = document.querySelector('.leftmenu')
    let openbtn = document.querySelector('#open')
    let closebtn = document.querySelector('#close')

    console.log(menu)
    // menu.classList.add('displayNone')
    // box.classList.add('leftmenutoggle')

    menu.classList.remove('displayNone')
    box.classList.remove('leftmenutoggle')
    openbtn.style.visibility = 'hidden'
    // visibility: hidden;
    closebtn.style.visibility = 'visible'
    // visibility:visible;
    // box.style.width = '10px'
}
const closemenu=()=>{
    let menu = document.querySelector('#searchmenu')
    let box = document.querySelector('.leftmenu')
    let closebtn = document.querySelector('#close')
    let openbtn = document.querySelector('#open')

    console.log(menu)
    // menu.classList.add('displayNone')
    // box.classList.add('leftmenutoggle')

    menu.classList.add('displayNone')
    box.classList.add('leftmenutoggle')
    openbtn.style.visibility = 'visible'
    closebtn.style.visibility = 'hidden'
}

  return (
    <div className='leftmenu leftmenutoggle'>
        <div id="menubtn" className='d-flex jcsb' >
                <i id='open' onClick={openmenu}><GiHamburgerMenu/></i>
                <i id='close' onClick={closemenu}><AiOutlineClose/></i>
        </div>
        <div id='searchmenu' className='d-flex jcsb col'>
           {categories && categories.map((item)=>{
return(

    <div className='singlemenu'>
        <div onClick={()=>clickHandler(item?.type, item?.name)}>
        <i>{item?.icon}</i>

        <span>{(item?.name) === 'New'?'Home':item.name}</span>
        </div>
   
  {item?.divider?(<hr className='divide'/>):('')}
        </div>
        
)
            
        })} 
        </div>
        
     
        </div>
  )
}

export default LeftMenu