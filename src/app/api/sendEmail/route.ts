import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { renderEmailTemplate } from '../../../../utils/serverRenderEmailTemplate';

export async function POST(request: NextRequest) {
  try {
    console.log('API route hit');
    const { senderEmail, message } = await request.json();
    console.log('Request JSON:', { senderEmail, message });

    const apiKey = process.env.REACT_APP_RESEND_API_KEY;
    //"re_gdFGThKF_QCHuRaRyHFbfiug8QzpC2vV2"
    if (!apiKey) {
      console.error('API key is missing');
      return NextResponse.json({ error: 'RESEND_API_KEY is not set in .env' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const emailContent = renderEmailTemplate(senderEmail, message);

    const emailData = {
      from: 'Alfred <onboarding@resend.dev>',
      to: ['manojnarender@gmail.com'],
      subject: 'New Message From Portfolio Website',
      html: emailContent,
    };

    try {
      const response = await resend.emails.send(emailData);
      console.log('Full API response:', response);
      
      if (response.data) {
        console.log('Email sent successfully:', response.data);
        return NextResponse.json({ status: 'success', data: response.data }, { status: 200 });
      } else {
        console.log('Email sent, but no data returned');
        return NextResponse.json({ status: 'success', message: 'Email sent successfully' }, { status: 200 });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ status: 'error', error: (error as Error).message }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ status: 'error', error: (error as Error).message }, { status: 500 });
  }
}