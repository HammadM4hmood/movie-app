/** Christopher Findlay, Hammad Mahmood, Samuel Kyle Yung, Gurnoor Singh | April 1st, 2025
 * Assignment 3 - Full-Stack Web Application
 * 
 * This compenent is the footer component. It displays contact information of the company such information
 * being email and phone number. It also displays the name of the company, namely "The Internet Movies Rental Company".
 * It also contains copyright note saying that all rights are reserved. This is put into the layout.js.
 * 
 */

import React from 'react'

const Footer = () => {
  return (
    <div className='bg-amber-100 border-2 border-solid'>
        <p className='py-5 text-center'>The Internet Movies Rental Company</p>
        <p className='text-center'>Contact Us: IMR@gmail.com 1-800-123-4567</p>
        <p className='py-5 text-center'>&copy; All Rights Reserved</p>
    </div>
  )
}

export default Footer