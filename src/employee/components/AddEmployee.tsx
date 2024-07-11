import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Box, useMediaQuery, TextField} from "@mui/material";
import {useState} from "react";

export const AddEmployee =() => {
    const [open, setOpen] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleSubmit=()=>{

    }
   return( <><Button variant="outlined" size="small" onClick={()=>setOpen(true)}>Add Employee</Button><Dialog
        open={open}
        fullWidth
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            Add employee
        </DialogTitle>
        <DialogContent dividers={true}>
            <Box display="grid"
                 gap="20px"
                 gridTemplateColumns="repeat(6, minmax(0, 1fr))"
                 sx={{
                     "& > div": {
                         gridColumn: isNonMobile ? undefined : "span 6",
                     },
                 }}>
                <TextField
                    fullWidth
                    type=""
                    label="Name*"
                    multiline
                    name="name"
                    sx={{ gridColumn: "span 6" }}
                />
                <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    required
                    multiline
                    name="email"
                    sx={{ gridColumn: "span 6" }}
                />
            </Box>
        </DialogContent>
        <DialogActions>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
            <Button onClick={()=>setOpen(false)} >
                Close
            </Button>
        </DialogActions>
    </Dialog></>)
}