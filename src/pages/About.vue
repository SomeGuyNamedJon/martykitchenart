<script>
    import en from '@/assets/json/en/about.json'
    import es from '@/assets/json/es/about.json'
    import enContact from '@/assets/json/en/contact.json'
    import esContact from '@/assets/json/es/contact.json'
    
    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            const json = (props.lang === 'es') ? es : en
            const contact = (props.lang === 'es') ? esContact : enContact
            return {json, contact}
        },
    }
</script>

<template>
<div class="MainView">
    <div class="LeftImage">
        <img id="side" src="@/assets/photos/aboutside.jpeg"/>
    </div>
    <div class="AboutBox">
        <div class="blurb">
            <h1>{{json.title}}</h1>
            <p>{{json.b1}}</p>
            <br/>
            <h5>{{json.b2}}</h5>
        </div>
    </div>
    <div class="HoursBox">
        <div class="blurb">
            <h1>{{json.h_title}}</h1>
            <h2>{{json.h_subtitle}}</h2>
            <ul>
                <li>{{json.h_l1}}</li>
                <li>{{json.h_l2}}</li>
                <li>{{json.h_l3}}</li>
            </ul>
            <RouterLink to="/contact"><button>{{json.btn}}</button></RouterLink>
        </div>
        <div class="contactInfo">
            <h2>{{contact.phone}}</h2>
            <h2>{{contact.email}}</h2>
        </div>
    </div>
</div>
</template>

<style scoped>
.MainView{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "LeftImage AboutBox"
        "HoursBox HoursBox";
}
.LeftImage{
    grid-area: LeftImage;
    overflow: hidden;
    max-height: 60vw;
}
#side {
    position: relative;
    max-height: 100%;
    min-width: 200%;
}
.AboutBox{
    grid-area: AboutBox;
    display: flex;
}
.HoursBox{
    position: relative;
    grid-area: HoursBox;
    display: flexbox;
}
.contactInfo{
    position: absolute;
    height: max-content;
    text-align: right;
    bottom: 50px;
    right: 75px;
    font-weight: lighter;
    font-size: 1.5vw;
}
.blurb h5 {
    font-size: 1em;
}
.blurb > p, ul {
    font-size: 1.5em;
}
@media only screen and (max-width: 640px) {
    .MainView{
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content min-content;
        grid-template-areas:     
            "AboutBox"
            "LeftImage"
            "HoursBox"; 
    }
    .contactInfo{
        position: relative;
        bottom: 0;
        right: 0;
        padding-top: 0;
        margin-top: 0;
        text-align: center;
        font-size: 3.5vw;
    }
    #side {
        width: 100%;
    }
    .blurb h1{
        font-size: 5em;
    }
    .blurb h2{
        font-size: 5em;
    }
    .blurb h5{
        font-size: 2.2em;
    }
    .blurb p, ul{
        font-size: 3.2em;
    }
    button{
        font-size: 2.5em;
    }
}
</style>