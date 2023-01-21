import React, { useMemo } from 'react';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useChapter1 } from '../chapters/chapter1/useChapter1';
import { useChapter2 } from '../chapters/chapter2/useChapter2';

/**
 * 動く本を表すコンポーネント
 */
export const MovieBook = React.memo(() => {
    const chapter1 = useChapter1();
    const chapter2 = useChapter2();

    const slides = useMemo(() => {
        const pages = chapter1.concat(chapter2);
        return pages.map((page, index) => (
            <SwiperSlide virtualIndex={index} key={`Slide ${index}`}>
                {page}
            </SwiperSlide>
        ));
    }, []);

    return (
        <Swiper
            dir="rtl"
            slidesPerView={1}
            style={{ width: "100%", height: "100%" }}
            virtual
            modules={[Virtual]}
        >
            {slides}
        </Swiper>
    );
});
