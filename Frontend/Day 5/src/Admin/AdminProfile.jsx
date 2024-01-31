import React, { useEffect, useState } from "react";
// import Header from "./Header";
import "../Componenets/profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";



import { Link, Navigate, useNavigate } from "react-router-dom";

const Profile1 = () => {
//   const [data, setData] = useState([]);
  
  return (
    <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
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
                
              </div>
              
             <div className="prof"><center>
              <b/><br/>
               <b> HERE ARE THE RINGTONES :</b>
                <br/><br/>
                <Link to="https://www.jiosaavn.com/album/leo-original-motion-picture-soundtrack/PQ7DXu9s3hM_">
                1. LEO
              </Link>
                <br/><br/>
                <Link to="https://isaipaatu.com/thunivu-2023-songs">
                2. THUNIVU
              </Link> 
                <br/>
                <br/>
                <Link to="https://www.pendujatt.net/tamil-songs/albums/jailer-wmajpq.html">
                3. JAILER
              </Link>
                <br></br>
                <br></br>
                <Link to="https://isaiwave.net/vikram-songs/">
                4. VIKRAM
              </Link>
                <br></br>
                <br/>
                <Link to="https://isaiwave.net/soorarai-pottru-songs/">
                5. SOORARAI POTRU
              </Link>
                <br/><br/>
                <Link to="https://www.jiosaavn.com/album/cobra/lxdAmrDqAKw_">
                6. COBRA
              </Link>
                <br/>
                <br/>
                <Link to="https://isaiwave.net/captain-miller-songs/">
                7. CAPTAIN MILLER 
              </Link>
                <br></br>
                <br></br>
                <Link to="https://www.jiosaavn.com/album/pathu-thala-original-motion-picture-soundtrack/4jJKM,K6F9w_">
                8. PATHU THALA
              </Link>
                <br></br>
                <br/>
                <Link to="https://isaiwave.net/ayalaan-songs/">
                9. AYALAAN
              </Link>
                <br/><br/>
                <Link to="https://www.raaga.com/tamil/movie/Vikram-Vedha-songs-T0004517">
                10. VIKRAM VEDHA
              </Link>
                <br/>
                <br/>
                <Link to="https://isaiwave.net/japan-songs/">
                11. JAPAN 
              </Link>
                <br></br>
                <br></br>
                <Link to="endujatt.net/tamil-songs/albums/thani-oruvan-dppir.html">
                12. THANI ORUVAN
              </Link>
                <br></br>
                <br/>
                <Link to="https://www.jiosaavn.com/album/jawan/RvGqKSIL2ZY_">
                13. JAWAN
              </Link>
                
                <br></br>
                <br/>
                <Link to="https://www.jiosaavn.com/album/tiger-3/WIKD6mB8iSY_">
                14. TIGER 3
              </Link>
                <br></br>
                <br/>
                <Link to="https://www.tune-list.com/fighter-soundtrack-2024/">
                15. FIGHTER
              </Link>
                <br></br>
                <br/>
                <Link to="https://www.musicplug.in/track/3-idiots-songs-pagalworld.html">
                16. 3 IDIOTS
              </Link>
                <br></br>
                <br/>
                <Link to="https://www.pendujatt.net/hindi-songs/albums/omg-2-fstses.html">
                17. OMG 2
              </Link>
                <br></br>
                <br/>
                <Link to="/adminHome"><Button class="logout-btn" >
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