import React, { ReactNode, useMemo } from 'react';

import aVideo from '../../../assets/video/c4_birth.mp4';
import { Duration } from '../../../features/Duration';
import { MoviePage } from '../../book-page/MoviePage';

/**
 * チャプター4のページを使用する
 */
export const useChapter4 = () => {
    return useMemo(() => {
        const pages = new Array<ReactNode>();

        //小さな鼓動が
        pages.push(<MoviePage src={aVideo} duration={new Duration(0, 4)}></MoviePage>);

        //君は深い
        pages.push(<MoviePage src={aVideo} duration={new Duration(7, 11)}></MoviePage>);

        //藍色は明けの色
        pages.push(<MoviePage src={aVideo} duration={new Duration(14, 18)}></MoviePage>);

        //十二の星を冠むるひとよ
        pages.push(<MoviePage src={aVideo} duration={new Duration(20, 24)}></MoviePage>);

        //大きな鼓動が
        pages.push(<MoviePage src={aVideo} duration={new Duration(26, 30)}></MoviePage>);

        //月が開く
        pages.push(<MoviePage src={aVideo} duration={new Duration(34, 47)}></MoviePage>);

        return pages;
    }, []);
};
