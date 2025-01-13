import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Icon1 from "../Assets/mail.png";
import Icon2 from "../Assets/phone.png";
import Icon3 from "../Assets/locate.png";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    

        const serviceId = 'service_a6wcvqo';
        const templateId = 'template_64qzzl4';
        const publicKey = 'dZ0hSh6xkfevJAlBb'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Dare Ojepe',
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response.statusText);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        })
        .catch((error) => {
            console.log('Error Sending Email', error.text);
        });
      };

      const    showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Message Sent",
            icon: "success",
            confirmButtonText: "OK",
          });
    }
    

  return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>

        <Content>
            <Text>FIND US HERE</Text>
            <MapHolder>
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=163%20Muyibi%20Street%20Olodi%20Apapa%20lagos+(J.%20SMART%20LOUNGE)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </MapHolder>
            <ContactHold>
                <ContactWrap>
                    <Left>
                        <Header>WE ARE AVAILABLE 24/7</Header>
                        <p>
                            J. SMART ENTERTAINMENT
                        </p>
                        <ContHold>
                            <div style={{marginRight:"10px"}}><img src={Icon1} height='15px' alt='Email' /></div>
                            <div style={{marginTop:'-22px'}}>
                                <h3>Chat with us</h3>
                                <p>jsmartentertainmentlimited@gmail.com</p>
                            </div>
                        </ContHold>
                        <ContHold>
                            <div style={{marginRight:"10px"}}><img src={Icon2} height='15px' alt='Email' /></div>
                            <div style={{marginTop:'-22px'}}>
                                <h3>Phone</h3>
                                <p>+234 8030520991</p>
                            </div>
                        </ContHold>
                        <ContHold>
                            <div style={{marginRight:"10px"}}><img src={Icon3} height='15px' alt='Email' /></div>
                            <div style={{marginTop:'-22px'}}>
                                <h3>Address</h3>
                                <p>J. SMART LOUNGE</p>
                                <p>163 MUYIBI STREET, BESIDE DELIGHT INTERNATIONAL SCHOOL, OLODI APAPA, LAGOS</p>
                            </div>
                        </ContHold>
                    </Left>
                    <Right>
                        <Header>You Can Send a Direct Message</Header>
                        <InputHolder ref={form} onSubmit={sendEmail}>
                            <InputSection>
                                <label>Your Name</label><br/><input  type='text' value={name} name='name' required onChange={(e) => setName(e.target.value)}/>
                            </InputSection>

                            <InputSection>
                                <label>Your Email</label><br/> <input type='email' value={email} name='email' required onChange={(e) => setEmail(e.target.value)}/>
                            </InputSection>

                            <InputSection>
                                <label>Subject</label><br/> <input  type='text' value={subject} name='subject' required onChange={(e) => setSubject(e.target.value)}/>
                            </InputSection>
                            
                            <InputSection>
                                <label>Message</label><br/> <textarea  type='text' value={message} name='message' required onChange={(e) => setMessage(e.target.value)}/>
                            </InputSection>
                            
                            {name && email && subject && message ? (
                                <Btn type="submit"  />):(<button>Submit</button>)}
                                {/* /onClick={showAlert} */}
                                {/* value="Send" */}
                        </InputHolder>
                    </Right>
                </ContactWrap>
            </ContactHold>
            
        </Content>
    </>
  )
}

export default Contact;

const Content = styled.div`
    width:100%;
    min-height:100vh;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Btn = styled.input`
    width:120px;
    border:none;
    outline:none;
    height:40px;
    border-radius:7px;
    color:#ffff;
    background-color:#3AB54A;
    margin-top:10px;
    transition:all 590ms;
    transform:scale(1);

    :hover{
        cursor:pointer;
        transform:scale(1.10)
    }
    @media screen and (max-width: 650px){
        margin-bottom: 40px;
    }
`

const MapHolder = styled.div`
    width: 90%;
    height: 450px;
    border: 1px solid whitesmoke;
    margin: 15px 0 15px 0;
    border-radius: 8px;

    @media screen and (max-width: 425px){
        height: 350px;
        width: 95%;
    }
`
const Text = styled.div`
    font-size: 25px;
    font-weight: bold;
    width: 90%;
    margin-top: 20px;
    
    @media screen and (max-width: 425px){
        width: 95%;
    }
`
const ContactHold = styled.div`
    width: 100%;
    margin-bottom: 40px;
    margin-top: 40px;
    background-color: #171724;
    display: flex;
    justify-content: center;
    padding: 50px 0 50px 0;

    @media screen and (max-width: 650px){
        margin-top: 20px;
    }
`

const ContactWrap = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: white;

    @media screen and (max-width: 1024px){
        justify-content: center;
    }

    @media screen and (max-width: 650px){
        width: 95%;
        justify-content: center;
        margin-left: 10px;
    }
`

const Left = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;

    p{
        width: 300px;
    }

    @media screen and (max-width: 650px){
        width: 100%;
    }
`
const Right = styled.div`
    width: 500px;

    @media screen and (max-width: 650px){
        margin-top: 40px;
        width: 100%;
    }
`
const Header = styled.div`
    font-size:30px;
    margin-bottom: 15px;

    @media screen and (max-width: 425px){
        font-size: 20px;
    }
`
const ContHold = styled.div`
    display: flex;
    width: 300px;

    h3{
        color: white;
    }
    p{
        width: 100%;
    }

    span{
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media screen and (max-width: 650px){
        width: 90%;
        justify-content: flex-start;
    }
`
const InputHolder = styled.form`
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 500px;
    align-items: center;

    Button{
        height: 40px;
        width: 184px;
        border-radius: 8px;
        background-color: #25AAE2;
        color: white;
    }

    @media screen and (max-width: 850px){
        width: 100%;
        justify-content: center;

        Button{
        margin-top: 20px;
        }
    }
    
`

const InputSection = styled.div`
    width: 100%;

    input{
        height: 45px;
        width: 450px;
        border-radius: 8px;
        outline: none;
        color: black;
    }

    input:invalid:focus::placeholder{
        opacity: 1;
    }

    textarea{
        height: 175px;
        width: 450px;
        border-radius: 8px;
        color: black;
        outline: none;
    }

    @media screen and (max-width: 850px){
        margin-top: 15px;
    }    

    @media screen and (max-width: 650px){

        input{
            width: 95%;
        }

        textarea{
            width: 95%;
        }
    }
`
