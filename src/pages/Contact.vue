<script>
    import en from '@/assets/json/en/contact.json'
    import es from '@/assets/json/es/contact.json'
    import ContactForm from '@/components/ContactForm.vue'
    
    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            const lang = props.lang
            const json = (props.lang === 'es') ? es : en
            return {json, lang}
        },
        components: { ContactForm }
    }
</script>

<template>
<div class="MainView">
    <div class="SideImage">
        <img id="side" src="@/assets/photos/contactside.webp"/>
    </div>
    <div class="ContactForm">
        <div class="contactHead">
            <h1>{{json.title}}</h1>
            <p>{{json.subtitle}}</p>
            <h3>San Antonio, TX</h3>
        </div>
        <ContactForm :lang="lang"/>
    </div>
    <div class="Info">
        <h2>{{json.email}}</h2>
        <h2>{{json.phone}}</h2>
    </div>
</div>
</template>

<style scoped>
.ContactForm{
    grid-area: ContactForm;
    display: block;    
    margin: 2vw 4.5vw;
}

.Info{
    grid-area: Info;
    background-color: var(--darkblue);
    color: #f0f0f0;
}
.contactHead{
    text-align: left;
}
.contactHead p{
    font-size: 1.2em;
}
.MainView{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "SideImage ContactForm"
        "Info Info";
    
}
.SideImage{
    grid-area: SideImage;
    overflow: hidden;
    max-height: 100%;
}
#side{
    min-width: 100%;
}
@media only screen and (max-width: 1080px){
    .MainView{
        grid-template-columns: 1fr 2fr;
    }
}
@media only screen and (max-width: 700px){
    .MainView{
        grid-template-columns: 1fr 3fr;
    }
}

@media only screen and (max-width: 650px) {
    .MainView{
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr min-content;
        grid-template-areas: 
        "ContactForm"
        "SideImage"
        "Info";
    }
    .SideImage{
        max-height: 300px;
    }
    #side{
        position: relative;
        bottom: 150%;
    }
}
@media only screen and (max-width: 410px) {
    .contactHead h1{
        font-size: 12vw;
    }
    .Info h2{
        font-size: 7vw;
    }
}
</style>