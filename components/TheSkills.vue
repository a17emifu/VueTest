<template>
    <div>
        <h1 class=" items-center text-xl">Kompetenser</h1>
        <Skill :contents= backends />
        <Skill :contents= databas />
        <Skill :contents= frontends />
        <Skill :contents= devs />
    </div>
</template>
<script>

export default {
    data() {
        return {
            backends: {
                title: "Backend",
                list:['C#','.NET','.NET Core MVC','API-utveckling','SOLID','Clean Code']
            },
            databas: {
                title: "Databas",
                list:['MySQL', 'PostgreSQL', 'MS SQL']
            },
            frontends: {
                title: "Frontend",
                list:['Vue.js','Nuxt.js','JQuery','Tailwindcss','Bootstrap','Figma']
            },
            devs: {
                title: "Utveckling",
                list:['Agil utveckling','Git','Kravspecifikation','Prototyp','Acceptanstest']
            }
        }
    }
}

</script>