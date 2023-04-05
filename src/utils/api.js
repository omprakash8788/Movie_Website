
import axios from "axios";

// base url
const BASE_URL="https://api.themoviedb.org/3"

// token save
//const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2JhNDRhOWEzMjE0MmZlZDU5NTkzMzAxMTMwMWMyYyIsInN1YiI6IjY0MmFjMWVjOWNjNjdiMDVlMjAyMzA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ycPztZRDCctS7WgOvGPHIFgmWYFg_0cMaJtL-Bglvc"

const headers={
    Authorization:"bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi=async(url ,params)=>{
 try{
   const {data}=await axios.get(BASE_URL + url,{
    headers,
    params
   })
   return data;
 }
 catch(err){
  console.log(err)
  return err
 }
}