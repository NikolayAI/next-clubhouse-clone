import React from 'react';
import { useRouter } from 'next/router';

import { ProfilePage } from '../../applicationPages';

const Profile = () => {
  const { id } = useRouter().query;
  return <ProfilePage />;
};

export default Profile;
