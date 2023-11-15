import React from 'react'

const MultiplyBtn = ({inputbir,setinputbir,setinputiki, inputiki,result,setresult}) => {
   

  return (
    <>
    <input type="submit" value="Vurma" id="multy" onClick={() => setresult(Number (inputbir)*Number(inputiki))}/>
    </>
  )
}

export default MultiplyBtn ;

