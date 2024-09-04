'use client';

import {api} from '@/convex/_generated/api';
import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs';
import {useConvex, useMutation, useQuery} from 'convex/react';
import {useEffect} from 'react';
import Header from './_components/Header';
import FileLists from './_components/FileLists';

function Dashboard() {
  const {user}: any = useKindeBrowserClient();
  const convex = useConvex();
  // const getUser = useQuery(api.user.getUser, {email: user?.email});
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, {email: user?.email});

    if (!result?.length) {
      createUser({
        full_name: user.given_name + ' ' + user.family_name,
        email: user.email,
        image: user.picture,
      }).then((res) => console.log(res));
    }
  };

  return (
    <div className="p-8">
      <Header />
      <FileLists />
    </div>
  );
}

export default Dashboard;
