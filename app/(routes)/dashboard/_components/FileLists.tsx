import {FileListContext} from '@/app/_context/FileListContext';
import React, {useContext, useEffect, useState} from 'react';
import moment from 'moment';
import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import {Archive, MoreHorizontal} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {useRouter} from 'next/navigation';

export interface FILE {
  archive: boolean;
  createdBt: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
}

function FileLists() {
  const {fileList_, setFileList_} = useContext(FileListContext);
  const [fileList, setFileList] = useState<any>();
  const {user}: any = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    fileList_ && setFileList(fileList_);
    console.log(fileList_);
  }, [fileList_]);

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-y-2 dark:bg-zinc-950 divide-gray-200 bg-white dark:divide-zinc-700 text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 dark:text-gray-300">
              File Name
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 dark:text-gray-300">
              Created At
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 dark:text-gray-300">
              Edited
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 dark:text-gray-300">
              Author
            </td>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
          {fileList &&
            fileList.map((file: FILE, index: number) => (
              <tr key={index}>
                <td
                  onClick={() => router.push(`/workspace/${file._id}`)}
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-300">
                  <p className="w-fit cursor-pointer">{file.fileName}</p>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  {moment(file._creationTime).format('DD MMM YYYY')}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300"></td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  <Image
                    className="rounded-full cursor-pointer"
                    src={user?.picture}
                    width={40}
                    height={40}
                    alt="user"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                      <MoreHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="gap-3">
                        <Archive className="w-5 h-5" /> Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileLists;
