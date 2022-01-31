import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from "@material-ui/core"

export default function CreateRoomPage (){
    const default_votes = 2;
    const [guestCanPause, setGuestcanpause] = useState(true);
    const [votesToSkip, setVotestoskip] = useState(default_votes);

    const navigate = useNavigate();
            
    const handleVotesChange = (e) => {
        setVotestoskip(e.target.value);
    }

    const handleGuestCanPauseChange = (e) => {
        setGuestcanpause(e.target.value === "true" ? true : false);
    }

    const handleRoomButtonPressed = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                votes_to_skip: votesToSkip,
                guest_can_pause: guestCanPause
            })
        };
        fetch('/api/create-room', requestOptions).then((response) =>
            response.json()
        ).then((data) => 
            navigate('/room/' + data.code)
        );
    }

    return <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <Typography component='h4' variant='h4'>
                Create A Room
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <FormControl component="fieldset">
                <FormHelperText>
                    <div align='center'>
                        Guest Control Playback State
                    </div>
                </FormHelperText>
                <RadioGroup row defaultValue="true" onChange={handleGuestCanPauseChange}>
                    <FormControlLabel
                        value="true"
                        control={<Radio color="primary"/>}
                        label="Play/Pause"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="false"
                        control={<Radio color="secondary"/>}
                        label="No Control"
                        labelPlacement="bottom"
                    />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
            <FormControl>
                <TextField
                    required={true}
                    type="number"
                    defaultValue={default_votes}
                    onChange={handleVotesChange}
                    inputProps={{
                        min: 1,
                        style: {textAlign: "center"}
                    }}
                />
                <FormHelperText>
                    <div align="center">
                        Votes Required To Skip Song
                    </div>
                </FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
            <Button color="primary" variant="contained" onClick={handleRoomButtonPressed}>
                Create A Room
            </Button>
        </Grid>
        <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
                Back
            </Button>
        </Grid>
    </Grid>;
};