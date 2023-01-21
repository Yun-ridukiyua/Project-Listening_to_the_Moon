import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Duration } from '../../features/Duration';
import { usePageVisibleState } from './hooks/useIsPageStable';

/**
 * 動画のスタイル
 */
const Video = styled.video`
    max-width: 100%;
    max-height: 100%;
    width: 100vw;
    height: 100vh;
`;

/**
 * 動画を表示するページを表すコンポーネント
 */
export const MoviePage = React.memo<{
    src: string;
    duration: Duration;
    loop?: boolean;
}>(({ src, duration, loop = false }) => {
    const isPlayingRef = useRef(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isVisible, isStable } = usePageVisibleState(videoRef.current);

    /**
     * 数値が大体一緒か
     */
    const isNearlyEqual = useCallback((aNumber: number, anotherNumber: number) => {
        return Math.abs(aNumber - anotherNumber) < 0.001;
    }, []);

    /**
     * 現在の動画時間を設定する
     */
    const setCurrentTime = useCallback(
        (seconds: number) => {
            const videoElement = videoRef.current;
            if (!videoElement) return;
            if (isNearlyEqual(videoElement.currentTime, seconds)) return;
            //console.log(`set time ${seconds}`);
            console.trace();
            videoElement.currentTime = seconds;
        },
        [videoRef]
    );

    /**
     * 動画を再生する
     */
    const play = useCallback(async () => {
        const videoElement = videoRef.current;
        const isPlaying = isPlayingRef.current;
        if (!videoElement || isPlaying) return;
        isPlayingRef.current = true;
        await videoElement.play().then(() => (isPlayingRef.current = false));
    }, [videoRef, isPlayingRef]);

    /**
     * 動画を停止する
     */
    const pause = useCallback(() => {
        const videoElement = videoRef.current;
        if (!videoElement || isPlayingRef.current) return;
        videoElement.pause();
        console.log("paused");
    }, [videoRef, isPlayingRef]);

    /**
     * 動画の時間が変更された時のハンドラ
     */
    const onTimeUpdateHandler = useCallback(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;
        const currentTime = videoElement.currentTime;
        if (currentTime >= duration.end) {
            //console.log(`time over ${currentTime} ${duration.end}`);
            //console.trace();
            if (loop) {
                setCurrentTime(duration.start);
            } else {
                if (!isNearlyEqual(currentTime, duration.end)) {
                    setCurrentTime(duration.end);
                }
                pause();
            }
        }
    }, [videoRef, duration, setCurrentTime, pause]);

    /**
     * 動画の再生時間を監視する
     */
    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;
        const abortController = new AbortController();
        videoElement.addEventListener("timeupdate", onTimeUpdateHandler, {
            signal: abortController.signal,
        });

        return () => {
            abortController.abort();
        };
    }, [videoRef, onTimeUpdateHandler]);

    /**
     * ページが現在表示されているなら再生し、それ以外なら開始秒数に戻し停止。
     * isVisibleは消してはいけない
     */
    useEffect(() => {
        if (isStable) {
            setCurrentTime(duration.start);
            play();
        } else {
            setCurrentTime(duration.start);
            pause();
        }
    }, [isVisible, isStable, duration, pause, play, setCurrentTime]);

    return <Video ref={videoRef} src={src} preload="auto"></Video>;
});
