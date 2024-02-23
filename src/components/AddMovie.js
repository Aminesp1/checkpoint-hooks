import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Rating, TextField } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddModvie({setMovies, movies}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState(0);
    const [trailer, setTrailer] = useState("");


    const AddMovieFunction = () => {
      setMovies([...movies,
        {
        title: title,
        description: description,
        posterURL: posterURL,
        rating: rating,
        trailer: trailer ,
      }])
      handleClose()
    }

    return (
        <div>
            <Button onClick={handleOpen}>Add Movie</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new movie
                    </Typography>
                    <TextField label="title" variant="outlined" fullWidth onChange={(e) => {setTitle(e.target.value)}} />
                    <TextField label="description" variant="outlined" fullWidth onChange={(e) => {setDescription(e.target.value)}}/>
                    <TextField label="posterURL" variant="outlined" fullWidth onChange={(e) => {setPosterURL(e.target.value)}}/>
                    <TextField label="Embed trailer" variant="outlined" fullWidth onChange={(e) => {setTrailer(e.target.value)}}/>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    <br/>
                    <Button variant="contained"onClick={AddMovieFunction}>Add</Button>
                </Box>
            </Modal>
        </div>
    ); 
}