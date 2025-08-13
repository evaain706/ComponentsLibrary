'use client';
import React from 'react';
import { components, ComponentName } from '@/lib/componentMeta';

interface SidebarProps {
  selected: ComponentName;
  onSelect: (name: ComponentName) => void;
}

export default function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <aside className='w-50 md:w-100 bg-gray-100 border-r h-screen p-4'>
      <h2 className='font-bold mb-4 text-md md:text-xl'>컴포넌트 모음</h2>
      <ul className='space-y-2'>
        {Object.keys(components).map((name) => (
          <li key={name}>
            <button
              onClick={() => onSelect(name as ComponentName)}
              className={`block w-full text-left px-2 py-1 rounded ${
                selected === name
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
