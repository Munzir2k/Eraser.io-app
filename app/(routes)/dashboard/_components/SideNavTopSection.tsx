import {ChevronDown, LogOut, Settings, Users} from 'lucide-react';
import Image from 'next/image';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

import {LogoutLink} from '@kinde-oss/kinde-auth-nextjs';
import {Separator} from '@/components/ui/separator';
import {useConvex} from 'convex/react';
import {api} from '@/convex/_generated/api';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {IoGrid} from 'react-icons/io5';

export interface TEAM {
  createdBy: string;
  teamName: string;
  _id: string;
}

function SideNavTopSection({user, setActiveTeamInfo}: any) {
  const router = useRouter();
  const [teamList, setTeamList] = useState<TEAM[]>();
  const [activeTeam, setActiveTeam] = useState<TEAM>();

  const menu = [
    {
      id: 1,
      name: 'Create Team',
      path: '/teams/create',
      icon: Users,
    },
    {
      id: 2,
      name: 'Settings',
      path: '',
      icon: Settings,
    },
  ];
  const convex = useConvex();

  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeams, {email: user?.email});
    console.log('Team: ', result);
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  useEffect(() => {
    user && getTeamList();
  }, [user]);

  useEffect(() => {
    activeTeam ? setActiveTeamInfo(activeTeam) : null;
  }, [activeTeam]);

  const onMenClick = (item: any) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  const ThemeToggle = () => {
    return <ThemeToggle />;
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-zinc-900 p-3 rounded-lg cursor-pointer w-[18rem] justify-between">
            <Image
              src={'/logo-1.png'}
              alt="logo"
              width={50}
              height={50}
            />
            <h1 className="flex gap-2 items-center font-bold text-[17px]">
              {activeTeam?.teamName}
            </h1>
            <ChevronDown />
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7 p-4 mr-5 bg-gray-100 dark:bg-zinc-800">
          {/* Team Section */}
          <div>
            {teamList?.map((item, index) => (
              <h1
                className={`p-2 hover:bg-blue-500 hover:text-white hover:font-bold rounded-lg cursor-pointer mb-1 ${activeTeam?._id === item._id && 'bg-blue-500 text-white hover:font-normal'}`}
                onClick={() => setActiveTeam(item)}
                key={index}>
                {item.teamName}
              </h1>
            ))}
          </div>
          <Separator className="mt-2" />

          {/* Options Section */}
          <div>
            {menu.map((item, index) => (
              <h2
                key={index}
                className="flex gap-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-lg cursor-pointer text-sm"
                onClick={() => onMenClick(item)}>
                <item.icon className="h-4 w-4" />
                {item.name}
              </h2>
            ))}

            <LogoutLink>
              <h2 className="flex gap-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-lg cursor-pointer text-sm">
                <LogOut className="h-4 w-4" />
                Logout
              </h2>
            </LogoutLink>
          </div>
          <Separator className="mt-2" />
          {/* User Info Section */}

          {user && (
            <div className="flex mt-2 items-center gap-3">
              <Image
                src={user?.picture}
                alt="image"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="text-[14px] font-bold">
                  {user.given_name} {user.family_name}
                </h2>
                <h2 className="text-[12px] text-gray-500">{user.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/* All Files Button */}
      <Button
        variant={'outline'}
        className="flex w-full justify-between gap-2 mt-10 border-none hover:bg-gray-100">
        <div className="flex items-center gap-2">
          <IoGrid className="h-5 w-5" />
          <p className="text-lg font-bold">All Files</p>
        </div>
        <p className="text-[1.2rem]">A</p>
      </Button>
    </div>
  );
}

export default SideNavTopSection;
