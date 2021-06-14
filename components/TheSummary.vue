<template>
    <div class="flex flex-col items-center">
        <h1 class="text-xl ">Sammanfattning</h1>
        <span class="text-sm mt-1 break-words font-bold">{{text}}</span>
        <span class="text-sm mt-2 break-words">{{subtext}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text:"Kandidat på Mittuniversitetet, Informatik med inriktning systemutveckling, 180 hp.",
            subtext:"Jag letar efter ett jobb som backend eller fullstack systemutvecklare."
        }
    },
}
</script>