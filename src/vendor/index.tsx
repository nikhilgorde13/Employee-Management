import {Card, CardActions, CardContent, CardHeader, Divider, Typography,} from '@mui/material';
import {useEffect, useState} from "react";

export interface VendorDetails {
    id: string,
    name: string,
    email: string,
    upi: string,
    phone: string,
    address: string,
    contactPerson: string,
    registrationNumber: string,
    panNumber: string,
    getRegistrationNumber: string,
    bankAccountNumber: string
}

const VendorCard = () => {
    const [vendors,setVendors] = useState<VendorDetails[]>([]);
    useEffect(() => {
        fetchAndSetVendor();
    }, []);
    const fetchAndSetVendor =async () => {
        const response = await fetch("http://localhost:8080/api/v1/management/vendor/all");
        const data = response.json();
        setVendors(data as unknown as VendorDetails[]);
    }
    // const {
    //     id,
    //     name,
    //     email,
    //     upi,
    //     phone,
    //     address,
    //     contactPerson,
    //     registrationNumber,
    //     panNumber,
    //     getRegistrationNumber,
    //     bankAccountNumber
    // } = vendors;

    return (<>
        {vendors.length > 0 && vendors.map((vendor: VendorDetails) => (
            <Card sx={{m: 2}}>
                <CardHeader sx={{bgcolor: "#EFEEEF"}}
                            title={<><Typography>Name:{vendor.name}</Typography> <Typography display="flex"> <Typography color="text.secondary">Email:</Typography>
                                <Typography>{vendor.email}</Typography></Typography>
                                <Typography display="flex"> <Typography color="text.secondary">Phone:</Typography></Typography></>}/>
                <CardContent sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography>{vendor.phone}</Typography>
                    <Typography display="flex"><Typography color="text.secondary">Address:</Typography>
                        <Typography>{vendor.address}</Typography></Typography>

                    <Typography display="flex"> <Typography color="text.secondary">UPI:</Typography>
                        <Typography>{vendor.upi}</Typography></Typography>
                    <Typography display="flex"><Typography color="text.secondary">Bank Account Number:</Typography>
                        <Typography>{vendor.bankAccountNumber}</Typography></Typography>
                </CardContent>
                <Divider/>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography display="flex">
                        <Typography color="text.secondary">Registration Number:</Typography>
                        <Typography>{vendor.registrationNumber}</Typography></Typography>
                    <Typography display="flex"> <Typography color="text.secondary">PAN Number:</Typography>
                        <Typography>{vendor.panNumber}</Typography></Typography><Typography color="text.secondary">GST Number:</Typography>
                    <Typography>{vendor.getRegistrationNumber}</Typography>
                </CardActions>
            </Card>
            ))

        }
        </>
    );
};

export default VendorCard;