import type { Component } from "solid-js";

const Sidebar: Component<{}> = (props) => {
  return (
    <aside
      id="sidebar"
      class="transition-width fixed top-0 left-0 z-20 flex h-full w-64 flex-shrink-0 flex-col pt-16 duration-75 lg:flex"
      aria-label="Sidebar"
    >
      <div class="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div class="flex-1 space-y-1 divide-y bg-white px-3">
            <ul class="space-y-2 pb-2">
              <li>
                <a
                  href="http://localhost:1313/windster/users/list/"
                  class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                >
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Users</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
