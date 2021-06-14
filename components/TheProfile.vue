<template>
<div>
    <div id="profile" class="flex flex-col items-center" >
        <img class="w-3/5" src="~/assets/images/profile.png" alt="">
        <h1 class="text-2xl font-semibold mt-2">{{name}}</h1>
        <span class="">{{status}}</span>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            name: "Emiko Johansson",
            status: "Fullstack-systemutvecklare"
        }
    }
}
</script>