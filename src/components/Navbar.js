import React from "react"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"

const navigation = [
  { name: "Admit Avatar", href: "/avatar", current: true },
  { name: "Admit Studio", href: "/studio", current: false },
  { name: "Lounge", href: "/lounge", current: false },
  { name: "Våre rådgivere", href: "/consult", current: false },
  { name: "Om Admit ", href: "/about", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white transition-all duration-500">
      {({ open }) => (
        <div className="transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6 transition-all duration-500" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6 transition-all duration-500" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Link
                to="/"
                className="flex-shrink-0 translate-x-10 items-start justify-center left-0 sm:hidden md:flex md:translate-x-5"
              >
                <img
                  className="block lg:hidden h-6 w-auto"
                  src="https://uploads-ssl.webflow.com/602535e288aec462623e79b5/608168cc4904e8cfd98c68fe_Admit%20logo%202020%20farger.png"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://uploads-ssl.webflow.com/602535e288aec462623e79b5/608168cc4904e8cfd98c68fe_Admit%20logo%202020%20farger.png"
                  alt="Workflow"
                />
              </Link>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? " text-black hover:bg-admit-red hover:text-white"
                            : "text-black hover:bg-admit-red hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium transition-all duration-500"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://calendly.com/admitas/"
                  className="inline-flex items-center bg-admit-red border-0 py-2 px-4 focus:outline-none hover:outline transition-b duration-500 hover:bg-admit-blue text-white rounded-full text-base font-semibold mt-0 md:mt-0"
                >
                  Booking
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1 animate-pulse"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-admit-blue rounded-br-2xl transition-all duration-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? " text-white"
                      : "text-white hover:bg-admit-red hover:text-gray-300 transition-colors duration-300",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
