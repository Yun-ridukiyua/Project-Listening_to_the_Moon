import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SwiperCore, { EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

import { usePageVisibleState } from '../book-page/hooks/useIsPageStable';

/**
 * タップして次のページに遷移するためのコントローラ
 */
export const TapController = React.memo<{ children?: ReactNode }>(({ children }) => {
    const parentSwiper = useSwiper(); //親のswiper(スライド遷移)
    const { isNext, isPrev } = useSwiperSlide(); //親のswiperから見て次(前)かどうか。子は関係ない。

    const [swiper, setSwiper] = useState<SwiperCore>(); //タップして遷移するswiper
    const pages = useMemo(
        () =>
            React.Children.toArray(children).map((element) => (
                <SwiperSlide key={`Tap Slide ${Math.random()}`}>{element}</SwiperSlide>
            )),
        [children]
    );
    const { isStable } = usePageVisibleState(swiper ? swiper.el : null);
    const abortControllerRef = useRef<AbortController>(new AbortController());

    /**
     * クリックした時の処理
     * @param event マウスイベント
     */
    const onClickHandler = useCallback(
        (event: MouseEvent) => {
            const target = event.currentTarget;
            if (!swiper) return;
            if (!(target instanceof HTMLElement)) return;
            const clientWidth = target.clientWidth;
            const offsetX = event.offsetX;

            const leftMax = clientWidth / 5;
            const rightMin = clientWidth - leftMax;

            if (offsetX < leftMax) {
                // go to next
                if (swiper.isEnd) {
                    parentSwiper.slideNext();
                    parentSwiper.allowTouchMove = true;
                    parentSwiper.update();
                    return;
                }
                swiper.slideNext(0);
            }
            if (offsetX > rightMin) {
                // go to previous
                if (swiper.isBeginning) {
                    parentSwiper.slidePrev();
                    parentSwiper.allowTouchMove = true;
                    parentSwiper.update();
                    return;
                }
                swiper.slidePrev(0);
            }
        },
        [swiper, parentSwiper]
    );

    /**
     * 初期化処理
     */
    useEffect(() => {
        abortControllerRef.current.abort();
        if (isStable && swiper) {
            parentSwiper.allowTouchMove = false;
            abortControllerRef.current = new AbortController();
            swiper.el.addEventListener("click", onClickHandler, {
                signal: abortControllerRef.current.signal,
            });
        } else {
            abortControllerRef.current.abort();
        }
        return () => {
            abortControllerRef.current.abort();
        };
    }, [isStable, swiper, abortControllerRef, onClickHandler]);

    useEffect(() => {
        if (!swiper) return;
        if (isNext) {
            swiper.slideTo(0);
        } else if (isPrev) {
            swiper.slideTo(pages.length - 1);
        }
    }, [isNext, isPrev, swiper, pages]);

    return (
        <Swiper effect="fade" allowTouchMove={false} modules={[EffectFade]} onSwiper={setSwiper}>
            {pages}
        </Swiper>
    );
});
