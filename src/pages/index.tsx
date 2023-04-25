import type { NextPage } from 'next';

import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';

const Home: NextPage = () => {
  const user = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
    </main>
  );
};

export default Home;
