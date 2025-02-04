import React, { createContext, useState } from 'react';
export const DataContext = createContext();

export let user={
  data: null,
    mime_type: null,
   imgUrl:null
}
export let prevUser={
  data: null,
    mime_type: null,
    prompt: null,
    imgUrl:null
}

function UserContext({ children }) {
  let [startRes, setStartRes] = useState(false);
  let [popUp, setPopUp] = useState(false);
  let[input,setInput]=useState("")
  let[feature,setFeature]=useState("chat")
  let [showResult,setShowResult]=useState("")
  let[prevFeature,setPrevFeature]=useState("chat")
  let [genImgUrl,setGenImgUrl]=useState("")
  let value = {
    startRes, 
    setStartRes,
    popUp, 
    setPopUp,
    input,setInput,
    feature,setFeature,
    showResult,setShowResult,
    prevFeature,setPrevFeature,
    genImgUrl,setGenImgUrl
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export default UserContext;