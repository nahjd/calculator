import React from 'react'

const SubBtn = ({inputbir,setinputbir,setinputiki, inputiki,result,setresult}) => {
   

  return (
    <>
   <input type="submit" value="Cixma" id="sub" onClick={() => setresult(Number (inputbir)-Number(inputiki))}/>
    </>
  )
}

export default SubBtn;

