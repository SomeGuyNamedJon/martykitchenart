<script>
    import en from '@/assets/json/en/main.json'
    import es from '@/assets/json/es/main.json'
    import NavBar from '@/components/NavBar.vue'
    
    export default{
        setup(){
          return {en, es}
        },
        data(){
          //langFlag: true == 'en', false == 'es' 
          return {
            langFlag : true
          }
        },
        methods: {
          handleToggle() {
            this.langFlag = !this.langFlag;
          }
        },
        components: { NavBar }
    }
</script>

<template>
 <div class="PageView">

  <div class="Header">
    <button class="langToggle" @click="handleToggle">
      <div v-if="langFlag">🇺🇸 EN</div>
      <div v-if="!langFlag">🇲🇽 ES</div>
    </button>
    <img src="@/assets/martykitchenart.svg" height="100" id="Logo"/>
    <h2 v-if="langFlag">{{en.slogan}}</h2>
    <h2 v-if="!langFlag">{{es.slogan}}</h2>
  </div>
  
  <NavBar v-if="langFlag" lang="en"/>
  <NavBar v-if="!langFlag" lang="es"/>

  <div class="RouterView">
    <RouterView v-if="langFlag" lang="en"/>
    <RouterView v-if="!langFlag" lang="es"/>
  </div>

  <p class="Footer" v-if="langFlag">{{en.footer}}</p>
  <p class="Footer" v-if="!langFlag">{{es.footer}}</p>
  <div class="BottomFill"></div>
 </div>
</template>

<style>
.BottomFill{
  display: flex;
  flex-grow: 1;
  background-color: var(--darkblue);
}

#Logo{
  display: inline-block;
  margin-top: 2vw;
}

.langToggle {
  position: fixed;
  z-index: 999;
  right: 5vw;
  top: 10px;
  min-width: 7vw;
  padding: 5px;
  font-size: large;
  outline-color: #f0f0f0;
  outline-style: solid;
}

.PageView {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: min-content min-content max-content min-content;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "Header"
    "NavBar"
    "RouterView"
    "Footer";
}

.RouterView {
  grid-area: RouterView;
}

.NavBar{
  grid-area: NavBar;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 998;
}

.Header {
  grid-area: Header;
  color: var(--var(--darkblue));
  max-height: min-content;
}
.Header h2 {
  font-size: 1.5em;
}

.Title h1 {
  font-size: 6vw;
}
.Title h2{
    color: var(--darkred);
    font-size: 3vw;
    font-weight: 700 !important;
}
.Footer {
  grid-area: Footer;
  background-color:var(--darkblue);
  color: #f0f0f0;
  margin: 0;
  font-size: 15px;
}
.blurb{
  display: block;
  text-align: left;
  padding: 3vw;
  margin: 1vw;
  font-size: 1.5vw;
  max-width: fit-content;
}

h1 {
  font-family: Erica One, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; 
}

.blurb h2 {
  font-weight: 700 !important;
  font-size: 3em;
}
</style>