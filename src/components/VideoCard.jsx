import { Link } from 'react-router-dom';
import { Typography , Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '302px' }, boxShadow: 'none', borderRadius: 0}}>
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: {
            xs:'100%',
            sm: '358px',
            md: '302px'
          }, height:170 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '66px' }}>
        <Link to={ snippet?.videoId ? `/video/${snippet?.videoId}` : demoVideoUrl }>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={ snippet?.channelId ? `/chanel/${snippet?.channelId}` : demoChannelUrl }>
          <Typography variant="subtitle2" color="gray" display='flex'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px', pt: '3.987px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard