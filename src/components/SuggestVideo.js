import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { abbreviateNumber } from "js-abbreviation-number";
import VedioLength from './VedioLength'
import { Link } from 'react-router-dom';

const SuggestVideo = ({ video }) => {
    return (
        // console.log('suggest',video)
        <>
            <Link to={`/video/${video?.video?.videoId}`} id='sugbox'>
                <div id='divImg'>
                    <img src={video?.video?.thumbnails[0]?.url} alt="hl" />
                </div>

                <div id='sugboxtime'>
                    <VedioLength time={video?.video?.lengthSeconds} />
                </div>

                <div id='sugboxtime1'>
                    <p>{video?.video?.title}</p>
                    <p>{video?.video?.author?.title}
                    <span> {video?.video?.author?.badges[0]?.type ===
                            "VERIFIED_CHANNEL" && (
                            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                        )}</span></p>
                        <p>{abbreviateNumber(
                            video?.video?.stats?.views,
                            2
                        )} views</p>
                </div>

                {/* SuggestVideo */}
            </Link>
            {/* <div id='2'></div> */}
        </>
    )
}

export default SuggestVideo