import {Card, Box, CardHeader, CardContent, Typography} from "@mui/material";

export default function Email() {
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
                <Card
                    sx={{
                        height: "90px",
                        borderBottom: "1px solid lightgrey",
                        borderRadius: 0,
                        boxShadow: 0,
                        borderTop: "1px solid lightgrey"
                    }}
                >
                </Card>
            </Box>
            <Box width={"62vw"} ml={1} mt={0.5}>
                <Card
                    sx={{minHeight: "65vh", display: "flex", flexDirection: "column"}}
                >
                    <CardHeader
                        title={"title"}
                        sx={{bgcolor: "lightgrey"}}
                    />
                    <CardContent sx={{flex: "1 1 auto"}}>
                        <Box display="flex" justifyContent="space-between"></Box>
                        <Typography

                        />
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
