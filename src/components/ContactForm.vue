<script>
    import en from '@/assets/json/en/form.json'
    import es from '@/assets/json/es/form.json'
    import emailjs from 'emailjs-com'

    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            emailjs.init('eE-trqXuIbiTQ-XvR');
            const json = (props.lang === 'es') ? es : en
            return {json}
        },
        name : 'ContactForm',
        data (){
            return {
                name : '',
                email : '',
                phone : '',
                address : '',
                topic : '',
                comment : '',
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()
                emailjs.send("submit_service","contact_form", this)
                    .then(function() {
                        console.log('SUCCESS!');
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.address = '';
                        this.topic = '';
                        this.comment = '';
                    }, function(error) {
                        console.log('FAILED...', error);
                    });

            } 
        }
    }
</script>

<template>
    <form id="contact-form" @submit="onSubmit"> 
        <div id="nameBox">
            <label>{{json.name}}</label>
            <input class="form-input" type="text" id="name" v-model="name" :placeholder="json.name_ph">
            <p class="help-block" id="nameHelp"></p>
        </div>
        <div class="form-container">
            <div id="emailBox">
                <label>{{json.email}}</label>
                <input class="form-input" type="text" id="email" v-model="email" :placeholder="json.email_ph">
                <p class="help-block" id="emailHelp"></p>
            </div>

            <div id="phoneBox">
                <label>{{json.phone}}</label>
                <input class="form-input" type="text" id="phone" v-model="phone" :placeholder="json.phone_ph">
                <p class="help-block" id="phoneHelp"></p>
            </div>
        </div>

        <div id="addressBox">
            <label>{{json.address}}</label>
            <input class="form-input" type="text" id="address" v-model="address" :placeholder="json.address_ph">
            <p class="help-block" id="addressHelp"></p>
        </div>

        <div id="topicBox">
            <label>{{json.topic}}</label>
            <input class="form-input" type="text" id="topic" v-model="topic" :placeholder="json.topic_ph">
            <p class="help-block" id="topicHelp"></p>
        </div>

        <div id="commentBox">
            <label>{{json.msg}}</label>
            <textarea class="form-input" id="comment" v-model="comment" rows="10" :placeholder="json.msg_ph"></textarea>
            <p class="help-block" id="commentHelp"></p>
        </div>
        
        <button class="btn">
            <font-awesome-icon icon="circle-check"/> Submit
        </button>
    </form>
</template>

<style scoped>
.form-container{
    display: flex;
}
#emailBox{
    width: 50%;
    margin-inline-end: 1vw;
}
#phoneBox{
    width: 50%
}
.form-input, .form-select{
    width: 100%;
    font-size: large;
    font-family: Asap Condensed, Helvetica, Arial, sans-serif;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    color: black;
    background-color: #f0f0f0;
    border: 2px solid black;
    border-radius: 4px;
    box-sizing: border-box;
}

.form-input:disabled {
    background-color: #444;
    border: 2px dotted #a0a0a0;
    color: #909090;
}

.form-input:focus, .form-select:focus{
    outline: 2px solid black;
}

.form-err input, .form-err textarea {
    border: 2px solid #ff2222;
}

.form-err input:focus, .form-err textarea:focus {
    outline: 2px solid #ff4343;
}

.form-err input[type=radio]:focus{
    outline: none;
}

.form-err input[type=radio] + svg{
    fill: #ff2222;
}

.form-err label{
    color: #ff2222;
}

.help-block{
    text-transform: uppercase;
    font-weight: bold;
    color: #ff2222;
    text-align: center;
}
  
.btn{
    width: 100%;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
  
form {
    border-radius: 5px;
    text-align: left;
}
</style>