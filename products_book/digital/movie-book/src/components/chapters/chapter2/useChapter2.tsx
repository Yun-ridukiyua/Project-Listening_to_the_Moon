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
                {/**わからないはずの君を待っている */}
                <MoviePage src={aVideo} duration={new Duration(0, 3)}></MoviePage>
                {/**歌うように、 */}
                <MoviePage src={aVideo} duration={new Duration(4, 5)}></MoviePage>
                {/**眠るように */}
                <MoviePage src={aVideo} duration={new Duration(6, 8)}></MoviePage>
                {/**もう残りもないけれど */}
                <MoviePage src={aVideo} duration={new Duration(8, 20)}></MoviePage>
            </TapController>
        );

        //通り道が遠り道
        pages.push(
            <TapController>
                {/**通り道が遠り道〜 */}
                <MoviePage src={aVideo} duration={new Duration(22, 54)} loop></MoviePage>
            </TapController>
        );

        //もう二度と会えない
        pages.push(
            <TapController>
                {/**もう二度と会えない */}
                <MoviePage src={aVideo} duration={new Duration(56, 67)}></MoviePage>
            </TapController>
        );

        // さようなら
        pages.push(
            <TapController>
                {/**さようなら等 */}
                <MoviePage src={aVideo} duration={new Duration(68, 77)}></MoviePage>
            </TapController>
        );

        // 雨に声をかけて
        // 動画を止める関係上「揺れる」が毎回停止します。
        pages.push(
            <TapController>
                {/**雨に声をかけて */}
                <MoviePage src={aVideo} duration={new Duration(78, 80)}></MoviePage>
                {/**揺れる */}
                <MoviePage src={aVideo} duration={new Duration(81, 82)}></MoviePage>
                {/**木の葉はうたう */}
                <MoviePage src={aVideo} duration={new Duration(83, 84)}></MoviePage>
                {/**落ちて集まって離れて重くなる */}
                <MoviePage src={aVideo} duration={new Duration(85, 88)}></MoviePage>
                {/**どうかこのままで */}
                <MoviePage src={aVideo} duration={new Duration(88, 90)}></MoviePage>
            </TapController>
        );

        //夜の星屑
        pages.push(
            <TapController>
                {/**夜の星屑をあつめる〜 */}
                <MoviePage src={aVideo} duration={new Duration(91, 92)}></MoviePage>
                {/**画像を表示 */}
                <MoviePage src={aVideo} duration={new Duration(93, 115)}></MoviePage>
            </TapController>
        );

        //うつくしい海
        pages.push(
            <TapController>
                {/**うつくしい海のそばで歌をうたいあげよう */}
                <MoviePage src={aVideo} duration={new Duration(116, 121)}></MoviePage>
                {/**一滴 */}
                <MoviePage src={aVideo} duration={new Duration(122, 126)}></MoviePage>
                {/**一滴 */}
                <MoviePage src={aVideo} duration={new Duration(127, 129)}></MoviePage>
                {/**長くつみあがるまで、ずっとずっと */}
                <MoviePage src={aVideo} duration={new Duration(130, 141)}></MoviePage>
            </TapController>
        );

        //わからないはずの
        pages.push(
            <TapController>
                {/**わからないはずの */}
                <MoviePage src={aVideo} duration={new Duration(145, 147)}></MoviePage>
                {/**君をまっている */}
                <MoviePage src={aVideo} duration={new Duration(148, 148)}></MoviePage>
                {/**歌うように、 */}
                <MoviePage src={aVideo} duration={new Duration(149, 151)}></MoviePage>
                {/**眠るように、 */}
                <MoviePage src={aVideo} duration={new Duration(152, 160)}></MoviePage>
                {/**もう残りもないけれど */}
                <MoviePage src={aVideo} duration={new Duration(162, 166)}></MoviePage>
                {/**もう残りもないけれどが消える */}
                <MoviePage src={aVideo} duration={new Duration(167, 174)}></MoviePage>
            </TapController>
        );

        //もうこれでいいのなら
        pages.push(
            <TapController>
                {/**これでもいいのなら〜 */}
                <MoviePage src={aVideo} duration={new Duration(175, 185)}></MoviePage>
                {/**これでもいいのなら〜 が消える*/}
                <MoviePage src={aVideo} duration={new Duration(186, 195)}></MoviePage>
            </TapController>
        );
        return pages;
    }, []);
};
