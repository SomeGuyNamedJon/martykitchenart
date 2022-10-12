
<script>
    import en from '@/assets/json/en/navbar.json'
    import es from '@/assets/json/es/navbar.json'
    import NavLink from '@/components/NavLink.vue'
    
    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            const json = (props.lang === 'en') ? en : es
            return {json}
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

.coverBar {
    background-color: var(--darkblue);
    height: 0px;
    visibility: hidden;
    overflow: hidden;
    width: 100vw;
}
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
.hamburgerMenu {
    position: relative;
    left: 90%;
    font-size: 20px;
    color: #f0f0f0;
    line-height: 30px;
    cursor: pointer;
    display: none;
    border-radius: 100px;
    max-width: 100px;
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
        padding-inline-start: 42%;
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


