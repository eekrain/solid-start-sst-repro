import { Component, createSignal } from "solid-js";
import { FaSolidChevronDown } from "solid-icons/fa";

const ProfileButton: Component<{}> = (props) => {
  const [open, setOpen] = createSignal(false);
  return (
    <div class="relative inline-block">
      <button
        class="flex items-center rounded-lg border-2 px-4 py-2 hover:border-transparent hover:bg-cyan-700 hover:text-white focus:ring-4 focus:ring-cyan-200 "
        classList={{
          "border-gray-300": !open(),
          "bg-cyan-700 text-white border-transparent": open(),
        }}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span class="ml-2 text-sm">Hi, Ardian!</span>
        <FaSolidChevronDown class="ml-3" />
      </button>

      <div
        class="absolute right-0 z-20 mt-2 hidden w-56 origin-top-right overflow-hidden rounded-md bg-white py-2 shadow-xl transition-all duration-300 dark:bg-gray-800"
        classList={{ "hidden opacity-0": !open(), "opacity-100": open() }}
      >
        <a
          href="#"
          class="-mt-2 flex transform items-center p-3 text-sm text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <img
            class="mx-1 h-9 w-9 flex-shrink-0 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar"
          />
          <div class="mx-1">
            <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Jane Doe
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              janedoe@exampl.com
            </p>
          </div>
        </a>

        <hr class="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          view profile
        </a>

        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Settings
        </a>

        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Keyboard shortcuts
        </a>

        <hr class="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Company profile
        </a>

        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Team
        </a>

        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Invite colleagues
        </a>

        <hr class="border-gray-200 dark:border-gray-700 " />

        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Help
        </a>
        <a
          href="#"
          class="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Sign Out
        </a>
      </div>
    </div>
  );
};

export default ProfileButton;
