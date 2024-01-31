import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar1 from '../NavBar1';
import Header from './Header'
import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from '../Componenets/SharedState';

const SchemeDetails = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    
    <div className='App1'>
    <NavBar1/>
     <div className="SideMenuAndPageContent">
     <Header/>
     
     <div className="das">
    <div className='nn'style={{ backgroundSize: 'cover', minHeight: '100vh',height:'1000px'}}>
    
      
      
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://static.moviecrow.com/marquee/leo-first-single-titled-naa-ready-new-poster-feat-vijay/216675_thumb_665.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          NAA READY
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MUSIC DIRECTOR : ANIRUDH<br></br>SINGER : VIJAY<br></br>ACTOR : VIJAY
          </Typography>
        </CardContent>
        <CardActions>
         <Button style={{ color: 'green' }} size="small" >
          SELECT
        </Button>
        </CardActions>
      </Card>

      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.cinejosh.com/newsimg/newsmainimg/chilla-chilla-song-from-ajith-thunivu_b_0912220913.jpg"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          CHILLA CHILLA
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MUSIC DIRECTOR : YUVAN SHANKAR RAJA<br></br>SINGER : ANIRUDH<br></br>ACTOR : AJITH KUMAR
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            SELECT
          </Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.cinemaexpress.com/uploads/user/imagelibrary/2023/7/17/original/hukum_1.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          HUKUM
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MUSIC DIRECTOR : ANIRUDH<br></br>SINGER : ANIRUDH<br></br>ACTOR : RAJINIKANTH
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            SELECT
          </Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ytimg.com/vi/1OjZnGZjOA0/maxresdefault.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          PATHALA PATHALA
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MUSIC DIRECTOR : ANIRUDH<br></br>SINGER : KAMALHASSAN<br></br>ACTOR : KAMALHASSAN
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            SELECT
          </Button>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

    <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ytimg.com/vi/vAYJCAd9Vx8/hqdefault.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          KAATU PAYALE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MUSIC DIRECTOR : GV PRAKASH KUMAR<br></br>SINGER : DHEE<br></br>ACTOR : SURIYA
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            SELECT
          </Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.indianexpress.com/2020/12/Vikram-Cobra-1200.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            ADHEERA ADHEERA
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MUSIC DIRECTOR : AR RAHMAN<br></br>SINGER : AR RAHMAN<br></br>ACTOR : VIKRAM
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            SELECT
          </Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vaathi-et00335415-1663587908.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          VAA VATHI
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MUSIC DIRECTOR : GV PRAKASH KUMAR<br></br>SINGER : SWETHA MOHAN<br></br>ACTOR : DHANUSH
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            SELECT
          </Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://static.moviecrow.com/gallery/20221231/210311-Pathu%20Thala%20Release%20Date.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          ANDHA AGAYAM
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          MUSIC DIRECTOR : AR RAHMAN<br></br>SINGER : SID SRIRAM<br></br>ACTOR : SILAMBARASAN TR
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            SELECT
          </Button>
        </CardActions>
      </Card>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default SchemeDetails;