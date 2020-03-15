import React from 'react';

import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction
} from 'carbon-components-react';

import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';

const Nav = () => {
  return (
    <Header aria-label="coindoma.in">
      <HeaderName href="#" prefix="CD">
        coindoma.in
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Search"
          onClick={function noRefCheck() {}}>
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Notifications"
          onClick={function noRefCheck() {}}>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="App Switcher"
          onClick={function noRefCheck() {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default Nav;
