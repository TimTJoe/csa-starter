import React from 'react';

import Root from "@components/Root";
import Home from "@components/Home"
import {BusinessRoutes} from '@components/Business';
import {FreelancerRoutes} from "@components/Freelancer"
import {JobRoutes} from "@components/Job"

const AppRoutes = [
  {
    path: '/',
    element: <Root />,
    children: [
     { index: true, element: <Home />},
      BusinessRoutes,
      FreelancerRoutes,
      JobRoutes
    ]
  }
]

export default AppRoutes