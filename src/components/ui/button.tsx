'use client';
import { cn } from '@/libs/utils';

export default function Button(props: JSX.IntrinsicElements['button']) {
  return (
    <button
      {...props}
      className={cn(
        'rounded-md p-2 text-gray-900 transition-colors hover:bg-deluge-100 dark:text-white dark:hover:bg-deluge-950',
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
