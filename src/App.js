import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  NavigationActions
} from 'react-navigation';
import { ToastShort } from './utils/toast_util';
import ComponentTest from './pages/test/component_test';
import MainView from './pages/main/main';

import NotebookView from './pages/notebook/notebook_view';
import Init from './pages/test/init';
import NotebookPreview from './pages/notebook/notebook_preview';
import LockView from './pages/notebook/lock';
import LockNotebook from './pages/notebook/lock_notebook';
import Index from './pages/login';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Advertise from './pages/login/ads';
import About from './pages/main/about';

const MainStack = createStackNavigator(
  {
    main: {
      screen: MainView
    },
    notebook: {
      screen: NotebookView
    },
    nbpreview: {
      screen: NotebookPreview
    },
    locknotebook: {
      screen: LockNotebook
    },
    lockview: {
      screen: LockView
    },
    about: {
      screen: About
    }
  },
  {
    headerMode: 'none'
  }
);



const LoginStack = createStackNavigator(
  {
    index: {
      screen: Index
    },
    login: {
      screen: Login
    },
    register: {
      screen: Register
    }
  },
  {
    headerMode: 'none'
  }
);

const InitStack = createSwitchNavigator(
  {
    advertise: {
      screen: Advertise
    },
    loginstack: {
      screen: LoginStack
    },
    mainstack: {
      screen: MainStack
    },
    initial: {
      screen: Init
    }
  },
  {
    headerMode: 'none'
  }
);

const TestStack = createStackNavigator(
  {
    test: {
      screen: ComponentTest
    }
  },
  {
    headerMode: 'none'
  }
);

const AppNavigator = createStackNavigator(
  {
    init: {
      //screen: TestStack,
      screen: InitStack
    }
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
