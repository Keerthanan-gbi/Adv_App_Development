import React, { useEffect, useState } from "react";
// import Header from "./Header";
import "./profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";



import { Link, Navigate, useNavigate } from "react-router-dom";

const Profile1 = () => {
//   const [data, setData] = useState([]);
  
  return (
    <div
      style={{
        backgroundImage:
          'url("https://wallpaperaccess.com/full/5653640.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
      {/* <Header type="noBack" home="nohome" about='false'  /> */}
   

      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 500,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={10} className="paperpp">
              <div className="ava">
              <h1>ABOUT US</h1>
                
               
                
                
              </div>
              
             <div className="prof"><center>
              
             <justify>   
             <br></br>
Welcome to our app, where convenience meets connectivity! We are passionate about creating a seamless mobile top-up experience that empowers users around the world to stay connected with their loved ones.
<br></br>
<br></br>
<b><i><u>Our Mission :</u></i></b>
<br></br>
<br></br>
our mission is simple: to make mobile top-ups easy, fast, and reliable for everyone. We understand the importance of staying connected in today's fast-paced world, and we are dedicated to providing a hassle-free solution for topping up your mobile credit anytime, anywhere.
<br></br>
<br></br>

<b><i><u>How It All Began :</u></i></b>
<br></br>
<br></br>
we started with a simple idea – to revolutionize the mobile top-up experience. The founders, driven by a passion for technology and connectivity, envisioned a world where topping up your mobile is as easy as a few taps on your phone. Today, that vision has become a reality, and we continue to innovate to meet the evolving needs of our users.
<br></br>
<br></br>
<b><i><u>Join Us on Our Journey :</u></i></b>
<br></br>
<br></br>
We invite you to join us on this exciting journey of connectivity. Whether you're a frequent traveler, a digital nomad, or someone who simply values a hassle-free top-up experience,<br></br><br></br><b><u><i>We here for you :</i></u></b> <br></br><br></br>

Thank you for choosing us – where staying connected is always a click away!

Feel free to customize this content to match your app's unique features, values, and branding.
<br></br>
<br></br>
<b><u><i>What Sets Us Apart :</i></u></b>
<br></br>
<br></br>
1.
We take pride in our global reach that allows users to top up their mobiles in multiple countries. But what truly sets us apart is our commitment to providing a personalized and localized experience. No matter where you are, we ensure that you can top up your mobile with ease, in a way that feels familiar and tailored to your preferences.
<br></br>
<br></br>
2.
We believe in the power of simplicity. Our user-friendly interface is designed to make the top-up process smooth and straightforward. Whether you are a tech-savvy user or someone new to mobile top-ups, our app is crafted for you.
<br></br><br></br>
3.
Your security is our priority. Our app employs the latest encryption technology to ensure that every transaction is secure. We understand the importance of trust in financial transactions, and we are committed to maintaining a reliable and trustworthy platform.


</justify>
<br></br>
<br></br>
                <Link to="/"><Button class="logout-btn" >
                    BACK TO HOME
                  </Button></Link>
             </center>

             </div>
             
            </Paper>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile1;