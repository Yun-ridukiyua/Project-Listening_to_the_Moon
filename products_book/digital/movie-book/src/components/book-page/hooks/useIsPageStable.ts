import { useSwiperSlide } from 'swiper/react';

import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

/**
 * ページが表示されており、かつ操作の途中ではないか
 */
export const usePageVisibleState = (pageElement: HTMLElement | undefined | null) => {
    const { isActive } = useSwiperSlide();
    const isVisible = useIntersectionObserver(pageElement, {
        threshold: 0.1,
    });
    const isAllVisible = useIntersectionObserver(pageElement, {
        threshold: 0.9,
    });

    return { isVisible: isVisible && isActive, isStable: isAllVisible && isActive };
};
