import React from 'react'

const Footer = () => {
        let d = new Date()
        return (
                <div className='flex justify-center items-center gap-2 bg-black w-full h-20 text-white'>
                        <div className='font-signature  text-4xl'>
                                Copyright © {d.getFullYear()}
                        </div>
                        


                </div>
        )
}

export default Footer
