<template>
    <div class="w-11/12 mx-auto shadow-lg my-4 p-2">
        <table class="bg-slate-200 rounded-md p-2 dark:bg-slate-800 pb-4">
            <thead class="bg-slate-700">
                <tr class="py-2">
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">S/NO</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">City</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Code</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Street</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Street_No</th>
                    <!-- <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Code</th> -->
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Beds</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Baths</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Area</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Price</th>
                    <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2 text-left">Actions</th>
                    <!-- <th class="text-lg font-medium dark:text-white text-slate-800 px-4 py-2">Code</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="listing in listings" :key="listing.id" class="border-b border-slate-700">
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white"> {{ listing.id }} </td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.city }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.code }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.street }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.street_no }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.beds }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.baths }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.area }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">{{ listing.price }}</td>
                 <td class="text-sm font-light text-slate-700 px-4 py-2 border-b borderr-slate-300 dark:text-white">
                    <button class="px-2 py-1.5 rounded-lg bg-green-500 text-white mr-2.5 font-medium"> <Link :href="`/listing/${listing.id}`"> View </Link></button>
                    <button class="px-2 py-1.5 rounded-lg bg-sky-500 text-white mr-2.5 font-medium"> Edit </button>
                    <button class="px-2 py-1.5 rounded-lg bg-red-500 text-white mr-2.5 font-medium"> Delete </button>
                 </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {Link} from '@inertiajs/vue3';

defineProps({
    listings : Array
})
</script>