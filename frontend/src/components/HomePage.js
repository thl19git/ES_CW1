import React, { useState, useEffect } from "react"
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage"
import Room from "./Room"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core"

function RenderHomePage() {
    const navigate = useNavigate();

    const isUserInRoom = () => {
        console.log("Checking if in room");
        fetch('api/user-in-room')
            .then((response) => response.json())
            .then((data) => {
                if (data.code != "None") navigate('/room/' + data.code);
            });
    }

    useEffect(() => isUserInRoom(), []);

    return(
        <Grid container spacing={3}>
            <Grid item xs={12} align="center">
                <Typography variant="h3" compact="h3">House Party</Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button color="primary" to='/join' component={Link}>
                        Join a Room
                    </Button>
                    <Button color="secondary" to='/create' component={Link}>
                        Create a Room
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
}

export default function HomePage() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<RenderHomePage />}/>
                <Route path="/join" element={<RoomJoinPage />} />
                <Route path="/create" element={<CreateRoomPage />} />
                <Route path="/room/:roomCode" element={<Room />} />
            </Routes>
        </Router>
    );
}
