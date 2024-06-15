// "use server";

// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config({ path: '../.env' });
// //console.log(process.env.RESEND_API_KEY);

// export const sendEmail = async (formData: FormData) => {
//     const senderEmail = formData.get('senderEmail') as string;
//     const message = formData.get('message') as string;
    
//     const emailData = {
//         from: senderEmail,
//         to: 'manojnarender@u.nus.edu', 
//         subject: 'New message from your portfolio website!',
//         text: message,
//     };

//     try {
//         const response = await axios.post('https://api.resend.io/v2/send', emailData, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, // Replace with your Resend API key
//             },
//         });
//         console.log('Email sent successfully:', response.data);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };
