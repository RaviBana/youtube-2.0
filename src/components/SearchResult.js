import React ,{ useEffect, useState }from 'react';
import { useParams,Link } from "react-router-dom";
import { fetchDataFromApi } from '../utils/api';
import VedioLength from './VedioLength';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';
import LeftMenu from './LeftMenu';

const SearchResult = () => {
  const {searchQuery} = useParams()
  const [searchResult, setSearchResult] = useState()

useEffect(()=>{
  fetchResult()
},[searchQuery])

const fetchResult=()=>{
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>
    setSearchResult(res.data.contents)
    // console.log('result',res.data.contents)
    )
}

  return (
    <div className='searchpage d-flex'>
      <LeftMenu/>
      <div>

      
      {
        
        searchResult && searchResult.map((Video)=>{
          if(Video.type === 'video'){
          return(

        <Link to={`/video/${Video?.video?.videoId}`} className='searchInBox d-flex jcsa'>
          <div id='search1'>
          <img src={Video?.video?.thumbnails[0]?.url} alt="" />
          <div className="timeBox">
            <VedioLength time={Video?.video?.lengthSeconds}/>
                  </div>
          </div>
          
          <div id='search2'>
          <p>{Video?.video?.title}</p>
          <p> {Video?.video?.descriptionSnippet}</p>

          <div id='search3'>
            <img src={Video?.video?.author?.avatar[0]?.url} alt="" />
            <div id='search4'>
              <p>
              {Video?.video?.author?.title}
             {Video?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className=''/>
                                )}
              </p>
              <p>{`${abbreviateNumber(
                                    Video?.video?.stats?.views,
                                    2
                                )} views`} <span>- {Video?.video?.publishedTimeText}</span></p>
            </div>

          </div>
            </div>
         </Link>
          
          )
          }
        })

        // }
      }
    
    </div>
      </div>
  )
}

export default SearchResult