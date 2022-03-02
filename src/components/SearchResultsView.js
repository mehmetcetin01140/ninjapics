import React from 'react'
import {connect} from "react-redux"
import {selectedCategoryForSearch,searchGifs,searchWallpapers,unSplashSearch} from "../actions"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function SearchResultsView(props) {

  
  return (
    <div>
  {(() => {
  switch (props.selectedCategoryForSearchData) {
    case "Gif": return (
      props.gifsFromSearch.map(images=>(
        <ul>
          <li>
          <img src={images.images.original.url}/>
          </li>
        </ul>
      
      ))
    )
    case "Wallpapers": return (
      props.wallpapersFromSearch.map(images=>(
        <ul>
          <li>
          <LazyLoadImage
          effect='blur'
    
      src={images.webformatURL} // use normal <img> attributes as props
      />
          </li>
        </ul>
      ))
        
    )
    default: return (
      <div>
       Somethings vent wrong.
      </div>
    )
  }
})()}
{(() => {
if(props.selectedCategoryForSearchData==="Wallpapers"){
return(
  
  props.unSplashFromSearch.map(images=>(
    <ul>
      <li>
     <LazyLoadImage
      src={images.urls.regular} 
      />
      </li>
    </ul>
  ))
)
}
})()}
    </div>
  )
}


const mapStateToProps = state =>{
    return{
        gifsFromSearch:state.gifsFromSearch,
        wallpapersFromSearch:state.wallpapersFromSearch,
        unSplashFromSearch:state.unSplashFromSearch,
        selectedCategoryForSearchData:state.selectedCategoryForSearchData
    }
}

export default connect(mapStateToProps,{searchGifs,searchWallpapers,selectedCategoryForSearch,unSplashSearch})(SearchResultsView)