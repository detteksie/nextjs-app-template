'use client';
import React from 'react';
import { toast } from 'sonner';

import { Button } from '|/components/ui/button';

export function Buttons() {
  return (
    <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left space-x-2">
      <Button
        onClick={(e) => {
          const date = new Date();
          toast('Event has been created', {
            description: date.toISOString(),
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          });
        }}
      >
        Click Me!
      </Button>
      <Button variant={'ghost'}>Click Me!</Button>
      <Button variant={'link'}>Click Me!</Button>
      <Button variant={'outline'}>Click Me!</Button>
      <Button variant={'secondary'}>Click Me!</Button>
      <Button variant={'destructive'}>Click Me!</Button>
    </div>
  );
}
