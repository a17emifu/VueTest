<template>
    <div >
        <!--<h1 class=" items-center text-xl">Personinformation</h1>-->
        <div class="flex flex-col text-sm mt-2">
            <span>Ålder: {{age}}</span>
            <span>Civilstånd: {{status}}</span>
            <span>Pnr: {{pn}}</span>
            <span class="mt-3">Adress: {{address}}</span>

            <div class="mt-3 flex items-center">
                <font-awesome-icon :icon="['far', 'envelope']"  /><span class="ml-2">{{email}}</span>
            </div>
            <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'phone']"  /><span class="ml-2">{{tel}}</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            age:"29",
            status:"Gift",
            pn:"920128-8629",
            address: "Regementsgatan 2G 54146 Skövde",
            email:"kamonabe0@gmail.com",
            tel:"073 966 20 12"
        }
    },
}
</script>