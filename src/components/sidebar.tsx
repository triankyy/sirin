'use client';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  IoCogOutline,
  IoCreateOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from 'react-icons/io5';
import Button from './ui/button';

export default function Sidebar() {
  return (
    <aside
      className='fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full transition-transform md:translate-x-0'
      aria-label='Sidebar'
    >
      <div className='flex h-full flex-col overflow-y-auto border-r border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900'>
        <div className='mb-5 ms-2.5 flex items-center gap-3 px-3 py-4'>
          <div className='relative h-10 w-10'>
            <Image
              src='/sirin.jpg'
              alt='Sirin profile'
              fill
              className='rounded-full'
            />
          </div>
          <span className='flex-grow self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            Sirin 3B
          </span>
          <Button>
            <IoCreateOutline className='size-5' />
          </Button>
        </div>

        <div className='scrollbar mr-[3px] flex-grow overflow-y-auto px-3'>
          <ul className='space-y-2 font-medium'>
            {Array.from({ length: 2 }).map((_, i) => (
              <li key={i}>
                <Button className='flex w-full items-center'>
                  <span className='ms-3 text-sm'>
                    message history will be here
                  </span>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <hr className='mx-2 h-px border-0 bg-zinc-300 dark:bg-zinc-800' />

        <Menu>
          <MenuButton className='mx-3 my-4 flex cursor-pointer flex-row items-center rounded-md p-2 transition-colors hover:bg-deluge-100 data-[active]:bg-deluge-100 dark:hover:bg-deluge-950 dark:data-[active]:bg-deluge-950'>
            <div className='relative me-3 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-deluge-200 dark:bg-deluge-600'>
              <span className='text-sm font-medium text-deluge-800 dark:text-deluge-100'>
                KY
              </span>
            </div>
            <span className='self-center whitespace-nowrap text-sm font-semibold dark:text-white'>
              Kyy
            </span>
          </MenuButton>

          <Transition
            enter='transition ease-out duration-75'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <MenuItems
              anchor={{ to: 'top', gap: '0.5rem' }}
              className='z-50 w-[var(--button-width)] origin-top-right rounded-md border border-zinc-300 bg-white p-2 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none dark:border-zinc-800 dark:bg-zinc-900'
            >
              <MenuItem>
                <SwitchThemeButton />
              </MenuItem>

              <MenuItem>
                <Button className='flex w-full items-center gap-2'>
                  <IoCogOutline className='size-5 text-black/50 dark:text-white/30' />
                  Settings
                </Button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </aside>
  );
}

function SwitchThemeButton() {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsDarkMode(theme == 'dark');
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      className='flex w-full items-center gap-2'
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? (
        <IoSunnyOutline className='size-5 text-black/50 dark:text-white/30' />
      ) : (
        <IoMoonOutline className='size-5 text-black/50 dark:text-white/30' />
      )}
      Switch to {isDarkMode ? 'light' : 'dark'} mode
    </Button>
  );
}
