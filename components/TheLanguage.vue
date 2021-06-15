<template>
    <div id="language">
        <!--<h1 class=" items-center text-xl">Språk</h1>-->
        <ol class="mt-2">
            <li 
                v-for="language in languages"
                :key="language.name"
                class="text-sm"
            >
            {{language.name}}: {{language.level}}
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    data() {
        return {
            languages:[
                {name: 'Svenska', level: 'Flytande'},
                {name: 'Engelska', level: 'Goda kunskaper'},
                {name: 'Japanska', level: 'Modersmål'}
            ]
        }
    },
}
</script>