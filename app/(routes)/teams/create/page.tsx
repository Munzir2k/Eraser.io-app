'use client';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {api} from '@/convex/_generated/api';
import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs';
import {useMutation} from 'convex/react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {FaUserGroup} from 'react-icons/fa6';
import {toast} from 'sonner';

function CreateTeam() {
  const [teamName, setTeamName] = useState('');
  const createTeam = useMutation(api.teams.createTeam);
  const {user}: any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      console.log(resp);

      if (resp) {
        toast('Team created successfully');
        router.push('/dashboard');
      }
    });
  };

  return (
    <div className="px-6 md:px-16 py-16">
      <div className="flex gap-2 items-center">
        <Image
          src={'/logo-1.png'}
          alt="logo"
          width={80}
          height={80}
        />
        <svg
          className="EraserLogo_text__NlOor w-[10rem]"
          viewBox="0 0 670 135"
          fill="currentColor">
          <path d="M61.1,132.4c-18.2,0-32.9-5.7-44.2-17.2C5.6,103.8,0,88.6,0,69.5V66c0-12.7,2.5-24.1,7.4-34.2 c4.9-10,11.8-17.8,20.7-23.4C37,2.8,46.9,0,57.8,0c17.4,0,30.8,5.5,40.3,16.6s14.2,26.8,14.2,47.1v11.6H28.9 c0.9,10.5,4.4,18.9,10.6,25c6.2,6.1,13.9,9.2,23.3,9.2c13.1,0,23.8-5.3,32.1-15.9l15.5,14.7c-5.1,7.6-11.9,13.6-20.5,17.8 C81.3,130.3,71.8,132.4,61.1,132.4z M57.7,23c-7.9,0-14.2,2.8-19.1,8.3s-7.9,13.2-9.3,23H84v-2.1c-0.6-9.6-3.2-16.9-7.7-21.8 C71.9,25.5,65.7,23,57.7,23z"></path>
          <path d="M201.5,28.6c-3.8-0.6-7.7-0.9-11.7-0.9c-13.1,0-22,5-26.6,15.1v87.3h-28.7V2.4h27.4l0.7,14.3 C169.5,5.5,179.1,0,191.4,0c4.1,0,7.5,0.6,10.1,1.7L201.5,28.6z"></path>
          <path d="M293.5,130.1c-1.3-2.4-2.4-6.4-3.3-11.9c-9.1,9.5-20.3,14.3-33.5,14.3c-12.8,0-23.3-3.7-31.4-11 c-8.1-7.3-12.2-16.4-12.2-27.1c0-13.6,5.1-24.1,15.2-31.3S252.9,52,271.7,52h17.6v-8.4c0-6.6-1.9-11.9-5.5-15.9 c-3.7-4-9.3-6-16.9-6c-6.5,0-11.9,1.6-16,4.9c-4.2,3.3-6.3,7.4-6.3,12.4h-28.7c0-7,2.3-13.5,7-19.6c4.6-6.1,11-10.9,18.9-14.3 c8-3.5,16.9-5.2,26.7-5.2c14.9,0,26.9,3.8,35.8,11.3c8.9,7.5,13.5,18.1,13.7,31.7v57.6c0,11.5,1.6,20.7,4.8,27.5v2H293.5z M262,109.4c5.7,0,11-1.4,16-4.1c5-2.8,8.8-6.5,11.3-11.1V70.1h-15.5c-10.6,0-18.6,1.8-24,5.5c-5.4,3.7-8,8.9-8,15.7 c0,5.5,1.8,9.9,5.5,13.2C251,107.8,255.9,109.4,262,109.4z"></path>
          <path d="M419.6,95.4c0-5.1-2.1-9-6.3-11.7c-4.2-2.7-11.2-5-20.9-7.1c-9.8-2-17.9-4.6-24.4-7.8 c-14.3-6.9-21.5-17-21.5-30.1c0-11,4.6-20.2,13.9-27.6C369.6,3.7,381.4,0,395.7,0c15.3,0,27.6,3.8,37,11.3 c9.4,7.6,14.1,17.3,14.1,29.4h-28.7c0-5.5-2-10.1-6.1-13.8c-4.1-3.7-9.5-5.5-16.3-5.5c-6.3,0-11.4,1.5-15.4,4.4 c-4,2.9-6,6.8-6,11.7c0,4.4,1.8,7.8,5.5,10.3c3.7,2.4,11.2,4.9,22.4,7.4c11.3,2.5,20.1,5.4,26.5,8.8c6.4,3.4,11.2,7.5,14.3,12.3 c3.1,4.8,4.7,10.6,4.7,17.5c0,11.5-4.8,20.8-14.3,27.9c-9.5,7.1-22,10.7-37.4,10.7c-10.5,0-19.8-1.9-28-5.7 c-8.2-3.8-14.6-9-19.1-15.6c-4.6-6.6-6.8-13.7-6.8-21.4H370c0.4,6.8,2.9,12,7.7,15.6c4.7,3.7,11,5.5,18.8,5.5 c7.6,0,13.3-1.4,17.2-4.3C417.6,103.8,419.6,100,419.6,95.4z"></path>
          <path d="M529,132.4c-18.2,0-32.9-5.7-44.2-17.2c-11.3-11.4-16.9-26.7-16.9-45.7V66c0-12.7,2.5-24.1,7.4-34.2 c4.9-10,11.8-17.8,20.7-23.4c8.9-5.6,18.8-8.4,29.7-8.4C543,0,556.5,5.5,566,16.6c9.5,11.1,14.2,26.8,14.2,47.1v11.6h-83.4 c0.9,10.5,4.4,18.9,10.6,25c6.2,6.1,13.9,9.2,23.3,9.2c13.1,0,23.8-5.3,32.1-15.9l15.5,14.7c-5.1,7.6-11.9,13.6-20.5,17.8 C549.2,130.3,539.6,132.4,529,132.4z M525.5,23c-7.9,0-14.2,2.8-19.1,8.3c-4.8,5.5-7.9,13.2-9.3,23h54.6v-2.1 c-0.6-9.6-3.2-16.9-7.7-21.8C539.7,25.5,533.5,23,525.5,23z"></path>
          <path d="M669.3,28.6c-3.8-0.6-7.7-0.9-11.7-0.9c-13.1,0-22,5-26.6,15.1v87.3h-28.7V2.4h27.4l0.7,14.3 C637.4,5.5,647,0,659.3,0c4.1,0,7.5,0.6,10.1,1.7L669.3,28.6z"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex items-center mt-5 bg-[#bbd5c1] dark:bg-green-900 w-fit py-0.5 px-2 dark:border-t dark:border-green-500 rounded-lg">
          <FaUserGroup className="text-[#459566] dark:text-green-400" />
          <p className="text-[#459566] dark:text-green-400">Team Name</p>
        </div>
        <h1 className="font-bold text-[40px] py-3">
          What should we call your team?
        </h1>
        <p className="text-gray-500">
          You can always change this later from settings.
        </p>

        <div className="mt-7 md:w-[40%] w-[90%]">
          <label className="text-gray-500">Team Name</label>
          <Input
            placeholder="Team Name"
            className="mt-3"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button
          className="bg-blue-500 mt-9 md:w-[30%] w-[60%] hover:bg-blue-700"
          disabled={!(teamName && teamName.length > 2)}
          onClick={createNewTeam}>
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
