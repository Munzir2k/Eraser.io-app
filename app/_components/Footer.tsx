import {ArrowRightIcon} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 ">
        <div className="">
          <div>
            <div>
              <Image
                src={'/logo-black.svg'}
                alt="logo"
                width={200}
                height={200}
              />
            </div>

            <p className="mt-4 max-w-xs text-[#4b4b4b] text-[2rem]">
              Documents & diagrams for engineering teams
            </p>
          </div>

          <div className="grid grid-cols-2 mt-16">
            <div className="">
              <p className="font-medium text-[1.75rem] text-[#4b4b4b]">
                Use Cases
              </p>

              <ul className="text-[#878787] mt-10 space-y-4 text-[1.6rem]">
                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Architecture Diagrams
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Design Docs
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Documentation
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Brainstorming
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Wireframes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Whiteboard Interview
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-14">
              <p className="font-medium text-[#4b4b4b] text-[1.75rem]">
                Resources
              </p>

              <ul className="text-[#878787] mt-10 space-y-4 text-[1.6rem]">
                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Eraser Examples
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Decision Node
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    DiagramGPT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    Integrations
                  </a>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="flex flex-row gap-x-1 transition hover:opacity-75">
                    Docs →
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition hover:opacity-75">
                    DesignDocs.dev →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium text-[#4b4b4b] text-[1.5rem] pt-10">
            About
          </p>

          <ul className="text-[#878787] mt-6 space-y-2 text-[1.5rem]">
            <li>
              <a
                href="#"
                className="transition hover:opacity-75">
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:opacity-75">
                Team
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:opacity-75">
                Slack Community →
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition hover:opacity-75">
                Careers →
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition hover:opacity-75">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <p className="text-[1.4rem] text-[#787878]">
          &copy; 2024 Eraser Labs, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
