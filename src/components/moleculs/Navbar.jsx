import { Fragment } from 'react';
// Menu, Transition
import { Disclosure } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="bg-white ">
      {({ open }) => (
        <>
          <div className="bg-primary">
            <div className="flex relative justify-between px-2 mx-auto max-w-7xl  h-16 sm:px-4  lg:px-8 ">
              <div className="flex relative z-10 px-2 lg:px-0">
                <div className="flex shrink-0 items-center">
                  <img className="block w-auto h-12" src="/images/logo2.png" alt="Workflow" />
                  <div className="flex ml-3">
                    <div className="self-center">
                      <LocationMarkerIcon className="w-auto h-7 text-white" aria-hidden="true" />
                    </div>
                    <div className="leading-none text-white">
                      <p className="p-0 m-0 text-sm leading-none text-gray-400">Deliver to Haris</p>
                      <p className="p-0 m-0 font-semibold leading-none">Medan 20217</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative z-0 flex-1 justify-center items-center px-2 w-96 sm:inset-0">
                <div className="w-full sm:max-w-xl">
                  <div className="flex mt-1 shadow-sm">
                    <div className="flex relative focus-within:z-10 grow items-stretch">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block pl-4 w-full rounded-none rounded-l-sm border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex relative items-center py-2 px-4 -ml-px space-x-2 text-sm font-medium text-gray-700 bg-orange-300 hover:bg-orange-400 rounded-r-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                      <SearchIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex relative z-10 items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:flex lg:relative lg:z-10 lg:items-center lg:ml-4">
                <div className="mr-5 leading-none text-white">
                  <p className="p-0 m-0 text-sm leading-none">Hello, Guest</p>
                  <p className="p-0 m-0 text-base  leading-none">Sign In</p>
                </div>
                <div className=" flex mx-5 text-white">
                  <ShoppingCartIcon className="w-auto h-6" aria-hidden="true" />
                  <span>10</span>
                </div>
                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative shrink-0 ml-4">
                  <div>
                    <Menu.Button className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md focus:outline-none ring-1 ring-black/50 shadow-lg origin-top-right">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block py-2 px-4 text-sm text-gray-700'
                              )}>
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
            <nav
              className="hidden px-2 mx-auto max-w-7xl bg-[#232f3e] sm:px-4  lg:flex lg:py-1  lg:px-8 lg:space-x-8"
              aria-label="Global">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-600 text-white'
                      : 'text-white hover:bg-gray-50 hover:text-black',
                    'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-white'
                      : 'text-white hover:bg-gray-50 hover:text-white',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="shrink-0">
                  <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user.name}</div>
                  <div className="text-sm font-medium text-gray-500">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="shrink-0 p-1 ml-auto text-gray-400 hover:text-gray-500 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-2 mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block py-2 px-3 text-base font-medium text-gray-500 hover:text-white hover:bg-gray-50 rounded-md">
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
