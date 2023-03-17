<script setup>
  import { Link } from '@inertiajs/vue3';
  defineProps({
    message : String
  });
</script>

<template>
    <div class="text-red bg-slate-200">
        This is an index page
    </div>
    <div class="bg-slatee-600 text-white">Home sweet home</div>
    <Link href="/hello">  Show Page </Link>
    <div class="dark:text-white text-white"> {{ message }} </div>
</template>

