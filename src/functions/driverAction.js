import { API as axios } from "../api/";
import socket from "../config/socket"
import Notify from "./Notify";
const handleDriverActions = async (user,startBus,speedControl,status,setBusStarted=null) => {
    let isAuth = localStorage.getItem("Logged");
    const payload = {
        status: "",
        userId: user.id,
        location:{
            latitude: 10.12000,
            longitude: 1.4444
        },
        passengers: 0
    };

    if(status == "start"){
        payload.status = "start";
        navigator.geolocation.getCurrentPosition(
            function(position) {           
                payload.location.latitude = position.coords.latitude;
                payload.location.longitude = position.coords.longitude                    
            },
            function(error) {
                return Notify("Please you need to provide you location,ether way more functionality will not be available ","error");
            }
        );
        if(isAuth == "TRUE" && user.id != 0){
            const response = await axios.post(`/simulation/action`,payload);
            const { bus } = response.data.data;
            const { entityId, id:busId , driverId, fullname , platenumber , passengers , status , startLocation , currentLocation, endLocation } = bus;        
            localStorage.setItem("busEntintyId",entityId);
            socket.emit("startBus",bus)
            socket.on("busStarted",(data) => {
                startBus({ busId , passengers });
                speedControl({ busId , speed: 89 });
            })

            let num = 0
            const intv = setInterval(() => {
                if (num >= 100) {
                    socket.emit('finished',{id:entityId})
                    clearInterval(intv)
                }
                num++
                socket.emit('location_update', {
                    id: entityId,
                    location:{
                        latitude: -1.9529728,
                        longitude: 30.0875776
                    }
                })                
            }, 2000);           
        }
        setBusStarted(true)
    }

    const busEntityId = localStorage.getItem("busEntintyId");
    const activeBus = {
        id:busEntityId,
        location:{
            latitude: payload.location.latitude,
            longitude:payload.location.longitude
        },
        passengers:0
    };

    navigator.geolocation.getCurrentPosition(
        function(position) {
            setInterval(() => {
                activeBus.location.latitude = position.coords.latitude;
                activeBus.location.longitude = position.coords.longitude
            }, 4000);            
        },
        function(error) {
            return Notify("Please you need to allow us to have your location, ether way more functionality will not be available","error");
        }
    );

    if(status == "stop"){
        if(isAuth == "TRUE" && user.id != 0){
            socket.emit("stopBus",activeBus)
            socket.on("busStoped",(data) => {
                setBusStarted(false);
                socket.on("finish",{id:busEntityId})
            });
            
        }
    }   
    

    if(status == "finish"){
        payload.status = "remove";
        payload.id = busEntityId; 
        if(isAuth == "TRUE" && user.id != 0){
            try {
                const response = await axios.post(`/simulation/action`,payload);
                const { bus } = response.data.data;
                socket.emit("finish",activeBus)
                setBusStarted(false);   
                console.log(response);
                Notify(`Bus daily trip has complited`,"success"); 
                
            } catch (error) {
                Notify(`${error.message}`,"error");                
            }
                  
        }
    }

    if(status == "alight"){
        if(isAuth == "TRUE" && user.id != 0){
            activeBus.passengers = 0;
            socket.emit("update",activeBus)
            socket.on("updated",(data) => {
                const currentPassengers = data.passengers == null ? 0 : data.passengers;
                const passengersUpdate = Number(( currentPassengers + startBus.joining ) - startBus.alighting);
                activeBus.passengers = passengersUpdate < 0 ?  (passengersUpdate * -1): passengersUpdate ;
                socket.emit("alight",activeBus);
                socket.on("alighted",(data) => {
                    startBus.updateActiveBus({driverId:user.userId, alighting:startBus.alighting, joining:startBus.joining })
                    speedControl({ busId: data.bus.id , speed: 12 });
                })
            })  
            socket.emit('location_update',activeBus)                
        }
    }
}



