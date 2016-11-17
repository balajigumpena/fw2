/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

/* eslint-disable global-require */

// The top-level (parent) route
export default {
  path: '/',

  async action() {
    return {
      title: 'title',
      component: <div>Home</div>
    }
  },

};
