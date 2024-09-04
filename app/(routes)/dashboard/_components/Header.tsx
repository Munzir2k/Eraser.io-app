import {ThemeToggle} from '@/components/ThemeToggle';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs';
import {Search, Send} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Header() {
  const {user}: any = useKindeBrowserClient();
  return (
    <div className="flex justify-end w-full items-center gap-2 ">
      <div className="flex items-center gap-4 border rounded-md px-4">
        <Search className="w-5 h-5" />
        <Input
          type="search"
          placeholder="Search"
        />
      </div>
      <div>
        <Image
          src={user?.picture}
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <Button className="flex gap-2 bg-blue-600 hover:bg-blue-700 h-8">
        <Send className="w-5 h-5" /> Invite
      </Button>
    </div>
  );
}

export default Header;