localStorage.setItem("locationIndex", -1);
export const handleDriverActionsDemo = async (user,startBus,speedControl,status,setBusStarted=null,coordinates = [], startIngPassengers) => {
    let isAuth = localStorage.getItem("Logged");
    var onGoing =  false;
    localStorage.setItem("coordinateLength", coordinates.length);
    if(coordinates.length != 0){
        localStorage.setItem("coordinateLength", coordinates.length);
    }
    var coordinateLength =  localStorage.getItem("coordinateLength");   
    const payload = {
        status: "",
        userId: user.id,
        location:{
            latitude: coordinates[0].lat,
            longitude: coordinates[0].lng
        },
        passengers: startIngPassengers
    };

    var locationIndex = localStorage.getItem("locationIndex") != -1 ? localStorage.getItem("locationIndex") : 0;

    if(status == "start"){
        onGoing = true
        payload.status = "start";
        navigator.geolocation.getCurrentPosition(
            function(position) {           
                payload.location.latitude = position.coords.latitude;
                payload.location.longitude = position.coords.longitude                    
            },
            function(error) {
                return Notify("Please you need to provide you location,ether way more functionality will not be available ","error");
            }
        );
        if(isAuth == "TRUE" && user.id != 0){
            const response = await axios.post(`/simulation/action`,payload);
            const { bus } = response.data.data;
            const { entityId, id:busId , driverId, fullname , platenumber , passengers , status , startLocation , currentLocation, endLocation } = bus;        
            localStorage.setItem("busEntintyId",entityId);
            let busEntityId = localStorage.getItem("busEntintyId");
            socket.emit("startBus",bus)
            socket.on("busStarted",(data) => {
                locationIndex = localStorage.getItem("locationIndex");
                startBus({ busId , passengers:startIngPassengers });
                speedControl({ busId , speed: 89 });
            })

            
            const interval = setInterval(() => {
                if(locationIndex == (coordinateLength - 1) ){   
                    let activeBus = {
                        id:busEntityId,
                        location:{
                            latitude: coordinates[locationIndex].lat ,
                            longitude: coordinates[locationIndex].lng
                        },
                        passengers:0
                    };                 
                    socket.emit("stopBus",activeBus)
                    socket.on("busStoped",(data) => {
                        setBusStarted(false);
                        socket.on("finish",{id:busEntityId});
                        clearInterval(interval);
                    });
                    clearInterval(interval);
                }
                if(onGoing){                    
                    locationIndex++
                }
                socket.emit('location_update', {
                    id: entityId,
                    location:{
                        latitude: coordinates[locationIndex].lat ,
                        longitude: coordinates[locationIndex].lng
                    }
                })                
            }, 2000);           
        }
        setBusStarted(true)
    }

    const busEntityId = localStorage.getItem("busEntintyId");
    const activeBus = {
        id:busEntityId,
        location:{
            latitude: payload.location.latitude,
            longitude:payload.location.longitude
        },
        passengers:0
    };

    navigator.geolocation.getCurrentPosition(
        function(position) {           
            activeBus.location.latitude = position.coords.latitude;
            activeBus.location.longitude = position.coords.longitude                   
        },
        function(error) {
            return Notify("Please you need to allow us to have your location, ether way more functionality will not be available","error");
        }
    );

    if(status == "stop"){
        onGoing = false;
        if(isAuth == "TRUE" && user.id != 0){
            socket.emit("stopBus",activeBus)
            socket.on("busStoped",(data) => {
                setBusStarted(false);
                socket.on("finish",{id:busEntityId})
            });
            
        }
    }   
    
    if(status == "finish"){
        payload.status = "remove";
        payload.id = busEntityId; 
        if(isAuth == "TRUE" && user.id != 0){
            try {
                const response = await axios.post(`/simulation/action`,payload);
                const { bus } = response.data.data;
                socket.emit("finish",activeBus)
                setBusStarted(false);   
                console.log(response);
                Notify(`Bus daily trip has complited`,"success"); 
                
            } catch (error) {
                Notify(`${error.message}`,"error");                
            }
                  
        }
    }

    socket.on("busStarted",(data) => {
        onGoing = true;
    });
    socket.on("busStoped",(data) => {
        onGoing = false;
        localStorage.setItem("locationIndex", locationIndex)
    });
    socket.on("alighting",(data) => {
        localStorage.setItem("locationIndex", locationIndex)
        onGoing = false;
    })  
 
    socket.on("killAlighting",(data) => {
         onGoing = true;
         console.log("bus which is alighting kill", data);
    })  
   
    if(status == "alight"){
        onGoing = true;
        if(isAuth == "TRUE" && user.id != 0){
            activeBus.passengers = 0;
            socket.emit("get_passengers",activeBus)
            socket.on("receive_passengers",(data) =>{
                const currentPassengers = data.bus.passengers == null ? 0 : data.bus.passengers;
                const passengersUpdate = Number(( Number(currentPassengers) + Number(startBus.joining )) - Number(startBus.alighting));
                activeBus.passengers = passengersUpdate;
                startBus.updateActiveBus({driverId:user.userId, alighting:startBus.alighting, joining:startBus.joining })
                speedControl({ busId: data.bus.id , speed: 12 });
                socket.emit("passengers_update",activeBus);
                socket.on("passengers_update",(data) => {});          
            })
                      
        }
    }
}



export default handleDriverActions;