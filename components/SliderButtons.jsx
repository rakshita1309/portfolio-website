'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

function SliderButtons ({containerStyle, buttonsStyle, iconsStyle}) {
    const swiper = useSwiper();
    return(
        <div className={containerStyle}>
            <button 
            className={buttonsStyle}
            onClick={() => swiper.slidePrev()}
            >
                <PiCaretLeftBold className={iconsStyle} />
            </button>
            <button 
            className={buttonsStyle}
            onClick={() => swiper.slideNext()}
            >
                <PiCaretRightBold className={iconsStyle} />
            </button>
        </div>
    );
}

export default SliderButtons;