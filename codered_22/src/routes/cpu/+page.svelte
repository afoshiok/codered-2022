<h1 class="flex justify-center items-center pt-60 font-bold text-3xl text-pine-green">CPU Carbon Emissions</h1>
<form method="POST">
    <div class="grid grid-cols-6 grid-rows-2 gap-4">
        <!-- "Region Name" Input -->
        <div class="block col-start-3 col-end-5">
            <label for="base-input" class= "mb-px text-md font-medium text-gray-900 dark:text-gray-300">Region Name </label>
            <input type="text" id="emission_factor" placeholder="Example: aws-region_us_west_1" name= "emission_factor"  class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <!-- Number of CPUs Input -->
        {#if check}
        <div class="row-start-2 col-start-3 col-end-4">
            <label for="base-input" class="block mb-px text-sm font-medium text-gray-900 dark:text-gray-300">Number of CPUs</label>
            <input type="number" id="num_cpu" name="num_cpu" value=1 class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
        </div>
        
        <!-- Percent Load Input -->
        <div class="row-start-2 col-start-4 col-end-6">
            <label for="base-input" class="block mb-px text-sm font-medium text-gray-900 dark:text-gray-300">Percent Load</label>
            <input type="number" step=0.01 max=1 min=0 id="per_load" name="per_load" value=1 class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
        </div>

        {:else}
        <div class="row-start-2 col-start-3 col-end-4">
            <label for="base-input" class="block mb-px text-sm font-medium text-gray-900 dark:text-gray-300">Number of CPUs</label>
            <input type="number" id="num_cpu" name="num_cpu"  class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
        </div>
        
        <!-- Percent Load Input -->
        <div class="row-start-2 col-start-4 col-end-6">
            <label for="base-input" class="block mb-px text-sm font-medium text-gray-900 dark:text-gray-300">Percent Load</label>
            <input type="number" step=0.01 max=1 min=0 id="per_load" name="per_load"  class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
        </div>

        {/if}

        <!-- Serverless? Radio Check -->
        <div class="flex items-end row-start-2 col-start-5 col-end-5 justify-self-start ">
            <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" id="checked-toggle" class="sr-only peer" bind:checked = {check}>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                <span class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Serverless?</span>
              </label>
        </div>
    </div>

    <!-- Time Active Input -->
    <div class="grid grid-cols-3">
        <div class="col-start-2 justify-self-center mt-5">
            <div>
                <label for="default-input" class="block mb-px text-sm font-medium text-gray-900 dark:text-gray-300">Time Active (in hours)</label>
                <input type="text" id="time_active" class="bg-gray-50 border border-pine-green text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
        </div>
    </div>

    <div class="flex justify-center mt-4">
        <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Estimate</button>
    </div>
</form>

<script lang="ts">
    let check: boolean = false
</script>

<style>
    ::-webkit-input-placeholder {
   font-style: italic;
}
</style>