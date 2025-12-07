import React from 'react'
import Image from "next/image";

export default function Sub_Header() {
    return (
        <div className='container'>
            <div className='chavva_logo_main'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <Image
                            src="/images/home-images/tharun-main.svg"
                            alt="Logo"
                            width={220}
                            height={220}
                        />
                    </div>
                    <div className='col-lg-8 col-md-6'>
                        <div className='sub-left-header'>
                            <a href="#projects" className="nav-link d-flex align-items-center gap-2">
                                Projects
                            </a>
                            <a href="#contact" className="nav-link d-flex align-items-center gap-2">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
