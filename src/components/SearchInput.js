import React, { useEffect, useState } from 'react'
import {connect} from "react-redux"
import {selectedCategoryForSearch,searchGifs} from "../actions"
import {Link,Navlink,withRouter} from "react-router-dom"
  function SearchInput(props) {
    const [entry,setEntry] = useState("")
    const [backSpaceWatcher,setBackSpaceWatcher] = useState("")
    const onFormSubmit = () =>{
      
      props.apiRequestSearchGif(entry)

    }
 const selectForSearch = () =>{
  var e = document.getElementById("selection");
  var value = e.options[e.selectedIndex].value;
  props.selectedCategoryForSearch(value)

}
const eventListener = (e) =>{
  const {key} = e
  if(key==="Backspace"){
  setBackSpaceWatcher("backspace")
  }
}
useEffect(()=>{
  if(props.selectedCategoryForSearchData === "Wallpapers"){
 onFormSubmit()
  }
  if(props.selectedCategoryForSearchData === "Wallpapers" && !entry){
  props.history.push("/")
  }
  if(props.selectedCategoryForSearchData === "Wallpapers" && entry.length===1){
    props.history.push("/da")
    }
    if(props.selectedCategoryForSearchData === "Gif" && !entry){
      props.history.push("/")
    } 
  if(props.selectedCategoryForSearchData === "Gif" && entry.length===1){
    props.history.push("/da")
  } 

 


},[props.gifsFromSearch,props.selectedCategoryForSearchData,entry,props.history,backSpaceWatcher])

  return (
    <div>
      <form onSubmit={onFormSubmit}>
  <div className="ui action input">
  <input type="text" id='searchInput' onChange={(event)=>setEntry(event.target.value)} value={entry} onKeyDown={eventListener} />
  <select className="ui compact selection dropdown" id='selection' onChange={selectForSearch} >
    <option value="Gif">Gif</option>
    <option value="Wallpapers">Wallpapers</option>
  </select>
  <div className="ui button" onClick={onFormSubmit} >Search</div>

</div>
        
        </form>
        </div>
  )
}
const mapStateToProps = state =>{
  return{

    selectedCategoryForSearchData:state.selectedCategoryForSearchData
  }
}
export default connect(mapStateToProps,{searchGifs,selectedCategoryForSearch})(withRouter(SearchInput))