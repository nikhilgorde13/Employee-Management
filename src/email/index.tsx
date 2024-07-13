import {Card, Box, CardHeader, CardContent, CardActions, Typography} from "@mui/material";
import {useEffect, useState} from "react";
 export interface Emails {
    id:        string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: null;
    recipient: null;
    subject:   string;
    body:      string;
    deleted:   boolean;
}

export default function Email() {
    const [emails, setEmails] = useState<Emails[]>([]);
    const [selectedMail, setSelectedMail] = useState<Emails>();
    useEffect(() => {
        fetchAndSetEmails();
    }, []);
    const fetchAndSetEmails = async () => {
        await fetch("http://localhost:8080/api/v1/management/email/all").then((response) => response.json()).then((data)=>{
            setEmails(data as Emails[]);
        });
    }
    return (
        <Box display="flex" flexDirection="row" mt={1}>
            <Box
                width={"30vw"}
                sx={{
                    overflow: "auto",
                    maxHeight: "80vh",
                    border: "1px solid lightgrey",
                }}
            >
                {
                    emails.map((email)=>{
                        return( <Card
                            sx={{
                                height: "90px",
                                borderBottom: "1px solid lightgrey",
                                borderRadius: 0,
                                boxShadow: 0,
                                borderTop: "1px solid lightgrey"
                            }}
                            onClick={()=>setSelectedMail(email)}
                        >
                            <CardContent >{email.subject}</CardContent>
                        </Card>)
                    })
                }
            </Box>
            <Box width={"62vw"} ml={1} mt={0.5}>
                {selectedMail !=null && <Card
                    sx={{minHeight: "65vh", display: "flex", flexDirection: "column"}}
                >
                    <CardHeader
                        title={selectedMail.subject}
                        sx={{bgcolor: "lightgrey"}}
                    />
                    <CardContent sx={{flex: "1 1 auto"}}>
                        <Box display="flex" justifyContent="space-between">{selectedMail.body}</Box>
                    </CardContent>
                    <CardActions sx={{marginTop: "auto"}}>
                        <Typography ml={"auto"}>
                            <Typography variant="body1">{selectedMail.createdBy}</Typography>{" "}
                        </Typography>
                    </CardActions>
                </Card>}
            </Box>
        </Box>
    );
}
