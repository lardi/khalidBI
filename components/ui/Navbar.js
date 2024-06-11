import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar relative inline-block dir-rtl">
      <button className="text-white font-medium text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
        معادلات تهمك
        <svg className="w-2.5 h-2.5 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div className="dropdown-menu z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-black absolute">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
          <li>
            <Link href="/tools/calc" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary rounded-md mx-2 dark:hover:text-white">حاسبة النظام الجديد</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
