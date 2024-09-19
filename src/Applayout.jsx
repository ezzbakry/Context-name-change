import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Applayout(){
    return <>
    <div style={{marginBottom:"40px"}}>
        Hello from applayout
    </div>
    <Outlet></Outlet>
    </>

}