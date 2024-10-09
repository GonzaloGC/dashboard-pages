import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-end gap-4 leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-7 w-7 rotate-[15deg] p-0 m-0" /> */}
      <Image
      src="/logo-512x512 -.png"
      alt='logo gonzalo guerrero'
      width={50}
      height={20}
      />
      <p className="text-[44px]">GG</p>
    </div>
  );
}
