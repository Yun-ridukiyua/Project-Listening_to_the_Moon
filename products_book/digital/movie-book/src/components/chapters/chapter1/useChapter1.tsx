import React, { ReactNode, useMemo } from 'react';

import aVideo from '../../../assets/video/death.mp4';
import { Duration } from '../../../features/Duration';
import { MoviePage } from '../../book-page/MoviePage';
import { TapController } from '../../controller/TapController';

export const useChapter1 = () => {
    return useMemo(() => {
        const pages = new Array<ReactNode>();

        pages.push(
            <TapController>
                {/**こんにちは わたくしと*/}
                <MoviePage src={aVideo} duration={new Duration(0, 5)}></MoviePage>
                {/** 私の周りを*/}
                <MoviePage src={aVideo} duration={new Duration(6, 11)}></MoviePage>
                {/** 夜になると*/}
                <MoviePage src={aVideo} duration={new Duration(12, 17)}></MoviePage>
                {/** 朝になると*/}
                <MoviePage src={aVideo} duration={new Duration(18, 22)}></MoviePage>
                {/** 手に蝋燭*/}
                <MoviePage src={aVideo} duration={new Duration(23, 28)}></MoviePage>
                {/** そうか、全て*/}
                <MoviePage src={aVideo} duration={new Duration(29, 35)}></MoviePage>
            </TapController>
        );

        return pages;
    }, []);
};
