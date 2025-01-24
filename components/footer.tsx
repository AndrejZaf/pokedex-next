import React from 'react'

const Footer = () => {
    return (
        <div className="container mx-auto">
            <hr/>
            <div className="flex justify-between items-center mt-2 py-1">
                <div>
                    <img alt="Pokemon Logo" src="/pokemon-logo.png" className="max-w-[50%]"/>
                </div>
                <div>
                    <img alt="Pokeball Logo" src="/pokeball-logo.svg" className="h-11"/>
                </div>
            </div>
        </div>
    )
}
export default Footer
