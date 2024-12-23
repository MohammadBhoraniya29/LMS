import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../../pages/client/contact'

const ContactRoute = () => {
    return (
        <Routes>
            <Route path='/contact-us' element={<Contact />} />
        </Routes>
    )
}  

export default ContactRoute
