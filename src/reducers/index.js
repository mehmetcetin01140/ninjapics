const INITIAL_STATE = {
    isLoading:false,
    apiDatas:[],
    gifsFromSearch:[],
    wallpapersFromSearch:[],
    unSplashFromSearch:[],
    selectedCategoryForSearchData:"Gif"
}

export const reducer = (state=INITIAL_STATE,action) => {

    switch(action.type){
        case 'GET_DATAS_START' : return{...state,isLoading:true}
        case 'API_RESPONSE_SUCCESS' : return{...state,apiDatas:action.payload,isLoading:false}
        case 'GET_GIFS' : return{...state,gifsFromSearch:action.payload}
        case 'GET_WALLPAPERS' : return{...state,wallpapersFromSearch:action.payload}
        case 'GET_UNSPLASH_DATA': return{...state,unSplashFromSearch:action.payload}
        case 'SELECTED_ITEM' : return{...state,selectedCategoryForSearchData:action.payload}
        default: return state
    }
}