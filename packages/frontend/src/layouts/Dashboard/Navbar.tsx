import type { Component } from "solid-js";
import { useDashboardState } from "src/state/dashboard";
import ProfileButton from "./ProfileButton";

const Navbar: Component<{}> = (props) => {
  const [dashboardState, { toggleSidebar }] = useDashboardState();

  return (
    <nav class="fixed z-30 w-full border-b border-gray-200 bg-white">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              onClick={toggleSidebar}
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              class="mr-2 cursor-pointer  rounded  p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                class="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="http://localhost:1313/windster/"
              class="flex items-center text-xl font-bold lg:ml-2.5"
            >
              <img
                src="http://localhost:1313/windster/images/logo.svg"
                class="mr-2 h-6"
                alt="Windster Logo"
              />
              <span class="self-center whitespace-nowrap">
                Expose {dashboardState.dashboardOpen()}
              </span>
            </a>
          </div>
          <div class="flex items-center">
            <ProfileButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
