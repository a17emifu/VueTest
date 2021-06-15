<template>
    <div class="flex justify-center">

        <div class="w-1/5 text-right mr-3">
            <span class="text-lg">{{detail.date}}</span>
        </div>

        <div class="flex flex-col w-4/5">
            <h2 class="text-lg">{{detail.name}}</h2>
            <span class="text-gray-400 text-sm">{{detail.subtext}}</span>
            <p class="mt-1 text-sm">{{detail.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        detail:{
            type: Object,
            required: true
        }
    }
}
</script>