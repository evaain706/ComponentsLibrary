'use client';

import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Sidebar from './components/SideBar';
import { components, ComponentName } from '@/lib/componentMeta';
import { cn } from './libs/cn';

export default function Home() {
  const firstKey = Object.keys(components)[0] as ComponentName;
  const [selected, setSelected] = useState<ComponentName>(firstKey);
  const [code, setCode] = useState(components[firstKey].example);

  const CompScope = {
    ...Object.fromEntries(
      Object.entries(components).map(([name, { component }]) => [
        name,
        component,
      ])
    ),
    cn,
    React,
  };

  const handleSelect = (name: ComponentName) => {
    setSelected(name);
    setCode(components[name].example);
  };

  return (
    <div className='flex h-screen'>
      <Sidebar selected={selected} onSelect={handleSelect} />
      <div className='flex-1 flex flex-col md:flex-row gap-4 p-4'>
        <LiveProvider code={code} scope={CompScope}>
          {/* 코드 에디터 */}
          <div className='flex-1 border rounded p-2 bg-gray-900 text-white overflow-auto text-xl'>
            <LiveEditor onChange={setCode} />
          </div>

          {/* 프리뷰 나오는곳 */}
          <div className='flex-1 border rounded p-4 bg-background text-foreground overflow-auto'>
            <LivePreview>
              <div></div>
            </LivePreview>
            <LiveError className='text-red-500 mt-2' />
          </div>
        </LiveProvider>
      </div>
    </div>
  );
}
