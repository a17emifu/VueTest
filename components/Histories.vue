<template>
    <div>
        <div class="flex justify-center items-center">
            <div class="text-3xl">
                <font-awesome-icon :icon= content.icon />
            </div>
            <h1 class="text-2xl ml-3">{{content.title}}</h1>
        </div>
        <div class="mt-4 p-5">
            <div 
            v-for="detail in content.details"
            :key="detail.name"
            class="mb-3">
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