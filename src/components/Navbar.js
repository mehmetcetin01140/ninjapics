import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchInput from './SearchInput'
import {connect} from "react-redux"
import {searchGifs,searchWallpapers,unSplashSearch} from "../actions"
import {Container,Row,Col} from "react-bootstrap"
import {Link,Navlink,withRouter} from "react-router-dom"
import "../style/style.scss"
 function Navbar(props) {
    const [gifs,setGifs] = useState([])
    const [wallpapers,setWallpapers] = useState([])
    const [unSplashData,setUnsplashData] = useState([])

    const apiRequestSearchGif = (entry) => {
    
    if(props.selectedCategoryForSearchData==="Gif"){
     axios   
     .get(`https://api.giphy.com/v1/gifs/search?api_key=c3LyeXTWrfBoq10Qr34tVFI1UkbOukx5&q=${entry}&per_page=100`)
     .then(response=>setGifs(response.data.data))
      
    }
    if(props.selectedCategoryForSearchData==="Wallpapers"){
     axios   
     .get(`https://pixabay.com/api/?key=25459789-16936a0114649c4b999ee26f0&q=${entry}&image_type=photo&per_page=200`)
     .then(response=>setWallpapers(response.data.hits))
     axios   
     .get(`https://api.unsplash.com/search/photos/?client_id=H2Crqny9TAW6McDMqxyE0gI79TaHNt6YkaaFEqBZgY4&query=${entry}&per_page=200`)
     .then(response=>setUnsplashData(response.data.results)+console.log(response.data.results))
  
    }
    
     
    }
  
    useEffect(()=>{
     
        props.searchGifs(gifs)
        props.searchWallpapers(wallpapers)
       props.unSplashSearch(unSplashData)
    })

  return (
    <div>
      <nav className='ui raised padded segment'>
       <Container fluid>
        <Row>
          <Col lg={2}>
        <div className='logoArea'></div>
          </Col>
          <Col lg={3}>
			<div className='ui header appButtons'>			
				<button className='ui button small inverted'><span className='sa'>Wallpapers</span></button>
        <button className='ui button small inverted'><span className='sa'>Gifs</span></button>
        <button className='ui button small inverted'><span className='sa'>Categories</span></button>
       
			</div>
      </Col>
      <Col lg={7}>
        <div className='inputArea'>

        <SearchInput apiRequestSearchGif={apiRequestSearchGif}/>
        </div>
        </Col>
    </Row>
    </Container>
		</nav>
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
export default connect(mapStateToProps,{searchGifs,searchWallpapers,unSplashSearch})(withRouter(Navbar))
