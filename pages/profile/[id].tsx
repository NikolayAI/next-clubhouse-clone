import React from 'react';
import {useRouter} from 'next/router';

const Profile = () => {
  const {id} = useRouter().query;
  return (
    <div>
      {`profile ${id}`}
    </div>
  );
};

export default Profile;