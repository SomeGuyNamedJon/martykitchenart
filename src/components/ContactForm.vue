<script>
    import en from '@/assets/json/en/form.json'
    import es from '@/assets/json/es/form.json'
    import enErr from '@/assets/json/en/errors.json'
    import esErr from '@/assets/json/es/errors.json'
    import emailjs from 'emailjs-com'

    export default{
        props: {
            lang: {type: String}
        },
        setup(props){
            emailjs.init('LVxQf-JnFb_j4Vmso');
            const json = (props.lang === 'es') ? es : en
            const err = (props.lang === 'es') ? esErr : enErr
            return {json, err}
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
                nameErr : '',
                emailErr : '',
                phoneErr : '',
                addErr : '',
                topicErr : '',
                commentErr : '',
                success : false,
            }
        },
        methods: {
            onSubmit(e){                
                e.preventDefault();
                const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                const phoneRegex = /^(\+1)?(-|\.)?(\(\d{3}\)|\d{3})(-|\.)?\d{3}(-|\.)?\d{4}$/
                var valid = true //change to true when you want to turn emails on

                //validate fields
                if(this.name == ''){
                    this.nameErr = 'null'
                    valid = false
                }else{
                    this.nameErr = ''
                }
                
                if(this.phone == ''){
                    this.phoneErr = 'null'
                    valid = false
                }else if(!phoneRegex.test(this.phone)){
                    this.phoneErr = 'invalid'
                    valid = false
                }else{
                    this.phoneErr = ''
                }

                if(!emailRegex.test(this.email) && !(this.email == '')){
                    this.emailErr = 'invalid'
                    valid = false
                }else{
                    this.emailErr = ''
                }

                if(valid){
                    var body = {
                        "name" : this.name,
                        "email" : this.email,
                        "phone" : this.phone,
                        "address" : this.address,
                        "topic" : this.topic,
                        "comment" : this.comment,
                    }
                    this.success = emailjs.send("submit_service","contact_form", body)
                    .then(function() {
                        console.log('SUCCESS!')
                        return true
                    }, function(error) {
                        console.log('FAILED...', error)
                        return false
                    })
                    if(this.email != '' && (this.topic != '' || this.comment != '')){
                        emailjs.send("submit_service", "confirmation_msg", body)
                        .then(function() {
                            console.log('SUCCESS!')
                        }, function(error) {
                            console.log('FAILED...', error)
                        })
                    }
                }
                
                if(this.success){
                    this.name = '';
                    this.email = '';
                    this.phone = '';
                    this.address = '';
                    this.topic = '';
                    this.comment = '';
                }
            } 
        }
    }
</script>

<template>
    <form ref="contact_form" @submit="onSubmit"> 
        <div id="nameBox" :class="{'form-err' : nameErr}">
            <label>{{json.name}} *</label>
            <input class="form-input" type="text" id="name" v-model="name" :placeholder="json.name_ph">
            <div class="help-block" id="nameHelp">
                <p v-if="nameErr == 'null'">{{err.name_null}}</p>
            </div>
        </div>
        <div class="form-container">
            <div id="emailBox" :class="{'form-err' : emailErr}">
                <label>{{json.email}}</label>
                <input class="form-input" type="text" id="email" v-model="email" :placeholder="json.email_ph">
                <div class="help-block" id="emailHelp">
                    <p v-if="emailErr == 'invalid'">{{err.email_invalid}}</p>
                </div>
            </div>

            <div id="phoneBox" :class="{'form-err' : phoneErr}">
                <label>{{json.phone}} *</label>
                <input class="form-input" type="text" id="phone" v-model="phone" :placeholder="json.phone_ph">
                <div class="help-block" id="phoneHelp">
                    <p v-if="phoneErr == 'null'">{{err.phone_null}}</p>
                    <p v-if="phoneErr == 'invalid'">{{err.phone_invalid}}</p>
                </div>
            </div>
        </div>

        <div id="addressBox" :class="{'form-err' : addErr}">
            <label>{{json.address}}</label>
            <input class="form-input" type="text" id="address" v-model="address" :placeholder="json.address_ph">
            <div class="help-block" id="addressHelp">
                <p v-if="addErr"></p>
            </div>
        </div>

        <div id="topicBox" :class="{'form-err' : topicErr}">
            <label>{{json.topic}}</label>
            <input class="form-input" type="text" id="topic" v-model="topic" :placeholder="json.topic_ph">
            <div class="help-block" id="topicHelp">
                <p v-if="topicErr"></p>
            </div>
        </div>

        <div id="commentBox" :class="{'form-err' : commentErr}">
            <label>{{json.msg}}</label>
            <textarea class="form-input" id="comment" v-model="comment" rows="10" :placeholder="json.msg_ph"></textarea>
            <div class="help-block" id="commentHelp">
                <p v-if="commentErr"></p>
            </div>
        </div>
        
        <button class="btn">
            <font-awesome-icon icon="circle-check"/> &nbsp;{{json.submit}}
        </button>
    </form>
    <div v-if="success" class="successBox">{{json.success}}</div>
</template>

<style scoped>
.successBox {
    border-radius: 25px;
    padding-block: 10px;
    margin: 15px 0;
    font-size: 1.25em;
    text-transform: uppercase;
    font-weight: bold;
    color: #f0f0f0;
    background-color: green;
    text-align: center;
}
.form-container{
    display: flex;
    max-width: 100%;
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