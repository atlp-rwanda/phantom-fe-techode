import React, { useState, useEffect } from "react";
import RouteInfoSkeleton from "./RouteInfoSkeleton";
import Pagination from "../../components/pagination/Pagination";
import deleteIcon from "../../assets/svgs/delete.svg";
import edit from "../../assets/svgs/edit.svg";
import more from "../../assets/svgs/more.svg";
import close from "../../assets/svgs/close.svg";
import imageBus from "../../assets/img/imageBus.png";
import location_route from "../../assets/img/location_route.png";
import vector from "../../assets/img/Vector2.png";
import profile_admin from "../../assets/img/profile_admin.png";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Routemap.css";
import { LebalButton } from "../../components/buttons/LebalButton";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import { Primary } from "../../components/buttons/Buttons";
import { InfoButton } from "../../components/buttons/Buttons";
import { ToastContainer } from "react-toastify";
import Notify from "../../functions/Notify";
import GetRouteInfo from "../../functions/GetRouteInfo";
import TableSkeleton from "../../components/skeletons/Tables/TableSkeleton";
import { connect } from "react-redux";
import { createRoute, updateRouteInfo, deleteRoute, fetchRoutes } from "../../redux/actions/RoutesAction";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { API as axios, createRouteOnApi } from "../../api";
import fetchAllRoute from "../../functions/fetchAllRoute";

