import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import deleteIcon from "../../assets/svgs/delete.svg";
import edit from "../../assets/svgs/edit.svg";
import more from "../../assets/svgs/more.svg";
import close from "../../assets/svgs/close.svg";
import prev from "../../assets/svgs/prev.svg";
import next from "../../assets/svgs/next.svg";
import imageBus from "../../assets/img/imageBus.png";
import location from "../../assets/img/location.png";
import vector from "../../assets/img/Vector2.png";
import profile_admin from "../../assets/img/profile_admin.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import "./Routemap.css";
import {
  LebalButton,
  LebalTextButton,
} from "../../components/buttons/LebalButton";

import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import { Primary } from "../../components/buttons/Buttons";
import { ToastContainer } from "react-toastify";
import Notify from "../../functions/Notify";
import TableSkeleton from "../../components/skeletons/Tables/TableSkeleton";
import { connect, useDispatch, useSelector } from "react-redux";

import {
  createRoute,
  updateRouteInfo,
  deleteRoute,
} from "../../redux/actions/RoutesAction";

function AddRoute(props) {
  const { routes, createRoute, updateRouteInfo, deleteRoute } = props;
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  //   const {
  //     type: routeType,
  // } = route;
  const [createRouteModel, setCreateRouteModel] = useState(false);
  const removeModel = () => {
    let newState = !createRouteModel;
    setCreateRouteModel(newState);
  };

  const createNewRoute = (e) => {
    e.preventDefault();

    /* =================================== Start:: validation ================================ */
    if (name.trim().length == "")
      return Notify("name field should not be empty", "error");
    if (code.toString().trim().length == "")
      return Notify("code field should not be empty", "error");
    if (startLocation.trim().length == "")
      return Notify("start location field should not be empty", "error");
    if (endLocation.trim().length == "")
      return Notify("end location field should not be empty", "error");
    if (distance.trim().length == "")
      return Notify("distance field should not be empty", "error");
    if (duration.trim().length == "")
      return Notify("duration field should not be empty", "error");

    /* =================================== End:: validation ================================ */

    const newRoute = {
      name: name,
      code: code,
      startLocation: startLocation,
      endLocation: endLocation,
      distance: distance,
      duration: duration,
    };
    console.log(newRoute);

    createRoute(newRoute);
    setTimeout(() => {
      removeModel();
      setName("");
      setCode("");
      setStartLocation("");
      setEndLocation("");
      setDistance("");
      setDuration("");
    }, 2000);
    return Notify("New route have been added", "success");
  };

  const location = useLocation();
  const [edit, setEdit] = useState(null);
  const [routeId, setRouteId] = useState("");

  useEffect(() => {
    if (location.state) {
      setEdit(location.state.detail);
      console.log("location ", location);
    }
  }, [location]);

  const history = useHistory();

  const [show, setShow] = useState(false);
  const [routeModal, setRouteModal] = useState(false);

  const addRouteModal = () => {
    let newState = !routeModal;
    setRouteModal(newState);
  };

  const [listModal, setListModal] = useState(false);

  const viewListModal = () => {
    let newState = !listModal;
    setListModal(newState);
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const viewDeleteModal = (route_Id) => {
    let newState = !deleteModal;
    setDeleteModal(newState);
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

  const { type: userType } = routes;
  const deleteroute = (e) => {
    e.preventDefault();
    deleteRoute({ routeId });
    setTimeout(() => {}, 2000);
    Notify("deleted", "success");
  };
  const [selectedRoute, setSelectedRouteId] = useState("");
  const getSelectedRoute = (id) => {
    const select = routes.filter(route => route.id == id);
    setSelectedRouteId(select);
}

  const updateRouteModel = (id = null) => {
    
    
    setUpdateModel(!updateModel);
    if (id != null) {
        viewUpdateModal()
        const select = routes.filter(route => route.id == id);
        setSelectedRouteId(select);
        setRouteId(select[0].id)
        setName(select[0].name);
        setCode(select[0].code);
        setStartLocation(select[0].startLocation);
        setEndLocation(select[0].endLocation);
        setDistance(select[0].distance);
        setDuration(select[0].duration);

    }

}


  const updateRoute = (e) => {
    e.preventDefault();

    /* =================================== Start:: validation ================================ */
    if (name.trim().length == "")
      return Notify("name field should not be empty", "error");
    if (code.toString().trim().length == "")
      return Notify("code field should not be empty", "error");
    if (startLocation.trim().length == "")
      return Notify("start location field should not be empty", "error");
    if (endLocation.trim().length == "")
      return Notify("end location field should not be empty", "error");
    if (distance.trim().length == "")
      return Notify("distance field should not be empty", "error");
    if (duration.trim().length == "")
      return Notify("duration field should not be empty", "error");

    /* =================================== End:: validation ================================ */

    const newRouteInfo = {
        id: routeId,
      name: name,
      code: code,
      startLocation: startLocation,
      endLocation: endLocation,
      distance: distance,
      duration: duration,
    };
    updateRouteInfo(newRouteInfo);
    setTimeout(() => {
      setUpdateModel(false);
      setRouteId(0);
      setName("");
      setCode("");
      setStartLocation("");
      setEndLocation("");
      setDistance("");
      setDuration("");
    }, 2000);
    return Notify("route have been updated", "success");
  };

  return (
    <>
      {/* =========================== Start:: Model =============================== */}

      <div
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          deleteModal === true ? "block" : "hidden"
        }`}
      >
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
        <div className="bg-white w-full h-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Adding new Route
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
              <div className=" w-1/3 flex flex-col rounded-lg items-center justify-center shadow-2xl">
                <p className="text-red-500 mb-3 mt-3 font-bold text-sm">
                  Deleting route
                </p>
                <hr className="w-full h-0.5 bg-gray-200" />
                <p className="mt-5 text-slate-200 w-4/5 text-sm">
                  You are about to delete{" "}
                  <span className="text-blue-500 font-bold text-sm">
                    Kivu belt
                  </span>
                </p>
                <form className="mt-5 w-4/5 mb-5" action="">
                  <div className="flex justify-between  w-full">
                    <button
                      onClick={() => setDeleteModal(!deleteModal)}
                      className="bg-indigo-300 text-blue-500 w-32 h-8 rounded font-bold text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={deleteroute}
                      className="bg-red-300 text-red-500 font-bold w-32 h-8 rounded text-sm"
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
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          updateModel === true ? "block" : "hidden"
        }`}
      >
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
        <div className="bg-white w-full h-full  lg:h-4/5   mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 2xl:h-3/6 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Update Route
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => setShow(!show)}
            >
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body ">
            <form
              onSubmit={(e) => updateRoute(e)}
              className=" sp:px-8 mp:px-5  sm:px-10  md:px-8 lg:px-12"
            >
              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="route name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full  rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="route code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="start location"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="end location"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="Distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <button>Cancel</button>
                <button onClick={!updateModel}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          show === true ? "block" : "hidden"
        }`}
      >
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
        <div className="bg-white w-full h-full  lg:h-4/5   mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 2xl:h-3/6 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Adding new Route
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => setShow(!show)}
            >
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body ">
            <form
              onSubmit={(e) => createNewRoute(e)}
              className=" sp:px-8 mp:px-5  sm:px-10  md:px-8 lg:px-12"
            >
              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="route name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full  rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="route code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="start location"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="end location"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="Distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                </div>
                <div className="grouped-input bg-secondary-40  mt-5  flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <button onClick={createNewRoute}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          listModal === true ? "block" : "hidden"
        }`}
      >
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
        <div className="bg-white w-full  mp:w-8/12  md:w-full  xl:w-4/5 2xl:w-4/5 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Adding new operator
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => setListModal(false)}
            >
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body"></div>
        </div>
      </div>

      <div
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          listModal === true ? "block" : "hidden"
        }`}
      >
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
        <div className="bg-white w-full  mp:w-8/12  md:w-full  xl:w-4/5 2xl:w-4/5 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              List of routes
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => setListModal(false)}
            >
              <img src={close} alt="Phantom" className="float-right" />
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
                              Start Location
                            </th>
                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                              End Location
                            </th>
                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                              Distance
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
                          {routes.map((route) => (
                            <tr
                              key={route.id}
                              className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100"
                            >
                              <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                {route.id}
                              </td>

                              <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                <LebalTextButton text="J" type="primary" />{" "}
                                {route.name}
                              </td>
                              <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                {route.code}
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
                                {route.duration}
                              </td>
                              <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                {/* =================== Start:: only admin to see this =================== */}

                                {/* =================== End:: only admin to see this =================== */}
                                <LebalButton
                                  type={"primary"}
                                  svg={more}
                                  onClick={() => UpdateRouteModal(route.id)}
                                />
                                <LebalButton
                                  type={"danger"}
                                  svg={deleteIcon}
                                  onClick={() => setShow(!show)}
                                />

                                <LebalButton
                                  type={"info"}
                                  svg={more}
                                  onClick={() => setDeleteModal(!deleteModal)}
                                />
                                <button
                                  onClick={() => updateRouteModel(route.id)}
                                >
                                  Update
                                </button>
                                <button
                                  onClick={() => viewDeleteModal(route.id)}
                                >
                                  Delete
                                </button>
                                <button>More</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="w-full flex items-center justify-center ">
                        <div className="w-11/12 sm:w-6/12 md:w-6/12 p-1 px-4 shadow flex justify-between mt-3">
                          <div className="next flex items-center justify-center rounded-md cursor-pointer hover:bg-secondary-100 w-9">
                            <img src={prev} alt="Phantomm" />
                          </div>
                          <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">
                            1
                          </div>
                          <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">
                            2
                          </div>
                          <div className="flex items-center justify-center rounded-md cursor-pointer bg-primary-600 w-8 text-white">
                            3
                          </div>
                          <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">
                            ...
                          </div>
                          <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">
                            12
                          </div>
                          <div className="next flex items-center justify-center cursor-pointer rounded-md bg-secondary-100 hover:bg-secondary-200 w-9">
                            <img src={next} alt="Phantomm" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* ==================== End: Operator content ===================== */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================== End:: Model =================================== */}
      {/* =========================== Start:: Dashboard =============================== */}
      <DashBoardLayout>
        <div className="flex-col w-full p-5">
          <div className=" w-full  flex-col h-20  sm:w-2/5 flex justify-between lg:w-1/3  md:flex-row justify-between mb-10">
            <button
              onClick={() => setShow(!show)}
              className="w-32 bg-primary-100 h-8 rounded border border-cyan-2 text-primary-500 font-bold md:w-32 text-center shadow-4xl"
            >
              Route +
            </button>
            <button
              onClick={viewListModal}
              className="w-32 bg-primary-100 h-8 rounded border border-cyan-2 text-primary-500  font-bold md:w-32 text-center shadow-4xl"
            >
              List
            </button>
          </div>

          <div className="w-full h-min    md:w-full  rounded-md  m-2">
            <div className="w-screen  flex flex-col md:flex-row gap-10 lg:flex-row">
              <article className="w-3/4 flex h-full md:h-full bg-white w-full mt-3 lg:mr-0  md:flex shadow-2xl md:w-full lg:w-1/5    rounded ">
                <img
                  className="h-full  w-2/5 md:w-1/2 md:h-full  "
                  src={imageBus}
                  alt=""
                />
                <div className="flex md:flex flex-col   justify-center">
                  <p className="text-center text-primary-500 text-sm  font-bold">
                    Bus
                  </p>
                  <p className="text-sm  text-primary-500 font-semibold text-sm ml-3">
                    Driver: <span className="text-black font-normal">John</span>
                  </p>
                  <p className=" text-primary-500 font-semibold ml-3 text-sm">
                    Plate:{" "}
                    <span className="text-black font-normal">RAE 0000F</span>
                  </p>
                  <div className="flex items-center justify-center w-full  md:mt-0 ">
                    <div className="bg-primary-100 rounded w-1/5 h-6 border border-cyan-2 flex items-center justify-center">
                      <img className="" src={location} alt="" />
                    </div>
                  </div>
                </div>
              </article>

              <article className="w-3/4 flex h-full md:h-full   bg-white w-full mt-3  lg:mr-0  md:flex shadow-2xl md:w-full lg:w-1/5    rounded ">
                <img
                  className="h-full  w-2/5 md:w-1/2 md:h-full  "
                  src={imageBus}
                  alt=""
                />
                <div className="flex md:flex flex-col   justify-center">
                  <p className="text-center text-primary-500 text-sm  font-bold">
                    Bus
                  </p>
                  <p className="text-sm  text-primary-500 font-semibold text-sm ml-3">
                    Driver: <span className="text-black font-normal">John</span>
                  </p>
                  <p className=" text-primary-500 font-semibold ml-3 text-sm">
                    Plate:{" "}
                    <span className="text-black font-normal">RAE 0000F</span>
                  </p>
                  <div className="flex items-center justify-center w-full  md:mt-0 ">
                    <div className="bg-primary-100 rounded w-1/5 h-6 border border-cyan-2 flex items-center justify-center">
                      <img className="" src={location} alt="" />
                    </div>
                  </div>
                </div>
              </article>

              <article className="w-3/4  flex h-full md:h-full bg-white w-full mt-3  lg:mr-0  md:flex shadow-2xl md:w-full md:hidden lg:w-1/5 lg:block lg:flex    rounded ">
                <img
                  className="h-full  w-2/5 md:w-1/2 md:h-full  "
                  src={imageBus}
                  alt=""
                />
                <div className="flex md:flex flex-col   justify-center">
                  <p className="text-center text-primary-500 text-sm  font-bold">
                    Bus
                  </p>
                  <p className="text-sm  text-primary-500 font-semibold text-sm ml-3">
                    Driver: <span className="text-black font-normal">John</span>
                  </p>
                  <p className=" text-primary-500 font-semibold ml-3 text-sm">
                    Plate:{" "}
                    <span className="text-black font-normal">RAE 0000F</span>
                  </p>
                  <div className="flex items-center justify-center w-full  md:mt-0 ">
                    <div className="bg-primary-100 rounded w-1/5 h-6 border border-cyan-2 flex items-center justify-center">
                      <img className="" src={location} alt="" />
                    </div>
                  </div>
                </div>
              </article>

              <article className="w-3/4  flex h-full md:h-full bg-white w-full mt-3  lg:mr-0  md:flex shadow-2xl md:w-3/5 lg:w-1/5    rounded ">
                <img
                  className="h-full  w-2/5 md:w-1/2 md:h-full  "
                  src={imageBus}
                  alt=""
                />
                <div className="flex md:flex flex-col   justify-center">
                  <p className="text-center text-primary-500 text-sm  font-bold">
                    Bus
                  </p>
                  <p className="text-sm  text-primary-500 font-semibold text-sm ml-3">
                    Driver: <span className="text-black font-normal">John</span>
                  </p>
                  <p className=" text-primary-500 font-semibold ml-3 text-sm">
                    Plate:{" "}
                    <span className="text-black font-normal">RAE 0000F</span>
                  </p>
                  <div className="flex items-center justify-center w-full  md:mt-0 ">
                    <div className="bg-primary-100 rounded w-1/5 h-6 border border-cyan-2 flex items-center justify-center">
                      <img className="" src={location} alt="" />
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <hr className=" w-full md:w-1/4 h-2 rounded-full mt-3 bg-primary-500" />

            <div className="flex-col md:flex justify-between lg:flex-row mt-10">
              <article className="flex flex-col bg-white md:w-4/5 lg:w-1/3 rounded-lg">
                <div className=" w-full flex-col items-center justify-center">
                  <figure className=" w-1/3 mt-3 flex-col items-center justify-center ml-20">
                    <img src={profile_admin} alt="" />
                    <figcaption className=" flex justify-center">
                      <p className="text-center ml-20 font-bold mt-3">
                        Nyamiram
                      </p>
                    </figcaption>
                  </figure>
                </div>

                <div className="flex flex-row  w-5/6 items-center ">
                  <figure className="-mt-10">
                    <img src={vector} alt="" />
                  </figure>
                  <div className="flex flex-col mt-5 ml-3 ">
                    <p className="text-sky-500 font-bold">Route information</p>
                    <p>
                      Start: <span>Kn 766 st 4</span>{" "}
                    </p>
                    <p>
                      Finish: <span> Kn 674 st 3</span>
                    </p>
                    <p>
                      Distance: <span> 16 Km</span>{" "}
                    </p>
                    <p>
                      Duration: <span>16 Minutes</span>{" "}
                    </p>

                    <p className="text-sky-500 font-bold mt-3 mb-2">Locate</p>
                  </div>
                </div>
              </article>

              <div className=" h-96 w-full mt-5 shadow-2xl  bg-white md:w-4/5 lg:w-3/5  flex justify-center rounded-2xl ">
                <MapContainer
                  center={{ lat: -1.98507, lng: 30.031855 }}
                  zoom={13}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LocationMarker />
                </MapContainer>
              </div>
            </div>
          </div>
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
})(AddRoute);
