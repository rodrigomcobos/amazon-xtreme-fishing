import React from 'react'
import HighlightBackgroundImg from '../../../../assets/images/HighlightBackgroundImg.png';

const Highlight = () => {
    return (
        <div className="relative border-b-8 border-tertiary">
            <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat"
                style={{
                    backgroundImage: `url(${HighlightBackgroundImg})`,
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/5 to-transparent" />

            <div className="relative px-4 pt-16 sm:pt-10 pb-[24rem] sm:pb-[30rem]">
                <p className="text-sm sm:text-base mb-1 mx-auto text-center font-dmsans uppercase">
                    Santa Isabel of Rio Negro
                </p>
                <hr className='w-[55%] sm:w-[18%] border-t-2 border-fifth mb-3 mx-auto' />
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-roxale uppercase text-center text-primary mb-4">
                    Land of Trophy Peacock Bass
                </h2>
                <p className=" max-w-3xl mx-auto text-center font-dmsans text-sm sm:text-base text-gray-700 drop-shadow-[0_0_10px_rgba(255,255,255,2)]">
                    A groundbreaking concept combining luxury, regal comfort, and an unparalleled Amazon adventure. Discover the record waters of Uneuixi, Tea, Aiuana, Rio Preto, and the tributaries of the Rio Negro, a Peacock Bass fishing experience that must be lived firsthand!
                </p>
            </div>
        </div>
    )
}

export default Highlight