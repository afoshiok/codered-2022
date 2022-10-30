<h1 class="flex justify-center items-center pt-60 font-bold text-3xl text-pine-green">CPU Carbon Emissions</h1>
<form>
    <div class="grid grid-cols-6 grid-rows-3 gap-4 border-4">
        <!-- "Region Name" Input -->
        <div class="block col-start-2 col-end-4">
            <label for="base-input" class= "mb-px text-md font-medium text-gray-900 dark:text-gray-300">Region Name </label>
            <input type="text" id="base-input" class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <!-- Number of CPUs Input -->
        <div class="col-start-2 col-end-2">
            <label for="base-input" class="block mb-px text-sm font-medium text-gray-900 dark:text-gray-300">Number of CPUs</label>
            <input type="text" id="base-input" class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        
        <!-- Percent Load Input -->
        <div class="row-start-2 col-start-4 col-end-3">
            <label for="base-input" class="block mb-px text-sm font-medium text-gray-900 dark:text-gray-300">Percent Load</label>
            <input type="number" id="base-input" class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <!-- Serverless? Radio Check -->
        <div class="flex items-end row-start-2 col-start-4 col-end-4">
            <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                <span class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
              </label>
        </div>
    </div>
</form>