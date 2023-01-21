import { useCallback, useEffect, useState } from 'react';

/**
 * 交差オブザーバーを使用する
 */
export const useIntersectionObserver = (
    target: HTMLElement | undefined | null,
    options?: IntersectionObserverInit
) => {
    const [isIntersection, seIsIntersection] = useState(false);

    /**
     * オブザーバーのハンドラ
     */
    const intersectionCallback = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                seIsIntersection(entry.isIntersecting);
            });
        },
        [seIsIntersection]
    );

    /**
     * オブザーバーを起動
     */
    useEffect(() => {
        if (!target) return;
        const observer = new IntersectionObserver(intersectionCallback, options);
        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, [target]);

    return isIntersection;
};
