import React from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/Reducer/userSlice';
import TabNav from '../Navigations/TabNav';
import WelcomeStack from '../Navigations/WelcomeStack';

function Auth() {
  const user = useSelector(selectUser);

  if (!user.user) {
    return <WelcomeStack />;
  }

  return <TabNav />;
}

export default Auth;
