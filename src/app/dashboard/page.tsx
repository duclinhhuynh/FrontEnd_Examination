import React from 'react'
import SideBar from './SideBar'
import ContentArea from './ContentArea'
const page = () => {
    return (
        <div>
            <div className='flex'>
                <SideBar />
                <ContentArea />
            </div>
        </div>
    )
}

export default page