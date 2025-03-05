"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  return (
    <nav className="text-md text-neutral-500">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
          </Link>
        </li>
        {pathnames.map((path, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedPath = path.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());


          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-neutral-400">{formattedPath}</span>
              ) : (
                <Link href={href}>
                  <span className="hover:text-blue-600 cursor-pointer">{formattedPath}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
