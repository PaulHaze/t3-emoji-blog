import type { NextPage } from 'next';

import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';

import { api } from '@/utils/api';

const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.posts.getAll.useQuery();

  const renderPosts = data?.map((post) => (
    <div key={post.id} className="text-white">
      {post.content}
    </div>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
      <div className="">{renderPosts}</div>
    </main>
  );
};

export default Home;
