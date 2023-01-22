import React, { ReactNode, useMemo } from 'react';

import jellyfish1 from '../../../assets/image/chapter4/jellyfish_1.png';
import jellyfish2 from '../../../assets/image/chapter4/jellyfish_2.png';
import jellyfish3 from '../../../assets/image/chapter4/jellyfish_3.png';
import jellyfish4 from '../../../assets/image/chapter4/jellyfish_4.png';
import jellyfish5 from '../../../assets/image/chapter4/jellyfish_5.png';
import aVideo from '../../../assets/video/c4_birth.mp4';
import { Duration } from '../../../features/Duration';
import { MoviePage } from '../../book-page/MoviePage';
import { Jellyfish } from '../../jellyfish/Jellyfish';

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
        pages.push(
            <MoviePage src={aVideo} duration={new Duration(33, 39)}>
                <Jellyfish src={jellyfish1}>
                    <Jellyfish src={jellyfish2}>
                        <Jellyfish src={jellyfish3}>
                            <Jellyfish src={jellyfish4}>
                                <Jellyfish src={jellyfish5}></Jellyfish>
                            </Jellyfish>
                        </Jellyfish>
                    </Jellyfish>
                </Jellyfish>
            </MoviePage>
        );

        return pages;
    }, []);
};
