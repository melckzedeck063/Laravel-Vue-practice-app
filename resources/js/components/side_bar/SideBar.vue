        <script>
        import { Link } from '@inertiajs/vue3';
           export default {
            
            data (){
                return {
                    isOpen : false,
                }
            },
            methods : {
                showMenu(){
                    this.isOpen = !this.isOpen;
                }
            },
            
           }
        </script>


<template >
    <div :class="[isOpen? 'bg-slate-600 w-52' : 'bg-slate-600 w-14']" class="h-screen px-3 backdrop-blur-md relativee shadow-3xl sticky top-0 z-40" >
        <div class="bg-slate-100 h-8 w-8 rounded-full absolute top-2 -right-3">
            <button :class="[isOpen ? 'rotate-180' :  '']"  @click="showMenu()" class="text-slate-800 text-center ml-1 mt-0.5 text-xl font-bold rounded-lg" > <font-awesome-icon :icon="['fas', 'arrow-right']" size="lg" /> </button>
        </div>
          <div class="text-white p-2 mt-2 dark:text-white">
            <font-awesome-icon :class="[isOpen? 'text-6xl text-center' : 'text-lg text-center']" icon="fa-solid fa-user-secret"  />
            <h2 :class="[!isOpen? 'hidden' : '']" class="dark:text-white font-bold text-2xl">DASHBOARD</h2>
          </div>
        <ul class="pt-1">
            <li class="py-2 text-center hover:bg-slate-800 rounded-md">
                <Link class="text-center space-x-2">
                    <span class="dark:text-white"> <font-awesome-icon icon="fa-solid fa-chart-line" size="xl"  /> </span>
                    <span :class="[!isOpen? 'hidden':'']" class="dark:text-white text-center font-medium"> Dashboard </span>
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup >
import { def } from '@vue/shared';


</script>
