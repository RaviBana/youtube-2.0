import React,{useContext} from 'react';
import LeftMenu from './LeftMenu';
import { Context } from '../context/ContextAPI';
import VedioLength from './VedioLength';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';



const MainContainer = () => {

    const {searchResult} = useContext(Context)

  return (
    <div className='maincontainer d-flex'>
      
            <LeftMenu/>

   
       <div className='mainVediobox d-flex aic jcsa'>
        {searchResult && searchResult.map((video)=>{
          console.log('time',video)
          if(video.type === 'video'){
return(
            <Link to ={`/video/${video?.video?.videoId}`} className="singlevedio">
                <div id="img">
                    <img src={video?.video?.thumbnails[0]?.url} alt="" />
                </div>
                  <div className="timebox">

                    <VedioLength time={video?.video?.lengthSeconds}/>
                  </div>
                    <div className="videobottom d-flex aic">
                      <img src={video?.video?.author?.avatar[0]?.url} alt="" />

                      <div className='description'>
                       <p>{video?.video?.title.slice(0,50)}..</p>
                      
                       <p>
                       {video?.video?.author?.title } 
                       <span>
                       {video.video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                  <BsFillCheckCircleFill/>
                                  )}
                                  </span> 
                       </p>
                       <p>{ video?.video?.stats?.views} views - {video?.video?.publishedTimeText}</p>
                    
                      </div>
                    </div>
               
            </Link>
)
            }
        })}
       </div>
    </div>
  )
}

export default MainContainer