import React, { ReactNode, useMemo } from 'react';

import titleImage from '../../../assets/image/chapter1/chapter_cover_c1.png';
import aVideo from '../../../assets/video/c1_death.mp4';
import { Duration } from '../../../features/Duration';
import { ImagePage } from '../../book-page/ImagePage';
import { MoviePage } from '../../book-page/MoviePage';
import { TapController } from '../../controller/TapController';

/**
 * チャプター1のページを使用する
 */
export const useChapter1 = () => {
    return useMemo(() => {
        const pages = new Array<ReactNode>();

        /**表紙*/
        pages.push(<ImagePage src={titleImage}></ImagePage>);

        pages.push(
            <TapController>
                {/**こんにちは わたくしと*/}
                <MoviePage src={aVideo} duration={new Duration(0, 4)}></MoviePage>
                {/** わたしの周りを*/}
                <MoviePage src={aVideo} duration={new Duration(6, 10)}></MoviePage>
                {/** 夜になると*/}
                <MoviePage src={aVideo} duration={new Duration(12, 16)} loop></MoviePage>
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
