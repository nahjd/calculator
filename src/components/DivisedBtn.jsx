import React from 'react'

const DivisedBtn = ({inputbir,setinputbir,setinputiki, inputiki,result,setresult}) => {
   

  return (
    <>
    <input type="submit" value="Bölme" id="divised" onClick={()=> setresult(Number (inputbir)/Number(inputiki))}/>
    </>
  )
}

export default DivisedBtn;

