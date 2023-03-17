<template>
    <div class="bg-800 my-6 w-10/12 mx-auto">
        <table class="bg-slate-100 rounded-md p-2 dark:bg-slate-700">
            <thead class="bg-slate-800">
                <tr>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">S/NO</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">City</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Code</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Street</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Street_No</th>
                    <!-- <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Code</th> -->
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Beds</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Baths</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Area</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Price</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Actions</th>
                    <!-- <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2.5 text-left">Code</th> -->
                </tr>
            </thead>
            <tbody class="pb-2">
                <tr class="py-2 border-b border-slate-400">
                    <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white"> {{ listings.id }} </td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.city }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.code }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.street }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.street_no }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.beds }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.baths }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.area }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">{{ listings.price }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b border-slate-300 dark:text-white">
                    <button class="px-2 py-1.5 rounded-lg bg-sky-500 text-white mr-2.5 font-medium"> Edit </button>
                    <button class="px-2 py-1.5 rounded-lg bg-red-500 text-white mr-2.5 font-medium"> Delete </button>
                 </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

defineProps({
    listings : Object
})
</script>