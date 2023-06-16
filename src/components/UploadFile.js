import React, { useState } from "react";
import '../CSS/uploadFile.css'
import { Input } from "reactstrap";
import { Button } from "reactstrap";
import axios from "axios";
const img=require('./up2.png')

const Axios=axios.create();

function UploadFile()
{
  
    const [image,setImage]=useState("https://res.cloudinary.com/dofftzsmf/image/upload/v1685886734/UserProfile/Social_Media_Chatting_Online_Blank_Profile_Picture_Head_And_Body_Icon_People_Standing_Icon_Grey_Background_generated_fa3o0b.jpg");
 
    const handleImage=(event)=>
    {
        console.log(event.target.files[0]);
        // console.log(event);
        const file = event.target.files[0];
        const formData=new FormData();
        formData.append("file",file);
        formData.append("upload_preset","my-uploads")
        formData.append("API_SECRET", "N6vRi9M2b8Tfwsesw1CLLQzzeHA");
        Axios.post("https://api.cloudinary.com/v1_1/dofftzsmf/image/upload",formData)
        .then((res)=>{
            setImage(res.data.url);
        }).catch((err)=>console.log(err));
    }
    return (<>
    <div className="row mt-4" style={{height:"0%"}}>
       
        <div className="col-2" >
            {/* Hello world */}
        </div>
        <div className="ml-3 col-2 col-md-6 col-sm-12 mainCotnainer mt-5" >
     
            {/* <h4 className="headingMargin mb-4">Complete Profile</h4> */}
            <img src={image} height={"250vh"} width={"250vw"} style={{borderRadius:"100%",marginLeft:"8vw"}}/>
            <Input  className="mt-4 pr" type="file" placeholder="Enter username"  onChange={(event)=>handleImage(event)}/>
            <Input  className="mt-4 pr" type="text" placeholder="Enter username"/>

            <Button className="mt-4" style={{marginLeft:"12vw"}}>SignUp</Button>
            
        </div>
    </div>
    </>)
}
export default UploadFile;