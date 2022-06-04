import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./FormDialog.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [word, setWord] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(word);

    fetch(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`,{

      headers : {
        "content-type": "application/json",
        "app_id": "fac81e15",
        "app_key": "98866aa61199d249a224421215689328",
        "Accept": "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin':"http://localhost:3000",
        'Access-Control-Request-Method':'GET',
        'Access-Control-Request-Headers': 'Content-Type'
  
  
      },
      method:"GET",
      mode:"cors",

    }).then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))



  };

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <Button
        sx= {{backgroundColor:"#65254A",color:"white", border:"0",position:"fixed"}}
        className={styles.dialog}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Add to Dictionary</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ color: "#65254A" }}
            type="text"
            id="word"
            placeholder="Word"
            onChange={handleChange}
            value={word}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "#65254A" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ color: "#65254A" }} onClick={handleClose}>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
