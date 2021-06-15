<template>
<div>
    <h2 class="mt-2 font-semibold">{{contents.title}}</h2>
    <ul class="list-inside">
        <li
            v-for="content in contents.list"
            :key="content.id"
            class="text-sm"
        >
            {{content}}
        </li>
    </ul>
</div>
</template>
<script>
export default {
    props:{
        contents:{
            type: Object,
            required: true
        }
    }
}
</script>