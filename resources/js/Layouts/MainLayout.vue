<template>
    <div class="bg-slate-700 dark:bg-slate-200 p-2">
        <div class="flex flex-row justify-between  mx-auto w-4/12">
            <span>
                <Link class="text-slate-800 font-medium dark:text-whitee" href="/">Main Page</Link>
            </span>
            <span>
                <Link class="text-slate-800 font-medium dark:text-whitee" href="/hello">Show Page</Link>
            </span>
        </div>
    </div>
    <slot></slot>
    <div style="background-color: teal; color: white; padding: 1em; margin: 1em;"> The timer is  {{ timer }} </div>
</template>

<script setup>
 import { Link } from '@inertiajs/vue3';
 import {ref} from 'vue';

 const timer = ref(0)
 setInterval(() => timer.value++, 1000)
</script>