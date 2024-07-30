import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-end gap-4 leading-none text-white`}
    >
      <GlobeAltIcon className="h-7 w-7 rotate-[15deg] p-0 m-0" />
      <p className="text-[44px]">GG</p>
    </div>
  );
}
