import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player/youtube";
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api';
import { AiOutlineLike } from 'react-icons/ai';
import SuggestVideo from './SuggestVideo';
import { abbreviateNumber } from "js-abbreviation-number";


const VedioDetail = () => {
  const [singleVideo, setSingleVideo] = useState()
  const [suggestVideo, setSuggestVideo] = useState()

  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    fetchVideoDetails()
    fetchRelatedVideos()
  }
    , [id])

  const fetchVideoDetails = () => {
    // setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setSingleVideo(res);
      console.log('one', singleVideo)
      // setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    // setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setSuggestVideo(res.data.contents);
      console.log('sug', suggestVideo)
      // setLoading(false);
    });
  };


  return (
    <div className='videodetail'>
      


      <div className="player">
             <div id='play'>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "#000000", }}
                playing={true}
                />
                </div>

              <div className='playerDescription d-flex'>
                        <p>
                          {singleVideo?.data.title}
                        </p>
               <div className=" bottomdesc d-flex ">
                       <img id="Img" src={singleVideo?.data?.author?.avatar[0]?.url} alt="img" width={'20px'} />

                  <div className='INDIV d-flex jcsb' >

                        <div className='indiv'>
                          <p>{singleVideo?.data?.author?.title}</p>
                          <p>{singleVideo?.data?.author?.stats?.subscribersText}</p>
                        </div>

                    <div id='indiv1' className='d-flex jcsa aic'>
                      <button id='likebtn' className=' d-flex'> <i><AiOutlineLike /></i> <span>
                        {abbreviateNumber(singleVideo?.data?.stats?.views)} likes
                      </span>
                      </button>

                      <button id="viewbtn">{abbreviateNumber(singleVideo?.data?.stats?.views)} views</button>
                    </div>
                  </div>
                </div>
              </div>


         
    </div>

      <div className="suggestbox">
        {suggestVideo && suggestVideo.map((Video) =>

          <div className="suggestvideo d-flex jcsa">
            <SuggestVideo video={Video} />
          </div>
        )}
      </div>

    </div>
  )
}

export default VedioDetail