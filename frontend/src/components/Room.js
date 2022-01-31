import { Button, Grid, Typography, BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Restore, Favorite, Archive } from '@material-ui/icons'

export default function Room() {
    const [votesToSkip, setVotestoskip] = useState();
    const [guestCanPause, setGuestcanpause] = useState();
    const [isHost, setIshost] = useState();
    const [value, setValue] = useState(0);

    const navigate = useNavigate();

    let { roomCode } = useParams();

    const getRoomDetails = () => {
        fetch('/api/get-room' + '?code=' + roomCode).then((response) =>
            response.json()).then((data) => {
                setVotestoskip(data.votes_to_skip);
                setGuestcanpause(data.guest_can_pause);
                setIshost(data.is_host);
            }
        );
    };

    useEffect(async () => getRoomDetails(), []);

    const leaveButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: {'Content-Type':'application/json'}
        };
        fetch('/api/leave-room', requestOptions)
            .then((response) => {
                navigate('/');
            });
    };

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">Code: {roomCode}</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h5" component="h5">Votes: {votesToSkip === undefined ? "" : votesToSkip }</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h5" component="h5">Guest can pause: {guestCanPause === undefined ? "" : guestCanPause.toString() }</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h5" component="h5">Host: {isHost === undefined ? "" : isHost.toString() }</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="secondary" onClick={leaveButtonPressed}>
                        Leave Room
                    </Button>
                </Grid>
            </Grid>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis vestibulum sapien ac rutrum. Aliquam erat volutpat. Pellentesque dignissim odio justo, sit amet pretium orci congue ut. Donec gravida, erat id elementum vulputate, nisl lorem fermentum risus, id vulputate massa quam non risus. Suspendisse vitae nisi cursus, ullamcorper augue ac, imperdiet lacus. Nullam sodales augue purus, ac aliquet quam condimentum ac. Suspendisse mi neque, egestas eget laoreet vitae, mattis eget metus. Aliquam sed dignissim est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia nunc quis sodales lobortis. Etiam eu finibus lectus, non ornare nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra ipsum ipsum, vel accumsan felis placerat dapibus. In egestas nibh pellentesque, suscipit risus a, porta dolor. Praesent laoreet est consectetur urna sollicitudin scelerisque.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis vestibulum sapien ac rutrum. Aliquam erat volutpat. Pellentesque dignissim odio justo, sit amet pretium orci congue ut. Donec gravida, erat id elementum vulputate, nisl lorem fermentum risus, id vulputate massa quam non risus. Suspendisse vitae nisi cursus, ullamcorper augue ac, imperdiet lacus. Nullam sodales augue purus, ac aliquet quam condimentum ac. Suspendisse mi neque, egestas eget laoreet vitae, mattis eget metus. Aliquam sed dignissim est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia nunc quis sodales lobortis. Etiam eu finibus lectus, non ornare nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra ipsum ipsum, vel accumsan felis placerat dapibus. In egestas nibh pellentesque, suscipit risus a, porta dolor. Praesent laoreet est consectetur urna sollicitudin scelerisque.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis vestibulum sapien ac rutrum. Aliquam erat volutpat. Pellentesque dignissim odio justo, sit amet pretium orci congue ut. Donec gravida, erat id elementum vulputate, nisl lorem fermentum risus, id vulputate massa quam non risus. Suspendisse vitae nisi cursus, ullamcorper augue ac, imperdiet lacus. Nullam sodales augue purus, ac aliquet quam condimentum ac. Suspendisse mi neque, egestas eget laoreet vitae, mattis eget metus. Aliquam sed dignissim est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia nunc quis sodales lobortis. Etiam eu finibus lectus, non ornare nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra ipsum ipsum, vel accumsan felis placerat dapibus. In egestas nibh pellentesque, suscipit risus a, porta dolor. Praesent laoreet est consectetur urna sollicitudin scelerisque.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis vestibulum sapien ac rutrum. Aliquam erat volutpat. Pellentesque dignissim odio justo, sit amet pretium orci congue ut. Donec gravida, erat id elementum vulputate, nisl lorem fermentum risus, id vulputate massa quam non risus. Suspendisse vitae nisi cursus, ullamcorper augue ac, imperdiet lacus. Nullam sodales augue purus, ac aliquet quam condimentum ac. Suspendisse mi neque, egestas eget laoreet vitae, mattis eget metus. Aliquam sed dignissim est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia nunc quis sodales lobortis. Etiam eu finibus lectus, non ornare nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra ipsum ipsum, vel accumsan felis placerat dapibus. In egestas nibh pellentesque, suscipit risus a, porta dolor. Praesent laoreet est consectetur urna sollicitudin scelerisque.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis vestibulum sapien ac rutrum. Aliquam erat volutpat. Pellentesque dignissim odio justo, sit amet pretium orci congue ut. Donec gravida, erat id elementum vulputate, nisl lorem fermentum risus, id vulputate massa quam non risus. Suspendisse vitae nisi cursus, ullamcorper augue ac, imperdiet lacus. Nullam sodales augue purus, ac aliquet quam condimentum ac. Suspendisse mi neque, egestas eget laoreet vitae, mattis eget metus. Aliquam sed dignissim est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia nunc quis sodales lobortis. Etiam eu finibus lectus, non ornare nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra ipsum ipsum, vel accumsan felis placerat dapibus. In egestas nibh pellentesque, suscipit risus a, porta dolor. Praesent laoreet est consectetur urna sollicitudin scelerisque.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis vestibulum sapien ac rutrum. Aliquam erat volutpat. Pellentesque dignissim odio justo, sit amet pretium orci congue ut. Donec gravida, erat id elementum vulputate, nisl lorem fermentum risus, id vulputate massa quam non risus. Suspendisse vitae nisi cursus, ullamcorper augue ac, imperdiet lacus. Nullam sodales augue purus, ac aliquet quam condimentum ac. Suspendisse mi neque, egestas eget laoreet vitae, mattis eget metus. Aliquam sed dignissim est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia nunc quis sodales lobortis. Etiam eu finibus lectus, non ornare nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra ipsum ipsum, vel accumsan felis placerat dapibus. In egestas nibh pellentesque, suscipit risus a, porta dolor. Praesent laoreet est consectetur urna sollicitudin scelerisque.
            </p>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(newValue.toString())
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<Restore />} />
                    <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                    <BottomNavigationAction label="Archive" icon={<Archive />} />
                </BottomNavigation>
            </Paper>
        </div>
    );
};