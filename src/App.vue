<template>
  <header id="headerApp">
      <router-link to="/">
        <img id ="logo" 
        width ="200"
        src="./assets/images/funBankLogoFinal.png"/>
      </router-link>
    <!-- <img id ="logo" src="./assets/images/notWestpacLogoCropped.png"/> -->
    <nav id="nav">
      <router-link to="/faq">FAQs</router-link> |
      <router-link to="/homeLoan">Home Loan</router-link> |
      <router-link to="/creditCards">Credit Cards</router-link>
    </nav>
  </header>
  <router-view/>
</template>


<script>
//The below loads the components in question that are selected...
//import <component name> from <'./components/ComponentName.vue'
// import FAQ from './components/faq.vue'


export default {
  name: 'App',
  // components: { FAQ },
  // // components: {
  // //   // Insert component here to select from imported component.
  // //   // Here is where we select the component we export.
  // // }
  // data () {
  //   return {
  //     title: 'Title of the app for testing'
  //   }
  // }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  color: black;
  border-bottom: 2px solid rgb(56, 83, 50);
  display: inline-block;
  padding-bottom: 5px;
}

#nav a.router-link-exact-active {
  color: white;
  background: #62C03C;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav {
  padding: 20px 0px;
  
}

#headerApp {
  display: flex;
  justify-content: space-between;
  /* vertical-align: middle; */
  padding: 15px 5%;
}

router-link {
  color: #2c3e50;
}

</style>
