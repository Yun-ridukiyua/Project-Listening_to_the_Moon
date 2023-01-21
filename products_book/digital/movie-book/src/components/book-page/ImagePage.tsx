import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 100vw;
    height: 100vh;
`;

/**
 * 静止画を表示するページを表すコンポーネント
 */
export const ImagePage = React.memo<{ src: string }>(({ src }) => {
    return <img src={src}></img>;
});
