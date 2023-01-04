import React from "react";
import Home from "../Home/Home";
import CreateCollection from "../CreateCollection/CreateCollection";
import ShowCollection from '../ShowCollection/ShowCollection'

const CollectionsDisplay = (props) => {

  return (
    <>
      <CreateCollection />
      <ShowCollection />
    </>
  )
};

export default CollectionsDisplay;