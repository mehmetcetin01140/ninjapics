import axios from "axios"

export const apiRequestTrends = () => dispatch => {
    const API_KEY = "c3LyeXTWrfBoq10Qr34tVFI1UkbOukx5"
    dispatch({ type:'GET_DATAS_START' })
    axios   
    .get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
    .then(response=>dispatch({type:'API_RESPONSE_SUCCESS',payload:response.data.data})
    )
}
export const searchGifs = (gifs) =>{
    return {type:'GET_GIFS',payload:gifs}
}
export const searchWallpapers = (wallpapers) =>{
    return {type:'GET_WALLPAPERS',payload:wallpapers}
}
export const unSplashSearch = (unsplash) =>{
    return {type:'GET_UNSPLASH_DATA',payload:unsplash}
}
export const selectedCategoryForSearch = (selectedItem) =>{
    return {type:'SELECTED_ITEM',payload:selectedItem}
}
