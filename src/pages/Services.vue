<script>
    import en from '@/assets/json/en/services.json'
    import es from '@/assets/json/es/services.json'
    
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
    <div class="Title">
        <h1>{{json.title}}</h1>
        <h2>{{json.subtitle}}</h2>
    </div>
    <div class="LeftText">
        <div class="blurb">
            <h2>{{json.lt_title}}</h2>
            <p>{{json.lt_blurb}}</p>
        </div>
    </div>
    <div class="MiddleImage">
        <img id="mid" src="@/assets/photos/servicesmiddle.jpg"/>
    </div>
    <div class="RightText">
        <div class="blurb">
            <h2>{{json.rt_title}}</h2>
            <p>{{json.rt_blurb}}</p>
        </div>
    </div>
    <div class="LeftImage">
        <img id="left" src="@/assets/photos/servicesleft.webp"/>
    </div>
    <div class="MiddleText">
        <div class="blurb">
            <h2>{{json.mt_title}}</h2>
            <p>{{json.mt_list}}</p>
            <ul>
                <li>{{json.mt_l1}}</li>
                <li>{{json.mt_l2}}</li>
                <li>{{json.mt_l3}}</li>
            </ul>
        </div>
    </div>
    <div class="RightImage">
        <img id="right" src="@/assets/photos/servicesright.webp"/> 
    </div>
    <div class="ContactUs">
        <h1>{{json.contact}} <font-awesome-icon icon="caret-right"/></h1>
    </div>
    <div class="Button">
        <RouterLink to="/contact"><button>{{json.btn}}</button></RouterLink>
    </div>
</div>
</template>

<style scoped>
.MainView{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content min-content min-content min-content;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        "Title Title Title"
        "LeftImage MiddleText RightImage"
        "LeftText MiddleImage RightText"
        "ContactUs ContactUs Button";
    
}    
.Title{
    grid-area: Title;
}
.MiddleText{
    background-color: var(--darkblue); 
    grid-area: MiddleText; 
}
.LeftText{
    grid-area: LeftText;
    background-color: var(--darkblue); 
}
.RightText{
    grid-area: RightText;
    background-color: var(--darkblue); 
}
.ContactUs{ 
    grid-area: ContactUs;
    background-color: var(--darkblue);
    color: #f0f0f0;
    font-size: 1.25vw; 
    padding: 5px;
}
.Button{
    grid-area: Button;
    background-color: var(--darkblue);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
button{
    width: 25vw;
    border-radius: 100px;
    font-size: 40px;
    color: var(--darkblue);
    background-color: #f0f0f0;
}
button:hover{
    background-color: #e0e0e0;
}
.blurb{
    color: #f0f0f0;
}

.blurb h2{
    line-height: 1.0125;
}
.blurb p, ul{
    font-size: 1.5em;
}
.LeftImage{ 
    grid-area: LeftImage; 
    overflow: hidden;
    max-height: 50vw;
}
.RightImage{ 
    grid-area: RightImage; 
    overflow: hidden;
    max-height: 50vw;
}
.MiddleImage{
    grid-area: MiddleImage;
    overflow: hidden;
    max-height: 60vw;
}
#left{
    position: relative;
    min-height: 100%;
    width: 200%;
}
#right{
    position: relative;
    max-height: 100%;
    min-width: 100%;
    bottom: 0;
}
#mid{
    position: relative;
    min-height: 100%;
    min-width: 200%;
    right: 70%;
    bottom: 0;
}
@media only screen and (max-width: 640px){
    .MainView{
        grid-template-rows: min-content min-content 1fr min-content 1fr min-content 1fr min-content;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "Title"
            "LeftImage"
            "MiddleText"
            "RightImage"
            "LeftText"
            "MiddleImage"
            "RightText"
            "ContactUs"
            "Button";
    }
    .Title h1{
        font-size: 2.5em;
    }
    .Title h2{
        font-size: 1.75em;
    }
    .LeftImage, .RightImage{
        max-height: 50vw;
    }
    .MiddleImage{
        max-height: 50vw;
    }
    #left{
        position: relative;
        max-height: 100%;
    }
    #right{
        position: relative;
        max-height: 200%;
        bottom: 50%;
    }
    #mid{
        position: relative;
        max-height: 200%;
        right: 22%;
        bottom: 50%;
    }
    .blurb h2{
        font-size: 4em;
    }
    .blurb p, ul{
        font-size: 3em;
    }
    .ContactUs{
        font-size: 2.25vw;
    }
    .Button{
        padding: 25px;
    }
    button{
        width: 75vw;
        font-size: 30px;
    }
}
@media only screen and (max-width: 1075px){
    button{
        font-size: 30px;
    }
}
@media only screen and (max-width: 815px){
    button{
        font-size: 25px;
    }
}
</style>