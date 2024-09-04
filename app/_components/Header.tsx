import {Button} from '@/components/ui/button';
import {LoginLink, RegisterLink} from '@kinde-oss/kinde-auth-nextjs';
import {ArrowRightIcon} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="bg-zinc-950">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              className="block text-teal-600"
              href="#">
              <span className="sr-only">Home</span>
              <Image
                src={'/logo.svg'}
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-50 transition hover:text-gray-400"
                    href="#">
                    Use Cases
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-50 transition hover:text-gray-400"
                    href="#">
                    Resource
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-50 transition hover:text-gray-400"
                    href="#">
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-50 transition hover:text-gray-400"
                    href="#">
                    DiagramGPT
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-50 transition hover:text-gray-400"
                    href="#">
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <LoginLink>
                <Button className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black">
                  Login
                </Button>
              </LoginLink>

              <div className="hidden sm:flex">
                <Button className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black hover:text-slate-800 hover:bg-zinc-400">
                  <RegisterLink className="flex flex-row items-center gap-x-3">
                    Try Eraser
                    <ArrowRightIcon />
                  </RegisterLink>
                </Button>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
