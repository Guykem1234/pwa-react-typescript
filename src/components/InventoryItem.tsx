import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AmountLevel from './AmountLevel';

interface InventoryItemProps {

}

function InventoryItem(prop: InventoryItemProps) {

    const { } = prop

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                </Typography>
                <AmountLevel low/>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default observer(InventoryItem);