'use client';

import Sidebar from '@/components/sidebar';
import { Button } from '@headlessui/react';
import { IoArrowUp, IoAttach } from 'react-icons/io5';
import TextareaAutosize from 'react-textarea-autosize';
import { GoSidebarCollapse } from 'react-icons/go';
import Image from 'next/image';
import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <Sidebar />
      <div className='flex h-screen flex-col px-4 py-2 md:ml-80'>
        <div>
          <button
            data-drawer-target='cta-button-sidebar'
            data-drawer-toggle='cta-button-sidebar'
            aria-controls='cta-button-sidebar'
            type='button'
            className='ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          >
            <GoSidebarCollapse className='h-6 w-6' />
          </button>
        </div>
        <div className='mx-auto flex w-full max-w-3xl flex-grow flex-col gap-2'>
          {messages.map((message) => {
            if (message.role == 'user') {
              return (
                <div
                  className='flex items-start justify-end gap-1 md:gap-2'
                  key={message.id}
                >
                  <div className='rounded-s-xl rounded-ee-xl bg-deluge-100 p-2 dark:bg-deluge-950/50 md:p-4'>
                    <p className='px-1 text-xs font-normal text-deluge-950 dark:text-white md:px-2 md:text-sm'>
                      {message.content}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div className='flex items-start gap-1 md:gap-2' key={message.id}>
                <div>
                  <div className='relative h-5 w-5 md:h-8 md:w-8'>
                    <Image
                      src='/sirin.jpg'
                      alt='Sirin profile'
                      fill
                      className='rounded-full'
                    />
                  </div>
                </div>

                <div className='rounded-e-xl rounded-es-xl bg-deluge-300 p-2 dark:bg-deluge-800/50 md:p-4'>
                  <p className='px-1 text-xs font-normal text-deluge-950 dark:text-white md:px-2 md:text-sm'>
                    {message.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex flex-col items-center gap-3'>
          <form
            className='flex w-full items-center gap-3 xl:w-2/3 2xl:w-1/2'
            onSubmit={handleSubmit}
          >
            <Button className='h-10 w-10 rounded-lg bg-deluge-100 p-2 text-center text-deluge-800 transition-colors hover:bg-deluge-200 dark:bg-deluge-950 dark:text-deluge-500 dark:hover:bg-deluge-900 dark:hover:text-deluge-400'>
              <IoAttach className='h-5 w-5' />
            </Button>
            <TextareaAutosize
              placeholder='Ask Sirin anything...'
              value={input}
              onChange={handleInputChange}
              className='flex h-14 w-full resize-none items-center overflow-hidden rounded-2xl border border-deluge-300 px-5 py-3 text-sm shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-deluge-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-deluge-800 dark:placeholder:text-gray-500'
            />
            <Button
              type='submit'
              className='h-10 w-10 rounded-lg bg-deluge-100 p-2 text-center text-deluge-800 transition-colors hover:bg-deluge-200 dark:bg-deluge-950 dark:text-deluge-500 dark:hover:bg-deluge-900 dark:hover:text-deluge-400'
            >
              <IoArrowUp className='h-5 w-5' />
            </Button>
          </form>
          <span className='text-xs text-gray-500'>
            Sirin can make mistakes. Check important info.
          </span>
        </div>
      </div>
    </div>
  );
}
