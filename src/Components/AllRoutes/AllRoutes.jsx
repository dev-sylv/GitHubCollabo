import React from 'react'
import { useRoutes } from "react-router-dom"

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomeScreen />
        }
    ])

  return element
}

export default AllRoutes