import React, { useEffect, useState } from "react";
import Navbar from "../Navbars/navbar/Navbar";
import bus from "../../assets/images/bus.png";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { Primary } from "../buttons/Buttons";
import search from '../../assets/svgs/search.svg';
import { OpenStreetMapProvider } from "leaflet-geosearch";
import fetchAllRoute from '../../functions/fetchAllRoute';
import { Icon } from "@iconify/react";
import Notify from "../../functions/Notify";
import { connect } from "react-redux";
import { selectRoute } from '../../redux/actions/selectedRouteAction';
import getMyLocation from "../../functions/getMyLocation";
import { faLegal } from "@fortawesome/free-solid-svg-icons";
;

const provider = new OpenStreetMapProvider();
const Header = ({ selectRoute }) => {
  const history = useHistory();
  const [ destination  , setDestination ] = useState("");
  const [ origin , setOrigin ] = useState({});
  const [ userDestination , setUserDestination ] = useState({});
  const [ routes , setRoutes ] = useState([])
  const [ routeNotFound , setRouteNotFound ] = useState(null);
  const [ suggestion , setSugestion ] = useState([]);
  const [ isSearching , setIsSearching ] = useState(false);
  
  useEffect( async () =>{
    const allRoutes = await fetchAllRoute();
    setRoutes([...allRoutes]);
  },[]);

  useEffect(()=>{
    getMyLocation(setOrigin);
  })

  const proccessing = (e) => {
    setRouteNotFound(true)
    setIsSearching(true)
    if(destination != null){
      provider
      .search({ query: `rwanda ${destination}` })
      .then(function (result) {       
        if (result.length != 0) {
          setRouteNotFound(false)
          let newDestination = {...userDestination};
          newDestination.lat = result[0].bounds[0][0];
          newDestination.lng =  result[0].bounds[0][1];
          setUserDestination(newDestination)
        } else {
          setIsSearching(false)
          setRouteNotFound(true)
          let newDestination = {...userDestination};
          newDestination.lat = 0;
          newDestination.lng = 0;
          setUserDestination(newDestination);
        }
      })
      .catch((error) => {
        setRouteNotFound(true)
      });
    }
  }
  return (
    <div className="phBackground -z-30 min-h-full font-body">
      <div className="h-screen flex-col">
        <Navbar />
        <div className="absolute -top-0 -left-0 h-full w-full flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat">
          <div className="flex flex-col w-auto lg:flex lg:flex-row md:flex md:flex-row flex-wrap items-center justify-between">
            <div className="flex flex-col w-64 mx-5 md:mt-20 md:w-80">
              <div className="flex flex-row">
                <span className="p-0.5 md:p-1.5">
                  <svg
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866Z"
                      fill="#0384C6"
                    />
                  </svg>
                </span>
                <span className="p-0.5 md:p-1.5">
                  <svg
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866Z"
                      fill="#0384C6"
                    />
                  </svg>
                </span>
                <span className="p-0.5 md:p-1.5">
                  <svg
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866Z"
                      fill="#0384C6"
                    />
                  </svg>
                </span>
                <span className="p-0.5 md:p-1.5">
                  <svg
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866ZM23.1341 18.5342L24.5833 26.2686L17.0001 22.6202L9.4169 26.2723L10.8661 18.5379L4.7321 13.058L13.2105 11.9289L17.0001 4.89329L20.7897 11.9289L29.2681 13.058L23.1341 18.5342Z"
                      fill="#0384C6"
                    />
                  </svg>
                </span>
                <span className="p-0.5 md:p-1.5">
                  <svg
                    width="34"
                    height="31"
                    viewBox="0 0 34 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.9011 10.866L22.7085 9.50891L18.1522 1.04632C18.0278 0.814622 17.823 0.627055 17.5701 0.513043C16.9359 0.226176 16.1651 0.465232 15.8479 1.04632L11.2916 9.50891L1.09908 10.866C0.81807 10.9028 0.561149 11.0242 0.364444 11.2081C0.126638 11.432 -0.00440342 11.7332 0.000112989 12.0456C0.0046294 12.358 0.144334 12.656 0.38853 12.8741L7.76297 19.461L6.02072 28.7621C5.97986 28.9785 6.006 29.201 6.09616 29.4045C6.18632 29.6079 6.3369 29.7842 6.53082 29.9132C6.72475 30.0422 6.95426 30.1189 7.19332 30.1345C7.43239 30.1501 7.67145 30.1041 7.8834 30.0016L17.0001 25.6103L26.1168 30.0016C26.3657 30.1229 26.6547 30.1634 26.9317 30.1192C27.6302 30.0089 28.0999 29.4021 27.9794 28.7621L26.2372 19.461L33.6116 12.8741C33.8124 12.6939 33.9448 12.4585 33.985 12.2011C34.0934 11.5574 33.6036 10.9616 32.9011 10.866V10.866ZM23.1341 18.5342L24.5833 26.2686L17.0001 22.6202L9.4169 26.2723L10.8661 18.5379L4.7321 13.058L13.2105 11.9289L17.0001 4.89329L20.7897 11.9289L29.2681 13.058L23.1341 18.5342Z"
                      fill="#0384C6"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col py-2.5">
                <div>
                  <h1 className="w-full text-white font-bold text-2xl md:text-4xl xl:text-5xl">
                    Fast movement and easy.
                  </h1>
                </div>
                <div className="py-6">
                  <h3 className="w-full text-secondary-40 font-regular text-xl sm:text-2xl md:text-2xl xl:text-3xl">
                    Get notified anytime, anywhere the bus is.
                  </h3>
                </div>
                <div className="py-6 flex items-center flex-wrap relative ">
                  <div className="w-full search-input h-12 flex items-center"> 
                      <div className="grouped-input bg-secondary-40 flex items-center shadow h-full w-full rounded-md">
                          <input autoComplete="off" type="text" name="search" className={`h-full bg-transparent border-0 outline-none px-5 font-sans font-normal ${routeNotFound == false ? "text-success-600" : routeNotFound == true ? " text-danger-500 " : "text-secondary-50" } w-4/5`} placeholder="Where to..." value={destination} onChange={(e) => {
                            setDestination(e.target.value);
                            if(destination.trim().length > 3){
                              proccessing(destination);
                              const regex = new RegExp(`^${destination}`, 'i');
                              setSugestion(routes.sort().filter(value => regex.test(value.name)));
                            }                            
                          }}/>                          
                        <div className="w-1/5 flex justify-center">
                          {routeNotFound == false || destination.trim().length == 0 || isSearching == false ? (<img src={search} alt="phantom"  />): routeNotFound == true ?  (<i className="fa fa-spinner fa-spin fa-1x fa-fw text-mainColor "></i> )  : (<img src={search} alt="phantom"  />)   }
                                         
                        </div>                    
                      </div>                
                  </div>   
                  <div className={`w-full bg-secondary-40 absolute top-16 rounded-md  ${ destination.trim().length > 4 ?  "" : "hidden" }`}>
                    <div className="flex flex-col ">
                      <div className=" item1 flex items-center my-2 cursor-pointer hover:bg-gray-300 w-12/12 p-2" onClick={() => {                        
                 
                          getMyLocation(setOrigin);
                          if(Object.keys(origin).length === 0 ){
                            Notify("We were not able to access your location" ,"info");
                            setTimeout(() =>{
                              localStorage.setItem("origin",JSON.stringify({lat:0,lng:0}));
                              selectRoute({from:[origin.lat,origin.lng],to:[userDestination.lat,userDestination.lng],routeId:0,routecode:0});                    
                            },2200);
                            return;
                          }
                            

                            if(Object.keys(userDestination).length === 0 ){
                              Notify(`Please, were not able to find your location try city name ${destination}` ,"info");
                              return;
                            }    

                            if(routeNotFound == true){
                              Notify("Your destination has not been found","info");
                            }
                            else{
                              localStorage.setItem("origin",JSON.stringify(origin));
                              localStorage.setItem("destination",JSON.stringify(userDestination));   
                              selectRoute({from:[origin.lat,origin.lng],to:[userDestination.lat,userDestination.lng],routeId:0,routecode:0});
                              history.push("tracking");
                            }                           
                          }}>
                        <div className={`h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 rounded-full bg-mainColor  flex items-center justify-center  cursor-pointer`}  >
                          <Icon icon="akar-icons:location" color={` white `} width="19" height="19" />    
                        </div>
                        <div className=" text-active ml-3 hover:text-primary-300 "> Current location - { destination } </div>
                      </div>
                      {
                        suggestion.map(value => {
                          return(
                              <div key={value.id} className=" item1 flex items-center my-2 cursor-pointer hover:bg-gray-300 max-w-full p-2" onClick={() => {
                                let from = value.startLocation.split(",");
                                let to =  value.endLocation.split(",");
                                localStorage.setItem("origin",JSON.stringify({lat:from[0],lng:from[1]}));
                                localStorage.setItem("destination",JSON.stringify({ lat:to[0],lng:to[1]})); 
                                selectRoute({from,to,routeId:value.id,routecode:value.code});
                                history.push("tracking");
                              }}>
                              <div className={`h-9 w-9 rounded-full bg-mainColor  flex items-center justify-center  cursor-pointer`}  onClick={() => {}}>
                                  <Icon icon="akar-icons:location" color={` white `} width="19" height="19" />    
                              </div>
                              <div className=" text-active ml-3 hover:text-primary-300  "> { value.name } </div>
                            </div>
                          )
                        })
                      }                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-80 h-auto mx-20">
              <img src={bus} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const mapToState = (state) => {
  return{
      user:state.user,
      selectedRoute:state.selectedRoute
  }
}
export default connect( mapToState ,{ selectRoute })(Header);
