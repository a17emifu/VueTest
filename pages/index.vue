<template>
<div class="w-3/5 mt-6">
<Histories :content= jobbHistory />
<Histories :content= educationHistory />
</div>


</template>
<script>
export default {
  data() {
    return {
      jobbHistory:{
        icon: "suitcase" ,
        title:"Arbetslivserfarenhet",
        details:[
          {
            name:"GG Media",
            subtext:"Redaktör",
            date:"2017-2019",
            description:"Distansjobb för ett japanskt företag som publicerar digitala nyheter om mode och skönhet. Korrekturläste artiklar och undervisade författare i hur de ska skriva bättre."
          },
          {
            name:"Inflight Service Production Sweden AB",
            subtext:"Lagerarbete",
            date:"2017",
            description:"Sommarvikariat. Plockade varor för taxfree-butiker. Stort fokus på både noggrannhet och tempo."
          },
          {
            name:"Japanese-live.com",
            subtext:"Japansklärare",
            date:"2012-2014",
            description:"Distansjobb. Undervisade elever i japanska genom videosamtal. Innehåll för lektionerna var samtal, grammatik, läsning samt analys av filmer, böcker m.m."
          },
        ]
      },
      educationHistory:{
        icon:"graduation-cap",
        title: "Utbildning",
        details:[
          {
            name:"Mittuniversitetet",
            subtext:"Informatik med inriktning systemutveckling, 180 hp",
            date:"2018-2021",
            description:""
          },
          {
            name:"Högskolan i Skövde",
            subtext:"Webbutvecklare - Programmering, 180 hp",
            date:"2017-2018",
            description:"* Bytte skola för att rikta in mig på systemutveckling istället."
          },
          {
            name:"Vuxenutbildning Skövde",
            subtext:"Svenska som andraspråk och engelska",
            date:"2015-2016",
            description:""
          },
          {
            name:"SFI i Skara",
            subtext:"Svenska för invandrareD",
            date:"2014-2015",
            description:""
          },
          {
            name:"KEC Japanese Language Institute",
            subtext:"Utbildning för japansklärare. Japan, Kyoto",
            date:"2011-2013",
            description:""
          },
          {
            name:"Yokohama Midorigaoka-gymnasiet",
            subtext:"Japansk Gymnasiumutbildning. Japan, Kanagawa",
            date:"2007-2010",
            description:""
          },
        ]
      }
    }
  },
}
</script>

