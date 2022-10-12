
<script>
    import en from '@/assets/json/en/navbar.json'
    import es from '@/assets/json/es/navbar.json'
    import NavLink from '@/components/NavLink.vue'
    import { computed } from '@vue/reactivity'
    import { useRoute } from 'vue-router'
    
    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            const route = useRoute();
            const currentPage = computed(() => route.name)
            const json = (props.lang === 'en') ? en : es
            const pages = Object.keys(json);
            return {json, currentPage, pages}
        },
        components: { NavLink },
        data(){
            return {
                checked: ''
            }
        }
    }
</script>

<template>
    <div :class="{shown: checked}">
    <div class="coverBar">
        <div v-if="!checked" class="currentPage">
            <div v-if="currentPage && pages.includes(currentPage)">
            <font-awesome-icon :icon="json[currentPage].icon"/> &nbsp; {{json[currentPage].name}}
            </div>
            <div v-else-if="!pages.includes(currentPage)">
                Uh oh! @.@"
            </div>
            <div v-else>
            <font-awesome-icon :icon="json['home'].icon"/> &nbsp; {{json['home'].name}}
            </div>
        </div>
        
        <input v-model="checked" type="checkbox" id="check"/>
        <label for="check" class="hamburgerMenu">
            <font-awesome-icon id="MenuIcon" icon="chevron-left"/>
        </label>
    </div>
    <div class="navBar">
        <NavLink v-for="data in json" :page="data.page" :icon="data.icon" :name="data.name"/> 
    </div>
    </div>
</template>

<style scoped>
.navBar {
  display: flex;
  justify-content: center;
  background-color: var(--darkblue);
  height: 30px;
  transition: all .5s;
}
.navLink {
  padding: 0;
  margin: 0;
  line-height: 30px;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  display: block;
  text-align: center;
  color: #f0f0f0 !important;
  font-weight: bold;
  text-decoration: none;
  width: 15vw;
  height: 30px;
}
.navLink:hover{
  background-color: rgb(0, 0, 104);
}
.navLink.active {
  font-weight: bolder;
  background-color: #f0f0f0;
  color:var(--darkblue) !important;
}
.coverBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--darkblue);
    height: 0px;
    visibility: hidden;
    width: 100vw;
}
.currentPage {
    position: relative;
    left: 40%;
    color:#f0f0f0 !important;
    font-size: larger;
    font-weight: bold;
    line-height: 30px;
    float: center;
}
.hamburgerMenu {
    position: relative;
    left: 50px;
    margin-left: auto;
    font-size: 20px;
    color: #f0f0f0;
    line-height: 30px;
    cursor: pointer;
    display: none;
    border-radius: 100px;
    width: 100px;
    height: 30px;
    background-color: var(--darkred);
}
#MenuIcon {
    position: relative;
    right: 25%;
}
#check{
    display: none;
}

@media only screen and (max-width: 640px){
    .coverBar{
        visibility: visible;
        height: 30px;
    }
    .navBar {
        visibility: collapse;
        height: 0px;
    }
    .navLink {
        text-align: justify;
        padding-inline-start: 40%;
        visibility: collapse;
    }
    .hamburgerMenu{
        display: block;
    }
    #MenuIcon {
        transition: all .5s;
    }
    .shown #MenuIcon {
        rotate: -90deg;
    }

    .shown .navLink {
        width: 100%;
        font-size: larger;
        visibility: visible;
    }
    .shown .coverBar {
        height: 10px;
    }
    .shown .navBar {
        display: block;
        height: max-content;
        padding: 0px 0 10px 0;
        visibility: visible;
    }
    .shown.navContainer{
        height: max-content;
    }
}
</style>


