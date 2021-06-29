import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './layouts/Main';
import Rules from './views/RuleList';

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: 'rules', element: <Rules /> },
      { path: '/', element: <Navigate to="/rules" /> },
      { path: '*', element: <Navigate to="/rules" /> },
    ],
  },
];

export default routes;
