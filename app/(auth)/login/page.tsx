import type { Metadata } from 'next';
import Link from 'next/link';

import { Icons } from '#/components/icons';
import { buttonVariants } from '#/components/ui/button';
import { UserAuthForm } from '#/components/user-auth-form';
import { cn } from '#/lib/utils';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center overflow-hidden ">
      <div className="top-4 flex h-12 w-full flex-col justify-center md:top-8  md:hidden">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            ' left-4  md:left-8 '
          )}
        >
          <>
            <Icons.chevronLeft className="border-primaryFG mr-2 h-6 w-6 rounded-full border-2" />
            Back
          </>
        </Link>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 rounded-xl bg-item_green shadow-xl sm:w-[350px] md:p-8">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
