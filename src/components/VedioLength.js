import React from 'react';
import moment from 'moment';

const VedioLength = ({time}) => {
console.log(time)
  //  const vedioLength = moment()?.startOf()?.seconds(time)?.format('h:mm:ss')
  // const videoLengthInSeconds = moment()
  // ?.startOf("day")
  // ?.seconds(time)
  // ?.format("H:mm:ss");

 const formatChange =()=>{
let min =  Math.floor((time?time:0)/60)
let sec =  Math.floor((time?time:0)%60)
let hr = Math.floor((time?time:0)/3600)
let minute = min <10?`0${min}`:`${min}`;
let second = sec <10?`0${sec}`:`${sec}`
let hour =  hr <10?`0${hr}`:`${hr}`

return `${hour}:${minute}:${second}`
 }
  return (
    <>
      {formatChange()}
      </>
  )
}

export default VedioLength