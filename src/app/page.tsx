import Img from '|/components/home/img';
import Topper from '|/components/home/topper';
import Under from '|/components/home/under';

import { Buttons } from './buttons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Topper />

      <Img />

      <Under />

      <Buttons />
    </main>
  );
}
