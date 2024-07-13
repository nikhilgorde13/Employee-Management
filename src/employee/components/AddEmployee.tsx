import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Box, useMediaQuery, TextField} from "@mui/material";
import {useState} from "react";

export const AddEmployee =({callback}:{callback:()=>void}) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [ctc,setCtc] = useState("");
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleSubmit= async ()=>{
        await fetch("http://localhost:8080/api/v1/management/employee",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                designation:designation,
                ctc:ctc,
                createdBy:"developer"
            })
        }).then(()=> {
            alert("Employee saved successfully.");
            setOpen(false)
            callback()
        })
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
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    sx={{ gridColumn: "span 6" }}
                />
                <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    required
                    multiline
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    name="email"
                    sx={{ gridColumn: "span 6" }}
                />
                <TextField
                    fullWidth
                    type=""
                    label="Designation*"
                    multiline
                    onChange={(e) => {
                        setDesignation(e.target.value)
                    }}
                    name="designation"
                    sx={{ gridColumn: "span 6" }}
                />
                <TextField
                    fullWidth
                    type=""
                    label="CTC*"
                    multiline
                    onChange={(e) => {
                        setCtc(e.target.value)
                    }}
                    name="ctc"
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