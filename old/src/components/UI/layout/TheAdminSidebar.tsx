'use client';

import { DashboardIcon, BackpackIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TheAdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blue-700 border-r border-blue-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-blue-700">
        <ul className="space-y-2 font-medium">
          <li className="group">
            <Link
              href="/admin"
              className={`flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-100 ${
                pathname === '/admin' ? 'bg-gray-100 ' : ''
              }`}
            >
              <DashboardIcon
                className={`w-6 h-6 transition duration-75 group-hover:text-gray-400 ${
                  pathname === '/admin' ? 'text-gray-400 ' : 'text-white'
                }`}
              />
              <span
                className={`ml-3 group-hover:text-gray-800 ${
                  pathname === '/admin' ? 'text-gray-800 ' : 'text-gray-100'
                }`}
              >
                Admin
              </span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/admin/products"
              className={`flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-100 ${
                pathname === '/admin/products' ? 'bg-gray-100' : ''
              }`}
            >
              <svg
                aria-hidden="true"
                className={`w-6 h-6 transition duration-75 group-hover:text-gray-400 ${
                  pathname === '/admin/products'
                    ? 'text-gray-400 '
                    : 'text-white'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                className={`ml-3 group-hover:text-gray-800 ${
                  pathname === '/admin/products'
                    ? 'text-gray-800'
                    : 'text-gray-100'
                }`}
              >
                Products
              </span>
            </Link>
          </li>
          <li className="group ml-4">
            <Link
              href="/admin/products/categories"
              className={`flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-100 ${
                pathname === '/admin/products/categories' ? 'bg-gray-100' : ''
              }`}
            >
              <BackpackIcon
                className={`w-6 h-6 transition duration-75 group-hover:text-gray-400 ${
                  pathname === '/admin/products/categories'
                    ? 'text-gray-400 '
                    : 'text-white'
                }`}
              />
              <span
                className={`ml-3 group-hover:text-gray-800 ${
                  pathname === '/admin/products/categories'
                    ? 'text-gray-800'
                    : 'text-gray-100'
                }`}
              >
                Categories
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default TheAdminSidebar;
