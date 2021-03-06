import React, { useState } from 'react';
import { Transition } from '@tailwindui/react';
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectRoute } from '../../redux/actions/selectedRouteAction';

const RouteCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user , placeName , selectRoute , route : allRoute } = props;
    const [routes, setRoutes] = useState([
        {           
            startLocation: 'Downtown',
            endLocation: 'Nyamirambo',
            city: "Kigali",
            from:[-1.944103,30.056790],
            to:[-1.9801872,30.0413067],
            routecode:401
        },
        {           
            startLocation: 'Nyabugogo',
            endLocation: 'Nyamirambo',
            city: "Kigali",
            from:[-1.944103,30.056790],
            to:[-1.9801872,30.0413067],
            routecode:406
        },
        {           
            startLocation: 'Downtown',
            endLocation: 'Remera',
            city: "kigali",
            from:[-1.944103,30.056790],
            to:[-1.9801872,30.0413067],
            routecode:302
        },
        {           
            startLocation: 'Downtown',
            endLocation: 'Nyanze',
            city: "Kigali",
            from:[-1.944103,30.056790],
            to:[-1.9801872,30.0413067],
            routecode:310
        },
        {           
            startLocation: 'Stadium',
            endLocation: 'Mahoko',
            city: "Gisenyi",
            from:[-1.944103,30.056790],
            to:[-1.9801872,30.0413067],
            routecode:309
        },
        {           
            startLocation: 'Downtown',
            endLocation: 'Remera',
            city: "Kigali",
            from:[-1.944103,30.056790],
            to:[-1.9801872,30.0413067],
            routecode:406
        }
    ])
  
    const history  = useHistory();
    const track = ( from = [] , to = [] , routeId = 0 , routecode ) =>{
        selectRoute({from,to,routeId,routecode})
        history.push('simulation');
    }
    const showRoute = () => {
        setIsOpen(!isOpen);
    }
    return ( 
        <>            
            <div>
                <div className="text-white font-sans font-semibold p-2" onClick={showRoute}>
                    <div className="w-full bg-mainColor rounded-md">
                        <div className="route-info flex flex-wrap">
                            <div className="icon py-4 w-4/12">
                                <div className="w-full flex items-center justify-center">
                                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                                        <Icon icon="akar-icons:location" color="#1ca0e3" width="15" height="20" />
                                    </div>                        
                                </div>
                            </div>
                            <div className="information py-4 w-8/12">
                                <div className="heading">
                                    <div className='flex items-center' >
                                        <div className='p-1 bg-gray-300 h-1 w-1 rounded-full mr-1' ></div> 
                                        <span> { placeName } </span> 
                                    </div>
                                </div>
                                <div className="body mt-2">
                                    <div className="flex items-center">
                                        <span className="iconify text-gray-300 mr-1" data-icon="fa-solid:route"></span>
                                        <span className='mr-2' >{ routes.filter(currentRoute => currentRoute.city.toString().toLowerCase() == placeName.toString().toLowerCase()  ).length }</span>
                                        <span>Routes</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="expand h-9 bg-noneActive rounded-b-md flex flex-wrap items-center cursor-pointer">
                            <div className="w-4/12 text-center font-sans" >
                                <span>
                                    View more
                                </span>
                            </div>
                            <div className="w-8/12 relative">
                                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center shadow-md right-3 absolute -top-10">
                                    <Icon icon="ic:twotone-less-than" color="#1ca0e3"  className={`transition-all ${isOpen == true ? '-rotate-90' : 'rotate-90'} `} />
                                </div>                       
                            </div>
                        </div>
                    </div>               
                </div> 
                <Transition show={isOpen} enter="transition-opacity duration-75" enterFrom="opacity-0"  enterTo="opacity-100" leave="transition-opacity duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                    {
                        allRoute.filter(currentRoute => currentRoute.city.toString().toLowerCase() == placeName.toString().toLowerCase()  ).map( (route , index) => {
                            const fromAndTo = route.name.split("-");
                            console.log(route.name)
                            return(
                                <div key={index+"track-card"}  log={index} className="w-full p-2 ">
                                    <div className="bg-white rounded-md my-3 shadow-md m-2 ">
                                        <div className="route-info flex flex-wrap">
                                            <div className="icon py-4 w-4/12">
                                                <div className="w-full flex items-center justify-center">
                                                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                                                        <Icon icon="eos-icons:route" color="#1ca0e3" width="19" height="20"/>
                                                    </div>                        
                                                </div>
                                            </div>
                                            <div className="information py-4 w-5/12 text-mainColor font-sans font-semibold ">
                                                
                                                    <div className='flex'>
                                                        <span className='text-sm flex items-center justify-center' > <i className='text-mainColor  rounded-full mr-1 fas fa-dot-circle font-light'></i>  { fromAndTo[0].replace("-"," ") } </span> 
                                                    </div>
                                                
                                                    <div className='flex'>                                                        
                                                        <span className='text-sm flex items-center justify-center'> <i className='text-mainColor  rounded-full mr-1 fas fa-dot-circle font-light'></i>  { fromAndTo[1]  } </span> 
                                                    </div>                        
                                            </div>
                                            <div className="w-2/12 flex items-center justify-center">
                                                <div className="w-full">
                                                    <button className="bg-mainColor px-2 py-1 text-white rounded hover:bg-primary-300" onClick={() => track(route.from, route.to , 1,route.routecode)} >
                                                        Track
                                                    </button>
                                                </div>
                                            </div>
                                        </div>                                  
                                    </div>   
                                </div> 
                            )
                        })
                    }                                                        
                </Transition> 
            </div>
        </>
      
     );
}
 
const mapToState = (state) => {
    return{
        user:state.user,
        selectedRoute:state.selectedRoute
    }
}
export default connect( mapToState ,{selectRoute})(RouteCard);