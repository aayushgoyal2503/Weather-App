import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYXRoZXIlMjBkdXN0eXxlbnwwfHwwfHx8MA%3D%3D"
   
    return(
        <div className="InfoBox">
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>

          <div> Temperatur={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <p>Min temp={info.tempMin}&deg;C</p>
          <p>Max temp={info.tempMax}&deg;C</p>
          <p>The weather feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}