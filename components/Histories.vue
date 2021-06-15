<template>
    <div class="p-5">
        <div class="flex justify-center items-center">
            <div class="text-3xl w-1/5 text-right">
                <font-awesome-icon :icon= content.icon />
            </div>
            <div class="w-4/5">
                        <h1 class="text-2xl ml-3">{{content.title}}</h1>
            </div>

        </div>
        <div class="mt-2">
            <div 
            v-for="detail in content.details"
            :key="detail.name"
            class="mb-5">
                    <History :detail = detail />
            </div>

        </div>

    </div>
</template>
<script>
    export default {
        props:{
            content:{
                type: Object,
                required: true
            }
        }
    }
</script>