import {useState} from "react";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, useMediaQuery} from "@mui/material";
import Button from "@mui/material/Button";

export const AddVendor =()=>
{
    const [open, setOpen] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [venderName, setVendderName] = useState("");
    const [email, setEmail] = useState("");
    const [upi, setUpi] = useState("");
    const handleSubmit= async ()=>{
        await fetch("http://localhost:8080/api/v1/management/vendor",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                name: venderName,
                email: email,
                upi: upi,
                createdBy:"developer"
            })
        }).then(()=> {
            alert("Vendor added successfully.");
            setOpen(false)
        })
    }
    return(
        <><Button variant="outlined" size="small" onClick={()=>setOpen(true)}>Add Vendor</Button><Dialog
            open={open}
            fullWidth
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Add Vendor
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
                                setVendderName(e.target.value)
                            }}
                            sx={{gridColumn: "span 6"}}
                        />
                        <TextField
                            fullWidth
                            type="email"
                            label="Email"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            multiline
                            name="email"
                            sx={{gridColumn: "span 6"}}
                        />
                        <TextField
                            fullWidth
                            type="text"
                            label="UPI"
                            onChange={(e) => setUpi(e.target.value)}
                            required
                            multiline
                            name="upi"
                            sx={{gridColumn: "span 6"}}
                        />
                    </Box>
        </DialogContent>
        <DialogActions>
        <Button type="submit" onClick={()=>{handleSubmit()}}>Submit</Button>
                <Button onClick={()=>setOpen(false)} >
                    Close
                </Button>
            </DialogActions>
        </Dialog></>
    )
}