import React from 'react'
import notfound from '../img/not-found.svg'
const NotFound = () => {
    return (
        <>
            <div className="error">
                <img src={notfound} alt="" height="100px" />
                <h2>No Data Found!</h2>
            </div>
        </>
    )
}

export default NotFound
