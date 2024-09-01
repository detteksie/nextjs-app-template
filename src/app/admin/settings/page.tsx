import React from 'react';

import { CardProfile } from '|/components/notus/cards/card-profile';
import { CardSettings } from '|/components/notus/cards/card-settings';

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
