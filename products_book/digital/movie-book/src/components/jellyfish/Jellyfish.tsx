import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { animated, useSpring } from '@react-spring/web';

const StyledIamge = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: 100vh;
    position: absolute;
    z-index: 100;
    pointer-events: "auto";
    cursor: pointer;
`;

/**
 * くらげを表すコンポーネント
 */
export const Jellyfish = React.memo<{ src: string; children?: ReactNode }>(({ src, children }) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context2D, setContext2D] = useState<CanvasRenderingContext2D>();
    const [rate, setRate] = useState({ x: 0, y: 0 });

    const [isAnimating, setIsAnimating] = useState(false);
    const [spring, springAPI] = useSpring(() => ({
        from: {
            x: 0,
            y: 0,
        },
    }));

    /**
     * canvasでの画像読み込み
     */
    useEffect(() => {
        const canvasElement = canvasRef.current;
        const imageElement = imageRef.current;
        if (!canvasElement || !imageElement) return;
        const context = canvasElement.getContext("2d", { willReadFrequently: true });
        if (!context) return;
        setContext2D(context);
        const aImage = new Image();
        aImage.src = src;
        aImage.crossOrigin = "anonymous";
        aImage.onload = () => {
            context.drawImage(aImage, 0, 0);
            setRate({
                x: aImage.width / imageElement.clientWidth,
                y: aImage.height / imageElement.clientHeight,
            });
        };
    }, [imageRef, canvasRef, src, setContext2D, setRate]);

    /**
     * ランダムな整数を取得する
     */
    const getRandomInt = useCallback((min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }, []);

    /**
     * クラゲのアニメーションを開始する
     */
    const onAnimationStart = useCallback(() => {
        springAPI.start({
            from: { x: 0 },
            to: async (next, cancel) => {
                await next({ x: getRandomInt(-30, 30), y: getRandomInt(-30, 30) });
                await next({ x: getRandomInt(-30, 30), y: getRandomInt(-30, 30) });
                await next({ x: getRandomInt(-30, 30), y: getRandomInt(-30, 30) });
                await next({ x: 0, y: 0 });
            },
            config: {
                duration: 2000,
            },
            onStart: () => {
                setIsAnimating(true);
            },
            onRest: () => {
                setIsAnimating(false);
            },
        });
    }, [springAPI, setIsAnimating]);

    /**
     * 画像をタップした時のハンドラ
     */
    const tapImageHandler = useCallback(
        (offsetX: number, offsetY: number) => {
            if (!context2D) return;
            const imageX = Math.round(offsetX * rate.x);
            const imageY = Math.round(offsetY * rate.y);
            //console.log(context2D.getImageData(imageX, imageY, 1, 1).data[3]);
            if (context2D.getImageData(imageX, imageY, 1, 1).data[3] > 0) {
                console.log("clicked");
                onAnimationStart();
            }
        },
        [context2D, onAnimationStart, rate]
    );

    /**
     * クリックした時の処理
     */
    const onClickHandler = useCallback(
        (event: MouseEvent) => {
            if (isAnimating) return;
            if (!(event.target instanceof HTMLImageElement)) return;
            tapImageHandler(event.offsetX, event.offsetY);
        },
        [isAnimating, onAnimationStart, tapImageHandler]
    );

    /**
     * タップした時の処理
     */
    const onTapHandler = useCallback(
        (event: TouchEvent) => {
            if (isAnimating) return;
            if (!(event.target instanceof HTMLImageElement)) return;
            const rect = event.target.getBoundingClientRect();
            const offsetX = event.touches[0].clientX - window.pageXOffset - rect.left;
            const offsetY = event.touches[0].clientY - window.pageYOffset - rect.top;
            tapImageHandler(offsetX, offsetY);
        },
        [isAnimating, onAnimationStart, tapImageHandler]
    );

    /**
     * 画像のクリック判定
     */
    useEffect(() => {
        const imageElement = imageRef.current;
        if (!imageElement) return;
        const abortController = new AbortController();
        imageElement.addEventListener("click", onClickHandler, {
            signal: abortController.signal,
        });
        imageElement.addEventListener("touchend", onTapHandler, {
            signal: abortController.signal,
        });

        return () => {
            abortController.abort();
        };
    }, [context2D, onClickHandler, onTapHandler, imageRef]);

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                }}
                onClick={(event) => onClickHandler(event.nativeEvent)}
            >
                <animated.div
                    style={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        ...spring,
                    }}
                >
                    <StyledIamge ref={imageRef} src={src}></StyledIamge>
                </animated.div>
                {children}
            </div>

            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
            >
                <canvas ref={canvasRef} width={10000} height={10000} hidden></canvas>
            </div>
        </>
    );
});
