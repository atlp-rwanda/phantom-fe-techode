import Notify from "./Notify";

const getMyLocation = (setOrigin) =>{
    navigator.geolocation.getCurrentPosition(
        function(position) {   
          const userOrgin = {
              lat: 0,
              lng: 0
          };
          userOrgin.lat = position.coords.latitude;
          userOrgin.lng = position.coords.longitude;
          localStorage.setItem("origin",JSON.stringify({lat: userOrgin.lat ,lng:userOrgin.lng }));
          setOrigin(userOrgin);
        },
        function(error) {
            return Notify("Please, allow us to have your location","error");
        }
    );
}

export default getMyLocation;