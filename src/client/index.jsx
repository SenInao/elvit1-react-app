import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './layout/Home';
import Quiz from './layout/quiz/Quiz'
import Fagdag from './layout/fagdagen/Fagdag'
import Snake from "./layout/snake/Snake"

import "./index.scss"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/fagdagen' element={<Fagdag />} />
        <Route path='/snake' element={<Snake/>} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('contents'),
);
