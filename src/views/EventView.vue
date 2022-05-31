<template>
<div class="backgroundImg">
    <div class="d-flex justify-center text-white text-center align-center" :style="{ height: '35vh' }">
      <div>
        <h1 class="text-h3 font-weight-bold">SPA OCH MASSAGE</h1>
        <h3 class="text-h6 font-weight-bold font-italic">Massage, yoga, bad och bastu</h3>
        
      </div>
    </div>
    <SpaForm />
  </div>

      <thead>
        <tr>
          <th class="text-left">
            
          </th>
          <th class="text-left">
            
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in Event"
          :key="item.name"        >
          <td>{{ item.name }}</td>
          <td>Datum {{ item.date }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </template>



<script>
  export default {
    data () {
      return {
        Event: [
          {
            name: 'Fire fly festival',
            date: "6/6",
            description: "Den 6 juni Lör vi igång med våran firefly festival, med band av olika grupper som kommer spela olika instrument och trummor, ni får tänka att denna text kommer att ändras senare alltså, så chilla lite! ",
          },
          {
            name: 'Ice ventura',
            date: "28/6",
            description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
          },
          {
            name: 'Eclair event',
            date: "14/7",
            description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
          },
          {
            name: 'The Cupcake',
            date: "5/8",
            description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
          },
          {
            name: 'Bully Beach ',
            date: "25/10",
            description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
          },
          {
            name: 'Burning Women',
            date: "4/11",
            description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
          },
          {
            name: 'Winter Festival',
            date: "24/12",
            description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
          },
        ],
      }
    },
  }
</script>

<style scoped>
tbody{
    margin: 0;
    background: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-color: lightblue;
    font-family: Arial, Helvetica, sans-serif;
    border: solid;
    width: 85%;
    display: inline-block;
    justify-content: center;
    text-align: left;
}
td{
    text-align: left;
    padding: 50px 10px 50px 10px;
    

}
tr{
    text-align: left;
    width: 100%;

}

.backgroundImg {
  background-image: url('../assets/spa-background.jpg');


   width: 100%;
  margin-top: 20px;
  height: 600px;
  background-position: center;
  background-size: cover;

  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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