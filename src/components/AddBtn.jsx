import React from 'react'

const AddBtn = ({inputbir,setinputbir,setinputiki, inputiki,result,setresult}) => {
   

  return (
    <>
    <input type="submit" value="Topla" id="add" onClick={() => setresult(Number (inputbir)+Number(inputiki))}/>
    </>
  )
}

export default AddBtn