const provider = new OpenStreetMapProvider();
function AddRoute(props) {
  const { routes, createRoute, updateRouteInfo, deleteRoute, fetchRoutes } = props;
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMap, setLoadingMap] = useState(true);
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerPage] = useState(2);
  const [assignroutes, setAssignRoutes] = useState("");

  /* ============= For search =================== */
  const [from, setFrom] = useState({ lat: -1.9447501, lng: 30.058433 });
  const [end, setEnd] = useState({ lat: -1.98507, lng: 30.031855 });

  /* ============= For search =================== */

  /* ============ Start::  Getting current driver lis ================== */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = routes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  const [createRouteModel, setCreateRouteModel] = useState(false);

  const getRoutes = async () => {
    try {
      const response = await fetchAllRoute();
      fetchRoutes(response);
      setAssignRoutes(response)
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    getRoutes();
    setTimeout(() => {
      setLoadingMap(false);
    }, 500)
  }, [loadingMap])

  const removeModel = () => {
    let newState = !createRouteModel;
    setCreateRouteModel(newState);
  };

  setTimeout(() => {
    setLoading(false);
    setLoadingMap(false);
  }, 1000);

  const createNewRoute = async (e) => {
    e.preventDefault();
    setLoadingMap(false);

    /* =================================== Start:: validation ================================ */
    if (name.trim().length == "" || !name.includes("-"))
      return Notify(`name field should not be empty and should have " - " to separate starting point and ending point`, "error");
    if (code.toString().trim().length == "")
      return Notify("code field should not be empty", "error");
    if (startLocation.trim().length == "")
      return Notify("start location field should not be empty", "error");
    if (endLocation.trim().length == "")
      return Notify("end location field should not be empty", "error");
    if (from.lat == 0 || from.lat == 0 || end.lat == 0 || end.lat == 0)
      return Notify(
        "For us to caliculate distance you need to be accurate when you adding starting place",
        "error"
      );

    /* =================================== End:: validation ================================ */

    const newRoute = {
      name: name,
      code: code,
      startLocation: `${from.lat},${from.lng}`,
      endLocation:  `${end.lat},${end.lng}`,
      distance: distance,
      duration: duration,
      city,
      from,
      to: end,
    };
    
    try {
      let response = await createRouteOnApi(newRoute);
      await getRoutes();
      Notify("New route have been added", "success")
    } catch (error) {
      if (error.code != "ERR_NETWORK") {
        Notify(error.response.data.message, "error");           
      }
      else{
          Notify("Unable to create routes probably it is because of internet network" , "error")
      }  
    }
    
    setTimeout(() => {
      removeModel();
      setName("");
      setCode("");
      setStartLocation("");
      setEndLocation("");
      setDistance("");
      setDuration("");
      setFrom({ lat: 0, lng: 0 });
      setEnd({ lat: 0, lng: 0 });
      setShow(!show);
    }, 500);
    return Notify("New route have been added", "success");
  };

  const [routeId, setRouteId] = useState("");
  const [show, setShow] = useState(false);
  const [listModal, setListModal] = useState(false);

  const viewListModal = () => {
    let newState = !listModal;
    setListModal(newState);
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const viewDeleteModal = (id, route_Id) => {
    let newState = !deleteModal;
    setDeleteModal(newState);
    // setRouteId(id);
    setRouteId(route_Id);
    setListModal(false);
  };

  const [updateModel, setUpdateModel] = useState(false);
  const viewUpdateModal = (route_Id) => {
    let newState = !updateModel;
    setUpdateModel(newState);
    setRouteId(route_Id);
    setListModal(false);
  };

  const deleteroute = async (e) => {
    e.preventDefault();
    let data = await axios.delete(`/routes/${routeId}`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "auth-token": `Bearer ${localStorage.getItem("token")}`,
          "action": "deleteRoute"
        }
      })

    setDeleteModal(false);
    setListModal(true);
    return Notify("Route has been Deleted successfully", "success");
  };
  const [selectedRoute, setSelectedRouteId] = useState("");
  const getSelectedRoute = (id) => {
    const select = routes.filter((route) => route.id == id);
    setSelectedRouteId(select);
  };

  const closeModel = (e) => {
    e.preventDefault();
    setUpdateModel(!updateModel);
  };
  const updateRouteModel = async (id = null) => {
    setUpdateModel(!updateModel);
    if (id != null) {
      viewUpdateModal();
      let data = await axios.get(`/routes/${id}`,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "auth-token": `Bearer ${localStorage.getItem("token")}`
          }
        })
      setRouteId(id);
      setName(data.data.data.name);
      setCode(data.data.data.code);
      setStartLocation(data.data.data.startLocation);
      setEndLocation(data.data.data.endLocation);
      setDistance(data.data.data.distance);
      setDuration(data.data.data.duration);
      setCity(data.data.data.city);
    }
  };

  let count = 0;
  useEffect(() => {
    setProfileInfo(routes[0]);
  }, []);
  const [selectedRouteName, setSelectedRouteName] = useState("");
  const [profileInfo, setProfileInfo] = useState("");
  const changeRoute = async (routeId, name, code, startLocation, endLocation, distance, duration, city) => {
    getRoutes();
    const newRouteInfo = {
      id: routeId,
      name: name,
      code: code,
      startLocation: `${from.lat},${from.lng}`,
      endLocation:  `${end.lat},${end.lng}`,
      distance: distance,
      duration: duration,
      city
    };
    try {
      const response = await axios.put(`/routes/${routeId}`,newRouteInfo)
      Notify(response.data.message, "success");
    } catch (error) {
      if (error.code != "ERR_NETWORK") {
        Notify(error.response.data.message, "error");
      }
      else {
        Notify(error.message, "error");
      }
    }
  }

  const updateRoute = async (e) => {
    e.preventDefault();
    /* =================================== Start:: validation ================================ */
    if (name.trim().length == "" || !name.includes("-"))
      return Notify(`name field should not be empty and should have " - " to separate starting point and ending point`, "error");
    if (code.toString().trim().length == "")
      return Notify("code field should not be empty", "error");
    if (startLocation.trim().length == "")
      return Notify("start location field should not be empty", "error");
    if (endLocation.trim().length == "")
      return Notify("end location field should not be empty", "error");
    if (from.lat == 0 || from.lat == 0 || end.lat == 0 || end.lat == 0)
      return Notify(
        "For us to caliculate distance you need to be accurate when you adding starting place",
        "error"
      );

    /* =================================== End:: validation ================================ */

    changeRoute(routeId, name, code, startLocation, endLocation, distance, duration, city)
    await getRoutes();
    setTimeout(() => {

      setUpdateModel(false);
      setLoadingMap(false);
      setRouteId(0);
      setName("");
      setCode("");
      setStartLocation("");
      setEndLocation("");
      setDistance("");
      setDuration("");
      setFrom({ lat: 0, lng: 0 });
      setEnd({ lat: 0, lng: 0 });
    }, 2000);
  };

  return (
    <>
      {/* =========================== Start:: Model =============================== */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className={` z-50 h-screen  w-screen bg-modelColor  absolute flex items-center justify-center px-4 ${deleteModal === true ? "block" : "hidden"
          }`}
      >
        <div className="bg-white w-full   mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Delete Route
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => setDeleteModal(!deleteModal)}
            >
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" sp:px-8 mp:px-5 sm:px-10  md:px-8 z-50 lg:px-12">
              <div className=" w-full flex flex-col rounded-lg items-center justify-center shadow-2xl">
                <hr className="w-full h-0.5 bg-gray-200" />
                <p className="mt-5 text-slate-200 w-4/5 text-sm">
                  You are about to delete{" "}
                  <span className="text-primary-500 font-bold text-sm">
                    {selectedRouteName}
                  </span>
                </p>
                <form className="mt-5 w-4/5 mb-5" action="">
                  <div className="flex justify-between  w-full">
                    <button
                      onClick={() => {
                        setDeleteModal(!deleteModal);
                      }}
                      className="bg-indigo-300 text-blue-500 w-24 h-8 rounded font-bold text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={deleteroute}
                      className="bg-red-300 text-red-500 font-bold w-24 h-8 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`z-50 h-screen w-screen  bg-modelColor absolute flex items-center justify-center px-4 ${updateModel === true ? "block" : "hidden"
          }`}
      >
        <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Update Route
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => {
                setUpdateModel(!updateModel);
                setLoadingMap(false);
              }}
            >
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body  ">
            <form
              onSubmit={(e) => updateRoute(e)}
              className=" sp:px-8 mp:px-5  sm:px-10  md:px-8 lg:px-12"
            >
              <div className="input my-3 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-9 w-4/5"
                    placeholder="route name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full  rounded-md">
                  <input
                    type="number"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-9 w-4/5"
                    placeholder="route code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full  rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-9 w-4/5"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-9 w-4/5"
                    placeholder="start location"
                    value={startLocation}
                    onChange={(e) => {
                      setStartLocation(e.target.value);
                      /* ============= Start:: Searching  route info ======================= */
                      provider
                        .search({ query: `rwanda ${e.target.value}` })
                        .then(function (result) {

                          if (result.length != 0) {
                            setFrom({
                              lat: result[0].bounds[0][0],
                              lng: result[0].bounds[0][1],
                            });
                            setLoadingMap(true);
                          } else {
                            setFrom({ lat: 0, lng: 0 });
                          }
                        })
                        .catch((error) => {
                        });
                      /* ============= end:: Searching  route info ========================= */
                    }}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-9 w-4/5"
                    placeholder="end location"
                    value={endLocation}
                    onChange={(e) => {
                      setEndLocation(e.target.value);
                      /* ============= Start:: Searching  route info ======================= */
                      provider
                        .search({ query: `rwanda ${e.target.value}` })
                        .then(function (result) {

                          if (result.length != 0) {
                            setEnd({
                              lat: result[0].bounds[0][0],
                              lng: result[0].bounds[0][1],
                            });
                            setLoadingMap(true);
                          } else {
                            setEnd({ lat: 0, lng: 0 });
                          }
                        })
                        .catch((error) => {
                        });
                      /* ============= end:: Searching  route info ========================= */
                    }}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-9 w-4/5"
                    placeholder="Distance"
                    value={distance}
                    readOnly
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-9 w-4/5"
                    placeholder="Duration"
                    value={duration}
                    readOnly
                  />
                </div>
                <div className="w-full flex flex-wrap justify-between items-center mt-4">
                  <InfoButton
                    name={`Cancel`}
                    styles="py-2 w-5/12 "
                    onclick={(e) => closeModel(e)}
                  />
                  <Primary
                    name={`Update`}
                    styles="py-2 w-5/12 "
                    onClick={!updateModel}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`z-50 h-screen w-screen  bg-modelColor absolute flex items-center justify-center px-4 ${show === true ? "block" : "hidden"
          }`}
      >
        <div className="bg-white w-full  mp:w-8/12  md:w-full  xl:w-4/5 2xl:w-4/5 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Adding new Route
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => {
                setShow(!show);
                setLoadingMap(false);
              }}
            >
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body ">
            <form
              onSubmit={(e) => createNewRoute(e)}
              className=" py-3 sp:px-8 mp:px-5  sm:px-10  md:px-8 lg:px-12 "
            >
              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"
                    placeholder="route name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="number"
                    name="name"
                    className="bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"
                    placeholder="route code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"
                    placeholder="City name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"
                    placeholder="start location"
                    value={startLocation}
                    onChange={(e) => {
                      setStartLocation(e.target.value);
                      /* ============= Start:: Searching  route info ======================= */
                      provider
                        .search({ query: `rwanda ${e.target.value}` })
                        .then(function (result) {

                          if (result.length != 0) {
                            setFrom({
                              lat: result[0].bounds[0][0],
                              lng: result[0].bounds[0][1],
                            });
                            setLoadingMap(true);
                          } else {
                            setFrom({ lat: 0, lng: 0 });
                          }
                        })
                        .catch((error) => {
                        });
                      /* ============= end:: Searching  route info ========================= */
                    }}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"
                    placeholder="end location"
                    value={endLocation}
                    onChange={(e) => {
                      setEndLocation(e.target.value);
                      /* ============= Start:: Searching  route info ======================= */
                      provider
                        .search({ query: `rwanda ${e.target.value}` })
                        .then(function (result) {

                          if (result.length != 0) {
                            setEnd({
                              lat: result[0].bounds[0][0],
                              lng: result[0].bounds[0][1],
                            });
                            setLoadingMap(true);
                          } else {
                            setEnd({ lat: 0, lng: 0 });
                          }
                        })
                        .catch((error) => {
                        });
                      /* ============= end:: Searching  route info ========================= */
                    }}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"
                    placeholder="Distance"
                    value={distance}
                    readOnly
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"
                    placeholder="Duration"
                    value={duration}
                    readOnly
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-between gap-5 mt-5">
                  <Primary
                    name={`Add Route`}
                    styles="py-2"
                    onclick={createNewRoute}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div
        className={`z-50 h-screen w-screen  bg-modelColor absolute flex items-center justify-center px-4 ${listModal === true ? "block" : "hidden"
          }`}
      >

      </div>
      {/* =========================== End:: Model =================================== */}
      {/* =========================== Start:: Dashboard =============================== */}
      <DashBoardLayout>
        <div className="flex-col w-full p-5">
          <div className=" w-full  flex-col h-20  sm:w-2/5 flex lg:w-1/3  md:flex-row justify-between mb-10">
            <button
              onClick={() => setShow(!show)}
              className="w-32 bg-primary-100 h-8 rounded border border-cyan-2 text-primary-500 font-bold md:w-32 text-center shadow-4xl"
            >
              Route +
            </button>
          </div>

          {!loading ? (
            <>
              <div className="w-full h-min  md:w-full lg:ml-20  rounded-md  m-2">
                {/* <div className="w-screen overflow-x-scroll  flex flex-col md:flex-row gap-10 lg:flex-row"> */}
<<<<<<< HEAD
               
                <div className="flex-col md:flex justify-between lg:flex-row mt-10">
                  <article className="flex bg-white md:w-4/5 lg:w-1/3 rounded-lg flex-col items-center justify-center">


                    <div className="flex-col items-center w-full  justify-center mt-5">
                      <figure className="  flex-col ">
                        <div className="  flex items-center  justify-center ">
                          <img src={profile_admin} alt="" />
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <p className=""> {profileInfo.name}</p>
                        </div>
                      </figure>
                    </div>

                    <div className="flex flex-row w-5/6 items-center justify-center gap-5">
                      <figure className="-mt-10">
                        <img src={vector} alt="" />
                      </figure>
                      <div className="flex flex-col mt-5 ">
                        <p className="text-sky-500 font-bold">
                          Route information
                        </p>
                        <p>
                          Start: <span>{profileInfo.startLocation}</span>{" "}
                        </p>
                        <p>
                          Finish: <span> {profileInfo.endLocation}</span>
                        </p>
                        <p>
                          Distance: <span> {profileInfo.distance}</span>{" "}
                        </p>
                        <p>
                          Duration: <span>{profileInfo.duration}</span>{" "}
                        </p>

                        <p className="text-sky-500 font-bold mt-3 mb-2">
                          Locate
                        </p>
                      </div>
                    </div>
                  </article>
=======

                <div className="bg-white w-full  mp:w-8/12  md:w-full  xl:w-4/5 2xl:w-4/5 rounded-lg p-4 pb-8">
                  <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                    <h3 className="font-bold text-sm text-center w-11/12">
                      List of routes
                    </h3>
                    <div
                      className="close-icon w-1/12 cursor-pointer float-right"
                      onClick={() => setListModal(false)}
                    >
                    </div>
                    <hr className=" bg-secondary-150 border my-3 w-full" />
                  </div>
                  <div className="card-body">
                    <div className=" sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12">
                      <div className="w-full">
                        {/*  ==================== Start: Operator content =================== */}
                        <div className="card-header flex items-center justify-between">
                          <div className="card-title">
                            <div className="title mb-3">
                              <h4 className=" text-primary-500 font-bold text-xs md:text-base">
                                List of Routes
                              </h4>
                            </div>
                            <div className="sub-title">
                              <h4 className="text-secondary-200  font-bold text-xs">
                                Routes
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 mb-10">
                          {loading && <TableSkeleton />}
                          {!loading && (
                            <>
                              <table className="min-w-full border-collapse border-0">
                                <thead>
                                  <tr className="border-b border-b-secondary-100">
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      #
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      Route name
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      Route code
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      City
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      Distance
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      Start Location
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      End Location
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      Duration
                                    </th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {assignroutes?.map((route) => (
                                    <tr
                                      key={route.id}
                                      onClick={() =>
                                        setProfileInfo(currentPosts[count++])
                                      }
                                      className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100"
                                    >
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.id}
                                      </td>

                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.name}
                                      </td>
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.code}
                                      </td>
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.city}
                                      </td>
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.duration}
                                      </td>
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.startLocation}
                                      </td>
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.endLocation}
                                      </td>
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {route.distance}
                                      </td>
                                      <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {/* =================== Start:: only admin to see this =================== */}

                                        {/* =================== End:: only admin to see this =================== */}
                                        <LebalButton
                                          type={"primary"}
                                          svg={edit}
                                          onclick={() => updateRouteModel(route.id)}
                                        />
                                        <LebalButton
                                          type={"danger"}
                                          svg={deleteIcon}
                                          onclick={() => {
                                            viewDeleteModal(!deleteModal, route.id);
                                          }}
                                        />
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                              <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={routes.length}
                                paginate={paginate}
                              />
                            </>
                          )}
                        </div>
                        {/* ==================== End: Operator content ===================== */}
                      </div>
                    </div>
                  </div>
                </div>
>>>>>>> #TP-18 ft:(simulate) bus motion integration

                <div className="flex-col md:flex justify-between lg:mr-60 lg:flex-row mt-10">
                  <div className=" h-full w-full md:w-full lg:w-full  flex justify-center rounded-2xl"
                    id="map">
                    <MapContainer
                      center={{ lat: -1.98507, lng: 30.031855 }}
                      zoom={13}
                      scrollWheelZoom={false}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />

                      {!loadingMap && (
                        <GetRouteInfo
                          from={from}
                          to={end}
                          setDuration={setDuration}
                          setDistance={setDistance}
                        />
                      )}
                    </MapContainer>
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            <TableSkeleton />
          )}
        </div>
      </DashBoardLayout>
      {/* =========================== End:: Dashboard ================================ */}
    </>
  );
}
const mapToState = (state) => {
  return {
    routes: state.routes,
  };
};

export default connect(mapToState, {
  createRoute,
  updateRouteInfo,
  deleteRoute,
  fetchRoutes
})(AddRoute);
