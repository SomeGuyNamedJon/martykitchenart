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
        </div>
        <ContactForm :lang="lang"/>
    </div>
    <div class="Links">
        <h2>{{json.email}}</h2>
        <h3>{{json.phone}}</h3>
    </div>
</div>
</template>

<style scoped>
.ContactForm{
    grid-area: ContactForm;
    display: block;    
    margin: 3vw;
}

.Links{
    grid-area: Links;
    background-color: var(--darkblue);
    color: #f0f0f0;
}
.contactHead{
    text-align: left;
}

.MainView{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "SideImage ContactForm"
        "Links Links";
    
}
.SideImage{
    grid-area: SideImage;
    overflow: hidden;
    max-height: 100%;
}
#side{
    min-width: 100%;
}

@media only screen and (max-width: 640px) {
    .MainView{
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr min-content;
        grid-template-areas: 
        "ContactForm"
        "SideImage"
        "Links";
    }
    .SideImage{
        max-height: 300px;
    }
    #side{
        position: relative;
        bottom: 150%;
    }
}
</style>