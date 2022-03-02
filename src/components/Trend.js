
import { useEffect } from "react";
import {connect} from "react-redux"
import {apiRequestTrends} from "../actions"

function Trend(props) {
  useEffect(()=>{
    props.apiRequestTrends()
  }, [])


  return (
    <div className="App">
{props.apiDatas.map((trends,index)=>(
   <ul key={index}>
       <li>
      <img src={trends.images.original.url}/>
       </li>
   </ul>
))}
    </div>
  );
}
const mapStateToProps = state => {
return{
  apiDatas:state.apiDatas,
  isLoading:state.isLoading
}
}
export default connect(mapStateToProps,{apiRequestTrends})(Trend);
