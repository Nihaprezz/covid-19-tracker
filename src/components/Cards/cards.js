import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import "../../styles/cards.scss"

const Cards = (props) => {
    let { confirmed, deaths, recovered } = props.globalInfo

    
    return (
        <div className="cards-container">
           <Card className="card">
               <CardContent>
                    <h3>Confirmed</h3>
                    <Typography className="confirmed" variant="h5" component="h2">
                        {confirmed.value.toLocaleString()}
                    </Typography>
               </CardContent>
           </Card>

           <Card className="card">
               <CardContent>
                    <h3>Recovered</h3>
                    <Typography className="recovered" variant="h5" component="h2">
                        {recovered.value.toLocaleString()}   
                    </Typography>
               </CardContent>
           </Card>

           <Card className="card">
               <CardContent>
                    <h3>Deaths</h3>
                    <Typography className="deaths" variant="h5" component="h2">
                        {deaths.value.toLocaleString()}    
                    </Typography>
               </CardContent>
           </Card>
        </div>
    )
}

export default Cards;