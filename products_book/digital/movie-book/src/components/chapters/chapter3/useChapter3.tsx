import React, { ReactNode, useMemo } from 'react';

import titleImage from '../../../assets/image/chapter3/chapter_cover_c3.png';
import aVideo from '../../../assets/video/c3_season.mp4';
import { Duration } from '../../../features/Duration';
import { ImagePage } from '../../book-page/ImagePage';
import { MoviePage } from '../../book-page/MoviePage';

/**
 * チャプター3のページを使用する
 */
export const useChapter3 = () => {
    return useMemo(() => {
        const pages = new Array<ReactNode>();

        /**表紙*/
        pages.push(<ImagePage src={titleImage}></ImagePage>);

        /**ふゆ */
        pages.push(<MoviePage src={aVideo} duration={new Duration(0, 4)}></MoviePage>);

        /**静寂〜 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(6, 8)}></MoviePage>);

        /**冬は寒くて〜 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(10, 12)}></MoviePage>);

        /**振り落ちる */
        pages.push(<MoviePage src={aVideo} duration={new Duration(14, 15)}></MoviePage>);

        /**深として */
        pages.push(<MoviePage src={aVideo} duration={new Duration(18, 19)}></MoviePage>);

        /**雨粒を */
        pages.push(<MoviePage src={aVideo} duration={new Duration(22, 23)}></MoviePage>);

        /**なにものが */
        pages.push(<MoviePage src={aVideo} duration={new Duration(26, 27)}></MoviePage>);

        /**ぱっつりと */
        pages.push(<MoviePage src={aVideo} duration={new Duration(29, 30)}></MoviePage>);

        /**冷ややかに */
        pages.push(<MoviePage src={aVideo} duration={new Duration(33, 34)}></MoviePage>);

        /**梅薫る */
        pages.push(<MoviePage src={aVideo} duration={new Duration(38, 39)}></MoviePage>);

        /**はる */
        pages.push(<MoviePage src={aVideo} duration={new Duration(42, 43)}></MoviePage>);

        /**見事なまでに */
        pages.push(<MoviePage src={aVideo} duration={new Duration(51, 52)}></MoviePage>);

        /**ちらちらと */
        pages.push(<MoviePage src={aVideo} duration={new Duration(55, 56)}></MoviePage>);

        /**花房が */
        pages.push(<MoviePage src={aVideo} duration={new Duration(59, 59)}></MoviePage>);

        /**揚々と */
        pages.push(<MoviePage src={aVideo} duration={new Duration(62, 62)}></MoviePage>);

        /**驚く間に */
        pages.push(<MoviePage src={aVideo} duration={new Duration(66, 66)}></MoviePage>);

        /** 桜越え */
        pages.push(<MoviePage src={aVideo} duration={new Duration(71, 71)}></MoviePage>);

        /**此花が */
        pages.push(<MoviePage src={aVideo} duration={new Duration(74, 74)}></MoviePage>);

        /**望むまで */
        pages.push(<MoviePage src={aVideo} duration={new Duration(78, 78)}></MoviePage>);

        /**つゆ */
        pages.push(<MoviePage src={aVideo} duration={new Duration(82, 82)}></MoviePage>);

        /**じんわりと */
        pages.push(<MoviePage src={aVideo} duration={new Duration(87, 87)}></MoviePage>);

        /**わたしたちは */
        pages.push(<MoviePage src={aVideo} duration={new Duration(92, 92)}></MoviePage>);

        /**雨浸る */
        pages.push(<MoviePage src={aVideo} duration={new Duration(97, 97)}></MoviePage>);

        /**羽広げ */
        pages.push(<MoviePage src={aVideo} duration={new Duration(100, 100)}></MoviePage>);

        /**泣いていた */
        pages.push(<MoviePage src={aVideo} duration={new Duration(104, 104)}></MoviePage>);

        /**大地の */
        pages.push(<MoviePage src={aVideo} duration={new Duration(108, 108)}></MoviePage>);

        /**削ぐやうに */
        pages.push(<MoviePage src={aVideo} duration={new Duration(112, 112)}></MoviePage>);

        /**迷いなく */
        pages.push(<MoviePage src={aVideo} duration={new Duration(116, 116)}></MoviePage>);

        /**なつ */
        pages.push(<MoviePage src={aVideo} duration={new Duration(120, 120)}></MoviePage>);

        /**押し寄せる */
        pages.push(<MoviePage src={aVideo} duration={new Duration(126, 126)}></MoviePage>);

        /**総天然色 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(130, 130)}></MoviePage>);

        /**振り向いた */
        pages.push(<MoviePage src={aVideo} duration={new Duration(134, 134)}></MoviePage>);

        /**風鈴に */
        pages.push(<MoviePage src={aVideo} duration={new Duration(138, 138)}></MoviePage>);

        /**毎日を */
        pages.push(<MoviePage src={aVideo} duration={new Duration(142, 142)}></MoviePage>);

        /**霧纏う */
        pages.push(<MoviePage src={aVideo} duration={new Duration(146, 146)}></MoviePage>);

        /**わたくしの */
        pages.push(<MoviePage src={aVideo} duration={new Duration(150, 150)}></MoviePage>);

        /**あき */
        pages.push(<MoviePage src={aVideo} duration={new Duration(153, 153)}></MoviePage>);

        /**赤緑 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(159, 159)}></MoviePage>);

        /**眼前に */
        pages.push(<MoviePage src={aVideo} duration={new Duration(163, 163)}></MoviePage>);

        /**舞い込んで */
        pages.push(<MoviePage src={aVideo} duration={new Duration(167, 167)}></MoviePage>);

        /**夕方 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(170, 170)}></MoviePage>);

        /**一瞬の */
        pages.push(<MoviePage src={aVideo} duration={new Duration(174, 174)}></MoviePage>);

        /**ふゆ */
        pages.push(<MoviePage src={aVideo} duration={new Duration(179, 179)}></MoviePage>);

        /**雨降って */
        pages.push(<MoviePage src={aVideo} duration={new Duration(184, 184)}></MoviePage>);

        /**色々な */
        pages.push(<MoviePage src={aVideo} duration={new Duration(189, 189)}></MoviePage>);

        /**灰色 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(193, 193)}></MoviePage>);

        /**こつこつと */
        pages.push(<MoviePage src={aVideo} duration={new Duration(197, 197)}></MoviePage>);

        /**息のおと */
        pages.push(<MoviePage src={aVideo} duration={new Duration(200, 200)}></MoviePage>);

        /**声さえも */
        pages.push(<MoviePage src={aVideo} duration={new Duration(204, 204)}></MoviePage>);

        /**「」 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(208, 208)}></MoviePage>);

        /**空を */
        pages.push(<MoviePage src={aVideo} duration={new Duration(213, 213)}></MoviePage>);

        /**その気になれば */
        pages.push(<MoviePage src={aVideo} duration={new Duration(217, 217)}></MoviePage>);

        /**何処までも */
        pages.push(<MoviePage src={aVideo} duration={new Duration(222, 222)}></MoviePage>);

        /**目を閉じて */
        pages.push(<MoviePage src={aVideo} duration={new Duration(226, 226)}></MoviePage>);

        /**あの頃から */
        pages.push(<MoviePage src={aVideo} duration={new Duration(230, 230)}></MoviePage>);

        /**砂の上 */
        pages.push(<MoviePage src={aVideo} duration={new Duration(235, 235)}></MoviePage>);

        return pages;
    }, []);
};
