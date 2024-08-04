import axios from 'axios';
import React, { useState } from 'react'
import { DiHtml53dEffects } from 'react-icons/di';
import { toast } from 'react-toastify';

const MessageForm = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("")

  const handleMessage = async (e) =>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/message/send",{firstName,lastName,phone,email,message},{withCredentials: true,
      headers:{
        "Content-Type": "application/json",
        },
    }
  ).then((res)=>{
    toast.success(res.data.message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  });
    } catch (error) {
     toast.error(error.response.data.message); 
    }
  };
  return (
    <div className='message1-box1'>
      <h2>MESSAGE-BOX</h2>
      <p className='hello3'>
📞 **Report any affected dogs to us via the message box below.**
Your prompt action can make a significant difference in their health and safety.Thank you for your vigilance and support!</p>

      <form onSubmit={handleMessage} className='form-group'>
        <div>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}  className='input2' />
          <input  type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}  className='input2'   />
        </div>
        <div>
        <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} className='input2' />
        <input  type="number" placeholder="Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)} className='input2' />
        </div>
        <textarea rows={7} placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)} className='textarea1' ></textarea>
        <div className='register1'  style={{justifyContent: "center", alignItems: "center"}}>
          <button type="submit" className='button4'>SEND</button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm