import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './layouts/Main';
import Rules from './views/RuleList';

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: 'rules/:chapter', element: <Rules /> },
      { path: 'rules', element: <Navigate to="/rules/100" /> },
      { path: '/', element: <Navigate to="/rules" /> },
    ],
  },
];

export default routes;
