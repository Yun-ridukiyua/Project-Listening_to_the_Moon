import React, { useMemo } from 'react';
import { Lazy, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useChapter1 } from '../chapters/chapter1/useChapter1';
import { useChapter2 } from '../chapters/chapter2/useChapter2';
import { useChapter3 } from '../chapters/chapter3/useChapter3';
import { useChapter4 } from '../chapters/chapter4/useChapter4';

/**
 * 動く本を表すコンポーネント
 */
export const MovieBook = React.memo(() => {
    const chapter1 = useChapter1();
    const chapter2 = useChapter2();
    const chapter3 = useChapter3();
    const chapter4 = useChapter4();

    const slides = useMemo(() => {
        //const pages = chapter1; //chapter1だけ
        //const pages = chapter2; //chapter2だけ
        //const pages = chapter3; //chapter3だけ
        //const pages = chapter4; //chapter4だけ
        const pages = chapter1.concat(chapter2).concat(chapter3).concat(chapter4); //本番
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
            modules={[Virtual, Lazy]}
            threshold={10}
            preloadImages={true}
            lazy={{ loadPrevNext: true, loadPrevNextAmount: 2 }}
        >
            {slides}
        </Swiper>
    );
});
