import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { MovieBook } from './components/movie-book/MovieBook';

/**
 * アプリケーションのエントリーポイント
 */
const App = React.memo(() => {
    return <MovieBook></MovieBook>;
});

const container = document.getElementById("root") ?? document.body;
createRoot(container).render(<App></App>);
