<script>
    import en from '@/assets/json/en/404.json'
    
    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            const json = (props.lang === 'es') ? en : en
            return {json}
        },
    }
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>{{json.title}}</h2>
            <h3>{{json.subtitle}}</h3>
        </div>
        <div class="background">
            <h1>404</h1>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    overflow: hidden;
    background-color: var(--darkblue);
    min-height: 100vh;
}
.title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    color: #f0f0f0;
    font-weight: bold;
    text-shadow: 6px 4px var(--darkblue);
    -webkit-text-stroke: 2px var(--darkblue);
}
.title h2 {
    font-size: 10em;
    padding: 0;
}

.title h3 {
    position: relative;
    bottom: 15vh;
    font-size: 4em;
}
.background {
    overflow: hidden;
    z-index: -100;
}
.background h1 {
   position: absolute;
   font-size: 50em;
   margin: 0;
   bottom: 300px;
   left: -80px;
   line-height: 0%;
   color: #f0f0f0;
}
</style>