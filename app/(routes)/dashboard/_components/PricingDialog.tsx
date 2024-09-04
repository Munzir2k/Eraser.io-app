import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {ArrowRightIcon} from 'lucide-react';
import {FaCheckCircle} from 'react-icons/fa';

function PricingDialog() {
  return (
    <DialogContent className="max-w-7xl h-screen">
      <DialogHeader>
        <DialogTitle className="mx-auto pt-2">Upgrade Plan</DialogTitle>
        <DialogDescription>
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
              <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                <div className="p-6 sm:px-8">
                  <h2 className="text-4xl font-extrabold uppercase text-gray-900 dark:text-gray-100">
                    Free
                    <span className="sr-only">Plan</span>
                  </h2>
                  <p className="mt-2 sm:mt-4 mb-20">
                    <strong className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-lg">
                      $0 per member/month
                    </strong>
                  </p>

                  <a
                    className="mt-4 rounded border border-gray-400 px-12 py-3 text-center text-xl font-medium text-gray-900 dark:text-gray-100 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:ring sm:mt-6 flex gap-4 items-center"
                    href="#">
                    Try Eraser
                    <ArrowRightIcon />
                  </a>
                </div>

                <div className="p-6 sm:px-8">
                  <ul className="mt-2 space-y-2 sm:mt-4 text-lg">
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />

                      <span className="text-gray-700 dark:text-gray-400">
                        5 files
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        20 AI diagrams
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        7-day version history
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited guests
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-green-500" />

                      <span className="text-gray-700 dark:text-gray-400">
                        Diagram-as-code
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-green-500" />

                      <span className="text-gray-700 dark:text-gray-400">
                        Github integration
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-green-500" />

                      <span className="text-gray-700 dark:text-gray-400">
                        Notion integration
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="divide-y divide-gray-200 rounded-2xl border-4 border-sky-500 shadow-sm">
                <div className="p-6 sm:px-8">
                  <h2 className="text-4xl font-medium text-gray-900 dark:text-gray-100">
                    Pro
                    <span className="sr-only">Plan</span>
                  </h2>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-lg">
                      $10 per member/month
                    </strong>
                  </p>
                  <p className="mt-4 mb-10">BILLED ANNUALLY OR $12 MONTHLY</p>

                  <a
                    className="mt-4 rounded border border-sky-500 bg-sky-500 px-12 py-3 text-center text-lg font-medium text-sky-900 hover:border-sky-600 hover:bg-sky-600 focus:outline-none focus:ring sm:mt-6 flex gap-2"
                    href="#">
                    Get Started
                  </a>
                </div>

                <div className="p-6 sm:px-8">
                  <ul className="mt-2 space-y-2 sm:mt-4">
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited files
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited AI diagrams
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        90-day version history
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited guests
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-sky-500" />
                      <span className="text-gray-700 dark:text-gray-400">
                        PDF Exports
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-sky-500" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Private files
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-sky-500" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Publicly editable files
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-sky-500" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Custom icons
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                <div className="p-6 sm:px-8">
                  <h2 className="text-4xl font-medium text-gray-900 dark:text-gray-100">
                    Enterprise
                    <span className="sr-only">Plan</span>
                  </h2>

                  <p className="mt-5 text-gray-700 dark:text-gray-400 mb-[4.7rem] text-xl">
                    Call us for pricing details
                  </p>

                  <a
                    className="mt-4 rounded border border-gray-400 px-12 py-3 text-center text-lg font-medium text-gray-900 dark:text-gray-100 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:ring sm:mt-6 flex gap-4 items-center"
                    href="#">
                    Contact Us <ArrowRightIcon />
                  </a>
                </div>

                <div className="p-6 sm:px-8">
                  <ul className="mt-2 space-y-2 sm:mt-4">
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited files
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited AI diagrams
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited version history
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Unlimited guests
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-400">
                        SAML SSO
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-400">
                        CSM
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Flexible payments
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-400">
                        Custom contracts
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-400">
                        + Everything in Professional
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild></DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default PricingDialog;
