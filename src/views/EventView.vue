<template>
  <div class="backgroundImg">
    <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '35vh' }">
      <div>
        <h1 class="text-h3 font-weight-bold">Event</h1>
        <h3 class="text-h6 font-weight-bold font-italic">Större event och upplevelser</h3>
      </div>
    </div>
  </div>

  <thead>
    <tr>
      <th class="text-left"></th>
      <th class="text-left"></th>
    </tr>
  </thead>
  <v-container fluid>
    <tbody>
      <tr v-for="item in Event" :key="item.name">
        <td>
          <h2>{{ item.name }}</h2>
        </td>
        <td>
          <h2>Datum {{ item.date }}</h2>
        </td>
        <td>{{ item.description }}</td>
      </tr>
    </tbody>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      Event: [
        {
          name: 'Fire festival 2',
          date: '16/6',
          description:
            'Efter en än gång, efter ett långt uppehåll, är vi glada att bjuda in er till en härlig kväll hos oss, Vi lovar utsökt mat, spektakulära sovplatser och sveriges bästa artister!',
        },
        {
          name: 'Ice ventura',
          date: '28/6',
          description:
            'I Ice ventura Cirkörs föreställning Knitting Peace hänger vi oss fullständigt åt svårlösta knutar och evighetsmaskor i ett scenrum fyllt av garn, trassel, linor och trådar. ',
        },
        {
          name: 'Eclair event',
          date: '14/7',
          description:
            'upplevelsen börjar redan i entrén och hos oss är det du som är kvällens mittpunkt. I ditt besök hos oss ingår en lyxig meny, komponerad av vår köksmästare efter säsongens råvaror. Våra stjärnor serverar er en rad olika rätter under kvällen där ambitionen är att överraska och överträffa era förväntningar.',
        },
        {
          name: 'Tommy Järvheden',
          date: '15/8',
          description:
            'Tommy Järvheden är Sveriges roligaste musikartist, (tidigare vald till landets roligaste komiker). Ni har sett honom i ”Så ska det låta” och hundratals andra nöjesprogram men framförallt är det på livescenen han briljerar.',
        },
        {
          name: 'Clothes on the Beach ',
          date: '25/10',
          description:
            'Efter starten 1988 och debut-EP:n 1989 räknas Norrköpingsbandet Sonic Surf City som en av pionjärerna i sin genre som blandar surfharmonier à la the Beach Boys & tidiga Barracudas med old school punk som The Undertones och hip hop',
        },
        {
          name: 'Burning Women',
          date: '14/11',
          description:
            'Bruno rockar äntligen loss på en efterlängtad turné! 2021 fyllde duon konserthus efter konserthus med en bejublad show som få kommer att glömma. Nu är det dags igen att, tillsammans med sitt fantastiska band, ösa på för fullt i ett stort antal städer runtom i Sverige!',
        },
        {
          name: 'Magnus bengtner',
          date: '24/12',
          description:
            '2016 efter ännu en slutsåld turné gick Magnus bengtner i välförtjänt pension från den svenska standupscenen. Pausen blev dock kortvarigare än planerat då både publikens efterfrågan och Magnus egen längtan blev allt för stor. 2019 stod han åter på scen, bättre än någonsin. ',
        },
      ],
    };
  },
};
</script>

<style scoped>
tbody {
  margin: 25px 0px;
  background: yellow;
  position: relative;
  top: 0;
  left: 0;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  text-align: left;
  max-width: 60vw;
}
td {
  text-align: left;
  padding: 25px 25px 25px 0;
  border-bottom: solid black 1px;
}
tr {
  text-align: left;
  width: 100%;
}

.backgroundImg {
  background-image: url('../assets/event.jpg');
  width: 100%;
  margin-top: 20px;
  height: 600px;
  background-position: center;
  background-size: cover;
  font-size: 1.3rem;
  display: block;
  flex-direction: Block;
  align-items: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 5rem;
}

.closeBy {
  background-image: url('../assets/spa-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 7rem;
  width: 100%;
}

.closeByOverlayer {
  background-color: rgba(250, 250, 250, 0.903);
  width: 100%;
  height: 100%;
}

.v-container {
  max-width: 60vw;
}

@media only screen and (max-width: 960px) {
  .v-container {
    max-width: 100vw;
  }
}
</style>
