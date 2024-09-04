import {Button} from '@/components/ui/button';
import {RegisterLink} from '@kinde-oss/kinde-auth-nextjs';
import {ArrowRightIcon} from 'lucide-react';
import React from 'react';

function Hero() {
  return (
    <section className="bg-zinc-900">
      <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:h-[70vh] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-5xl text-sky-300 font-extrabold">
            Documents & diagrams
            <strong className="font-extrabold text-white sm:block">
              for engineering teams
            </strong>
          </h1>

          <p className="mt-4 text-white sm:text-xl/relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <RegisterLink>
              <Button className="flex gap-x-2 items-center w-fit rounded bg- px-12 py-3 text-sm font-mediumrounded-md bg-gray-100 font-medium text-black hover:text-slate-800 hover:bg-zinc-400">
                Try Eraser
                <ArrowRightIcon />
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
      <div className="pb-10 w-[75%] mx-auto">
        <img
          src="https://cdn.prod.website-files.com/62d58a323cbc396f06a780aa/65375f2ad14a4d731410f610_Hero%20New.webp"
          alt="logo"
        />
      </div>
    </section>
  );
}

export default Hero;
