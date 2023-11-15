import React from 'react'

const Inputbir = ({inputbir,setinputbir,setinputiki, inputiki,result,setresult}) => {
  return (
    <>
    <div className="calculator">
        <h1>Calculator</h1>
    </div>
    <div className="container">
         <form >
            <label htmlFor="birincieded" id='bir'>birinci eded</label>
        <input
          onChange= {(e) => {setinputbir(e.target.value)}}
          placeholder="enter number "
          type="number"
          id="iki"
        />
      </form>
      </div>
    </>
  )
}

export default Inputbir