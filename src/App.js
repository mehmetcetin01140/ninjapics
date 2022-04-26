import SearchInput from "./components/SearchInput";
import SearchResultsView from "./components/SearchResultsView";
import Trend from "./components/Trend"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories";
import CategoryView from "./components/CategoryView";
import Best from "./components/Best"
import {BrowserRouter,Route} from "react-router-dom"
import {useEffect,useState} from "react"
import anime from "animejs";
function App() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
    
  }
  const responsiveWatcher=()=>{
    if(screenSize.dynamicWidth<=1070){
      return <SearchInput/>
    }
    else{
      return null
    }
  }
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    responsiveWatcher()
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
    
  })
   const wellcomeTimeout = () =>{
     setTimeout(() => {
       document.querySelector("#loadingScreen").style.display = "none";
       document.body.style.overflow="visible"
     }, 3000);
   }
   useEffect(()=>{
     if(window.location.pathname !=="/"){
      document.querySelector("#loadingScreen").style.display = "none";
     }
   wellcomeTimeout()
   })
 const wellcomeAnimation = () =>{
   let myTarget = document.querySelector("#wellcomeImage")
   anime({
    targets: myTarget,
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    loop:true,
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });
 }

 useEffect(()=>{
wellcomeAnimation()
 },[])
  return (
    <BrowserRouter>
    <div className="App">
      <div className="navigation">
      <div className="loadingScreen" id="loadingScreen">
     <img src={require('./images/logooo.png')} alt={"NinjaPics"}id="wellcomeImage"/>
    </div>
     <Navbar />
    <div className="mobileSearchInput">
    {responsiveWatcher()}
    </div>
      </div>
     <Route path="/" exact component={Trend}/>
     <Route path="/categories" exact component={Categories}/>
     <Route path="/best" component={Best}/>
     <Route path="/search" component={SearchResultsView}/>
     <Route path="/images/:category" component={CategoryView}/>
    </div>

    </BrowserRouter>
  );
}

export default App;
