
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';

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
      <NavBar />
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.dribbble.com/users/1087014/screenshots/2618220/phone.gif"
         
        />
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          USAGE DETAILS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The most obvious use case would be to leverage the existing customer base from the money transfer companies, especially those MTOs who offer the service directly to their end users using a mobile app or via their websites. 
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            SEND 📩
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          
        </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.dribbble.com/users/1209759/screenshots/5362428/go-topup-animation2.gif"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          RECHARGE FOR A FRIEND 
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Recharging an account means replenishing its value after its usage or expiry has reduced it, such as adding credit to prepay mobile phones that require recharges. 
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
          SEND 📩
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.apple.com/newsroom/images/product/app-store/Apple_App_Store_10th_anniversary_07102018_big.gif.large.gif"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          CALLER TUNES
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Caller tune is a status message or music that the person contacting you hears.It’s the monotonous Tring Tring sound by default; however, telecom operators now allow users to change it to pretty much anything.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
          SEND 📩
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/originals/90/91/04/90910430059e29cc7cd652f5a1e1824a.gif"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          REWARDS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Rewards is a versatile way to make money online, and lets you earn with surveys, gaming rewards, download offers, videos, and shopping rewards.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
          SEND 📩
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/originals/cf/4d/06/cf4d06de835b11d0cdcd0e2f58f5ee2d.gif"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          GET OUR SIM
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Having a prepaid SIM card allows you to have control over your mobile usage and budget. However, running out of credit can be a frustrating experience. 
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
          SEND 📩
          </Button>
         </WhatsappShareButton>
   
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.swrve.com/images/uploads/inner/dropboxgif.gif"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            GET OUR FIBER
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We offer a host of broadband plans that start from Rs 399 and go up to Rs 8,499. All the broadband plans come with complimentary voice calls and more. Let’s take a closer look at all the broadband plans offered by us.

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
          SEND 📩
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/originals/fe/fa/7d/fefa7d2cf1f1fcdfb5ae4665d273d7ca.gif"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          RINGTONES
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Our app is a popular source of free ringtones and wallpapers.the company has been producing a vast collection of personalized content for mobile users for more than a decade. 
          </Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
          SEND 📩
          </Button>
         </WhatsappShareButton>
         
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.makeagif.com/media/9-04-2015/HyPAZU.gif"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          TOP UP
          </Typography>
          <Typography variant="body2" color="text.secondary">
          There’s a rapid growth in cell phones, and marketers must ensure that they’re aligning mobile experience with web-based experiences.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
          SEND 📩
          </Button>
         </WhatsappShareButton>

        </CardActions>
      </Card>
    </div>
    </div>
  );
}
export default Home;