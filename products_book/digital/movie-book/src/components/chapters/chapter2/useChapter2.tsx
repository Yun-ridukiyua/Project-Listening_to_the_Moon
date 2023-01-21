import React, { ReactNode, useMemo } from 'react';

import aVideo from '../../../assets/video/c2_stagnation.mp4';
import { Duration } from '../../../features/Duration';
import { MoviePage } from '../../book-page/MoviePage';
import { TapController } from '../../controller/TapController';

/**
 * チャプター2のページを使用する
 */
export const useChapter2 = () => {
    return useMemo(() => {
        const pages = new Array<ReactNode>();

        //わからないはずの君を待っている
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(0, 3)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(4, 5)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(6, 8)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(8, 20)}></MoviePage>
            </TapController>
        );

        //通り道が遠り道
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(22, 54)} loop></MoviePage>
            </TapController>
        );

        //もう二度と会えない
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(56, 67)}></MoviePage>
            </TapController>
        );

        // さようなら
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(68, 77)}></MoviePage>
            </TapController>
        );

        // 雨に声をかけて
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(78, 80)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(81, 82)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(83, 84)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(85, 88)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(88, 90)}></MoviePage>
            </TapController>
        );

        //夜の星屑
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(91, 92)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(93, 115)}></MoviePage>
            </TapController>
        );

        //うつくしい海
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(116, 121)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(122, 126)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(127, 129)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(130, 141)}></MoviePage>
            </TapController>
        );

        //わからないはずの
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(145, 147)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(148, 148)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(149, 151)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(152, 160)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(162, 166)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(167, 174)}></MoviePage>
            </TapController>
        );

        //もうこれでいいのなら
        pages.push(
            <TapController>
                <MoviePage src={aVideo} duration={new Duration(175, 185)}></MoviePage>
                <MoviePage src={aVideo} duration={new Duration(186, 195)}></MoviePage>
            </TapController>
        );
        return pages;
    }, []);
};
