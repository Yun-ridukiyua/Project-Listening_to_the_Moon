import React, { ReactNode, useMemo } from 'react';

import aVideo from '../../../assets/video/c1_death.mp4';
import { Duration } from '../../../features/Duration';
import { MoviePage } from '../../book-page/MoviePage';
import { TapController } from '../../controller/TapController';

/**
 * チャプター1のページを使用する
 */
export const useChapter1 = () => {
    return useMemo(() => {
        const pages = new Array<ReactNode>();

        pages.push(
            <TapController>
                {/**こんにちは わたくしと*/}
                <MoviePage src={aVideo} duration={new Duration(0, 5)}></MoviePage>
                {/** わたしの周りを*/}
                <MoviePage src={aVideo} duration={new Duration(6, 10)}></MoviePage>
                {/** 夜になると*/}
                <MoviePage src={aVideo} duration={new Duration(12, 16)}></MoviePage>
                {/** 朝になると*/}
                <MoviePage src={aVideo} duration={new Duration(18, 22)} loop></MoviePage>
                {/** 手に蝋燭*/}
                <MoviePage src={aVideo} duration={new Duration(24, 27)} loop></MoviePage>
                {/** そうか、全て*/}
                <MoviePage src={aVideo} duration={new Duration(29, 35)}></MoviePage>
            </TapController>
        );

        return pages;
    }, []);
};
