import React from 'react'
import { useContext } from 'react'
import { namecontext } from '../../context/name'
export default function Home() {

    const {name,setname}=useContext(namecontext)
    return <>
        <div style={{ marginLeft: "40px" }}>
            <p>{name}</p>
            <button
                className="btn btn-success"
                onClick={() => {
                    setname((name == "Ezz") ? "Amer" : "Ezz")
                }}
            >
                change name with context
            </button>
        </div>
    </>
}