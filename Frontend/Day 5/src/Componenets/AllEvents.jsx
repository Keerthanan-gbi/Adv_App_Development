
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from './SharedState';

const Home = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='nn'style={{backgroundImage: 'url("")', backgroundSize: 'cover', minHeight: '100vh',height:'1000px',paddingLeft:'20px'}}>

     
      <br></br>
      <h1>PLANS FOR YOU ...!</h1>
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          1 GB 1️⃣
          </Typography>
          <Typography variant="body2" color="text.secondary">
            SCHEME NAME : ABC <br></br><br></br> VALIDITY : 1 DAY <br></br> <br></br>AMOUNT : 15 RS
          </Typography>
        </CardContent>
        <CardActions>
        <Button style={{ color: 'green' }} size="small">
        RECHARGE
      </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        10 GB 1️⃣0️⃣
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SCHEME NAME : HAI <br></br><br></br> VALIDITY : 10 DAY <br></br> <br></br>AMOUNT : 95 RS
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{ color: 'green' }} size="small">
      RECHARGE
    </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
      
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      12 GB 1️⃣2️⃣
      </Typography>
      <Typography variant="body2" color="text.secondary">
        SCHEME NAME : BYE <br></br><br></br> VALIDITY : 1 YEAR <br></br> <br></br>AMOUNT : 1000 RS
      </Typography>
    </CardContent>
    <CardActions>
    <Button style={{ color: 'green' }} size="small">
    RECHARGE
  </Button>
    </CardActions>
  </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          2 GB 2️⃣
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SCHEME NAME : LMN <br></br><br></br> VALIDITY : 2 WEEKS <br></br> <br></br>AMOUNT : 25 RS
          </Typography>
        </CardContent>
        <CardActions>
        <Button style={{ color: 'green' }} size="small">
        RECHARGE
      </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          3 GB 3️⃣
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SCHEME NAME : PQR <br></br><br></br> VALIDITY : 3 YEARS <br></br> <br></br>AMOUNT : 35 RS
          </Typography>
        </CardContent>
        <CardActions>
        
          <Button style={{ color: 'green' }} size="small">
            RECHARGE
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          500 MB 5️⃣0️⃣0️⃣
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SCHEME NAME : XYZ <br></br><br></br> VALIDITY : 5 DAYS <br></br> <br></br>AMOUNT : 50 RS
          </Typography>
        </CardContent>
        <CardActions>

          <Button style={{ color: 'green' }} size="small">
            RECHARGE
          </Button>
         
        </CardActions>
      </Card>
    </div>
    <br></br><br></br>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          UNLIMITED 💯
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SCHEME NAME : GBI <br></br><br></br> VALIDITY : 7 DAYS <br></br> <br></br>AMOUNT : 70 RS
          </Typography>
        </CardContent>
        <CardActions>
        
          <Button style={{ color: 'green' }} size="small">
            RECHARGE
          </Button>
         
          
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            10 MB 1️⃣0️⃣
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SCHEME NAME : SKC <br></br><br></br> VALIDITY : 8 DAYS <br></br> <br></br>AMOUNT : 55 RS

          </Typography>
        </CardContent>
        <CardActions>
        
          <Button style={{ color: 'green' }} size="small">
            RECHARGE
          </Button>
        
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        1000 MB 1️⃣0️⃣0️⃣0️⃣
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SCHEME NAME : ABC <br></br><br></br> VALIDITY : 1 DAY <br></br> <br></br>AMOUNT : 15 RS
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{ color: 'green' }} size="small">
      RECHARGE
    </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
      
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      50 MB 5️⃣0️⃣
      </Typography>
      <Typography variant="body2" color="text.secondary">
        SCHEME NAME : ABC <br></br><br></br> VALIDITY : 1 DAY <br></br> <br></br>AMOUNT : 15 RS
      </Typography>
    </CardContent>
    <CardActions>
    <Button style={{ color: 'green' }} size="small">
    RECHARGE
  </Button>
    </CardActions>
  </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          5 GB 5️⃣
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SCHEME NAME : JYA <br></br><br></br> VALIDITY : 6 DAYS <br></br> <br></br>AMOUNT : 45 RS
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            RECHARGE
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          250 MB 2️⃣5️⃣0️⃣
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SCHEME NAME : PVN <br></br><br></br> VALIDITY : 10 DAYS <br></br> <br></br>AMOUNT : 100 RS
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{ color: 'green' }} size="small">
            RECHARGE
          </Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
}
export default Home;