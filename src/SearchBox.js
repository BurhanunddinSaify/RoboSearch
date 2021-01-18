import React from "react"

const Searchbox = ({searchfield, searchChange}) =>{
    return (
        <div className="pa2">
            <input classname="pa3 ba bg-lightest-blue "type="search" placeholder="Search Your Robot" onChange={searchChange}/>
        </div>
        
    )
}
export default Searchbox