export const sendEmail = async (upi: string) => {
const requestBody={
    subject:"This email is regarding your pending payment!",
    body:`I hope this message finds you well. I am writing to kindly follow up on the status of the pending payment for ${upi}. As of now, we have not yet received the payment on our end`,
    createdBy:"developer"
}
        await fetch("http://localhost:8080/api/v1/management/email",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(requestBody)}).then(() => alert("Send Successfully"))
}