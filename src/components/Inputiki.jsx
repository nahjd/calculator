import React from 'react'

const Inputiki = ({inputbir,setinputbir,setinputiki, inputiki,result,setresult}) => {
  return (
    <>
    <div className="container">
         <form >
            <label htmlFor="ikincieded" id='bir'>ikinci eded</label>
        <input
          onChange= {(e) => {setinputiki(e.target.value)}}
          placeholder="enter number "
          type="number"
          id='iki'
        />
      </form>
      </div>
    </>
  )
}

export default Inputiki;