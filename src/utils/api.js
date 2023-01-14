import axios from 'axios'

const base_url = 'https://youtube138.p.rapidapi.com';

// const options = {
//     // method: 'GET',
//     // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//     params: {q: 'desp', hl: 'en', gl: 'US'},
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
//       'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//     }
//   };

// export const fetchDataFromApi = async(url)=>{
//     const data = await axios.get(`${base_url}/${url}`, options).catch((er)=> console.log(er))

//     return data
// }



const options = {
  method: 'GET',
  // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {q: 'desp', hl: 'in', gl: 'IN'},
  headers: {
    'X-RapidAPI-Key': 'e92c98d176msh0833fa0626dab8ep17a0e0jsn33a80bfcd06a',
    // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchDataFromApi = async(url)=>{
    const data = await axios.get(`${base_url}/${url}`, options)
    return data
}

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });