import {Archive, Flag, Github} from 'lucide-react';
import {ThemeToggle} from '@/components/ThemeToggle';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {useState} from 'react';
import Constants from '@/app/_constants/Constants';
import PricingDialog from './PricingDialog';

function SideNavBottomSection({onFileCreate, totalFiles}: any) {
  const menuList = [
    {
      id: 1,
      name: 'Getting Started',
      icon: Flag,
      path: '',
    },
    {
      id: 2,
      name: 'Github',
      icon: Github,
      path: '',
    },
    {
      id: 1,
      name: 'Archive',
      icon: Archive,
      path: '',
    },
  ];

  const [fileInput, setFileInput] = useState('');
  return (
    <div>
      {menuList.map((item, index) => (
        <h1
          key={index}
          className="flex gap-2 p-1 px-2 text-[14px] hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md cursor-pointer">
          <item.icon className="w-5 h-5" />
          {item.name}
        </h1>
      ))}
      {/* Add New File Buttons */}
      <Dialog>
        <DialogTrigger
          className="w-full"
          asChild>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2 justify-start">
            New File
          </Button>
        </DialogTrigger>
        {totalFiles < Constants.MAX_FREE_FILE ? (
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-3">Create New File</DialogTitle>
              <DialogDescription>
                <Input
                  placeholder="Enter File Name"
                  onChange={(e) => setFileInput(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!(fileInput && fileInput.length > 3)}
                  onClick={() => onFileCreate(fileInput)}>
                  Create
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : (
          <PricingDialog />
        )}
      </Dialog>
      {/* Progress Bar */}
      <div className="h-4 w-full bg-gray-200 rounded-full mt-5">
        <div
          className={`h-4 bg-blue-600 rounded-full mb-2 ${totalFiles === Constants.MAX_FREE_FILE && 'bg-red-500'}`}
          style={{
            width: `${(totalFiles / Constants.MAX_FREE_FILE) * 100}%`,
          }}></div>
        <h2 className="text-[12px]">
          <strong>{totalFiles}</strong> out of{' '}
          <strong>{Constants.MAX_FREE_FILE}</strong> files used
        </h2>
        <h2 className="text-[12px] mt-1">
          Upgrade your plan for unlimited access.
        </h2>
      </div>
      {/* Separator */}
      <Separator className="mt-16" />
      {/* Theme Toggle */}
      <div className="w-full">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default SideNavBottomSection;
