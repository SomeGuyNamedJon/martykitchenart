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
</div>
</template>

<style scoped>
.MainView{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        "Title Title Title"
        "LeftImage MiddleText RightImage"
        "LeftText MiddleImage RightText";
    
}    
.Title{
    grid-area: Title;
}
.MiddleText {
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
.Extra { 
    grid-area: Extra; 
}

.blurb {
    color: #f0f0f0;
}

.blurb h2 {
    line-height: 1.0125;
}
.blurb p, ul {
    font-size: 1.5em;
}
.LeftImage { 
    grid-area: LeftImage; 
    overflow: hidden;
    max-height: 40vw;
}
.RightImage { 
    grid-area: RightImage; 
    overflow: hidden;
    max-height: 40vw;
}
.MiddleImage{
    grid-area: MiddleImage;
    overflow: hidden;
    max-height: 60vw;
}
#left {
        position: relative;
        min-height: 100%;
        min-width: 200%;
    }
#right {
        position: relative;
        max-height: 100%;
        min-width: 200%;
        bottom: 0;
    }
#mid {
        position: relative;
        max-height: 100%;
        min-width: 200%;
        right: 45%;
        bottom: 0;
}
@media only screen and (max-width: 640px) {
    .MainView{
        grid-template-rows: min-content min-content 1fr min-content 1fr min-content 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "Title"
            "LeftImage"
            "MiddleText"
            "RightImage"
            "LeftText"
            "MiddleImage"
            "RightText";
    }
    .Title h1 {
        font-size: 2.5em;
    }
    .Title h2 {
        font-size: 1.75em;
    }
    .LeftImage, .RightImage {
        max-height: 50vw;
    }
    .MiddleImage{
        max-height: 50vw;
    }
    #left {
        position: relative;
        max-height: 100%;
    }
    #right {
        position: relative;
        max-height: 200%;
        bottom: 50%;
    }
    #mid {
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
    
}
</style>