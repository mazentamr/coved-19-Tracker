import { Button } from "@mui/material";
import { useFeedStyle } from "./FeedStyle"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import YouTube from "react-youtube";
import Dialog from '@mui/material/Dialog';
import { forwardRef, useState } from "react";
import Slide from '@mui/material/Slide';
import Fade from 'react-reveal/Fade';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Feed() {
    const classes = useFeedStyle();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <div className={classes.feed}>
                <Fade right cascade>
                    <h1 className={classes.feedText}>Most People Infected</h1>
                    <h1 className={classes.feedText}>With The COVID-19</h1>
                    <p className={classes.feed_p}>
                        Be Clean & Keep Clean, Maintain Social Distance, Avoid All Kinds of Crowds
                    </p>
                    <p className={classes.feed_p}>
                        including Social Gathering, Protect Yourself and Others, Save Humankind!
                    </p>
                </Fade>
                <div>
                    <Dialog
                        fullScreen={false}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                        fullWidth={true}
                        maxWidth={"md"}
                        TransitionComponent={Transition}
                    >
                        {/* <DialogContent > */}
                        <YouTube
                            className={classes.video_youtube}
                            videoId={"BtN-goy9VOY"}                  // defaults -> null
                        // id={string}                       // defaults -> null
                        // className={string}                // defaults -> null
                        // containerClassName={string}       // defaults -> ''
                        // opts={obj}                        // defaults -> {}
                        // onReady={func}                    // defaults -> noop
                        // onPlay={func}                     // defaults -> noop
                        // onPause={func}                    // defaults -> noop
                        // onEnd={func}                      // defaults -> noop
                        // onError={func}                    // defaults -> noop
                        // onStateChange={func}              // defaults -> noop
                        // onPlaybackRateChange={func}       // defaults -> noop
                        // onPlaybackQualityChange={func}    // defaults -> noop
                        />
                        {/* </DialogContent> */}
                    </Dialog>
                    <Fade right>
                        <Button className={classes.feedButton} onClick={handleClickOpen}>
                            <PlayArrowIcon /> Watch Video
                        </Button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

