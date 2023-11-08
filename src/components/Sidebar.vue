<template>
    <div class="flex h-screen flex-col justify-between border-e bg-white">
        <div class="px-4 py-6">
            <span class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                DIGITAL DRAWING PRACTICE
            </span>

            <ul class="mt-6 space-y-1">

                

                <li>
                    <router-link to="/random-word"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Random Word
                    </router-link>
                </li>

                <li>
                    <router-link to="/random-line"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Random Line
                    </router-link>
                </li>

                <li>
                    <router-link to="/random-spots"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Random Spots
                    </router-link>
                </li>
                <li>
                    <router-link to="/random-prop"
                        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Random Prop
                    </router-link>
                </li>

                
            </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                <img alt="Man" src="https://avatars.githubusercontent.com/u/131535741?v=4"
                    class="h-10 w-10 rounded-full object-cover" />

                <div>
                    <p class="text-xs">
                        <strong class="block font-medium">Matvey Sudomoykin</strong>

                        <span> me@matveymatvey.com</span>
                    </p>
                </div>
            </a>
        </div>
    </div>
</template>