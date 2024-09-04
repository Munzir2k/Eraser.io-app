import {Button} from '@/components/ui/button';
import {Link, Save} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {WorkspaceThemeToggle} from './WorkspaceThemeToggle';

function WorkspaceHeader({onSave}: any) {
  return (
    <header className="p-3 border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={'/logo-1.png'}
          alt="logo"
          width={50}
          height={50}
        />
        <h2>File Name</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          className="h-8 text-[12px] gap-2 bg-green-500 hover:bg-green-600"
          onClick={() => onSave()}>
          Save <Save className="w-5 h-5 " />
        </Button>
        <Button className="h-8 text-[12px] gap-2 bg-blue-600 hover:bg-blue-700">
          Share <Link className="w-5 h-5 " />
        </Button>
        <WorkspaceThemeToggle />
      </div>
    </header>
  );
}

export default WorkspaceHeader;
