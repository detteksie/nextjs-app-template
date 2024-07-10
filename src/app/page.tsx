import Img from '|/components/home/img';
import Topper from '|/components/home/topper';
import Under from '|/components/home/under';
import { Button } from '|/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Topper />

      <Img />

      <Under />

      <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left space-x-2">
        <Button>Click Me!</Button>
        <Button variant={'ghost'}>Click Me!</Button>
        <Button variant={'link'}>Click Me!</Button>
        <Button variant={'outline'}>Click Me!</Button>
        <Button variant={'secondary'}>Click Me!</Button>
        <Button variant={'destructive'}>Click Me!</Button>
      </div>
    </main>
  );
}
