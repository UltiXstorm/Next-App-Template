import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledMain } from './main.styled';
import { Landing } from '../landing/landing.component';
import { Title1 } from '../../packages/ds';

export const Main = () => (
  <StyledMain>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/test1" element={<Title1>TEST 1</Title1>} />
      <Route path="/test2" element={<Title1>TEST 2</Title1>} />
    </Routes>
  </StyledMain>
);
