<script>
    import en from '@/assets/json/en/home.json'
    import es from '@/assets/json/es/home.json'
    
    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            const json = (props.lang === 'es') ? es : en
            return {json}
        },
    }
</script>

<template>
<div class="MainView">
    <div class="KitchenImage">
        <img id="banner" src="@/assets/photos/homebanner.webp"/>
    </div>
    <div class="Title">
        <h1>{{json.title}}</h1>
        <h2>{{json.subtitle}}</h2>
    </div>
    <div class="MainText">
       <div class="blurb">
        <h2>{{json.b_title}}</h2>
        <p>{{json.blurb}}</p>
        <RouterLink to="/about"><button>{{json.btn}}</button></RouterLink>
       </div>
    </div>
    <div class="SideImage">
        <img id="side" src="@/assets/photos/homeside.webp"/>
    </div>
</div>
</template>

<style scoped>
.blurb h2{
    color: var(--darkblue);
}
.blurb p{
    font-size: 2vw;
}
.MainView{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr min-content min-content;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
     "KitchenImage KitchenImage" 
     "Title Title"
     "MainText SideImage";
}
.Title{
    grid-area: Title;
}
.MainText{
    grid-area: MainText;
    display: flex;
}
.KitchenImage{
    grid-area: KitchenImage;
    max-height: 40vw;
    overflow: hidden;
}
.SideImage{
    grid-area: SideImage;
    max-height: 50vw;
    overflow: hidden;
}
#banner{
    position: relative;
    bottom: 60%;
    max-height: 200%;
    width: 100%;
}
#side{
    position: relative;
    right: 45%;
    max-height: 100%;
    min-width: 200%;
}
@media only screen and (max-width: 640px){
    .MainView{
        grid-template-rows: min-content min-content min-content min-content;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "KitchenImage"
            "Title"
            "SideImage"
            "MainText";
    }
    .Title h1 {
        margin-top: 0;
        font-size: 3.5em;
    }
    .Title h2 {
        font-size: 2em;
    }
    .KitchenImage{
        max-height: 200px;
    }
    .SideImage{
        max-height: 200px;
    }
    #side{
        width: 100%;
        right: 0;
    }
    .blurb h2 {
        font-size: 6vw;
    }
    .blurb p {
        font-size: 3em;
    }
    button {
        font-size: 2.5em;
    }
}
</style>