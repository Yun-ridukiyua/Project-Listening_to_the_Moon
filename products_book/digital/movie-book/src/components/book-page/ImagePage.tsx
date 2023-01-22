import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: 100vh;
`;

/**
 * 静止画を表示するページを表すコンポーネント
 */
export const ImagePage = React.memo<{ children: ReactNode; src: string }>(({ children, src }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={src}></Image>
            {children}
        </div>
    );
});
