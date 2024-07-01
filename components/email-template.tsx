import React from 'react';

interface EmailTemplateProps {
  senderEmail: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ senderEmail, message }) => {
  return (
    <div>
      <h1>New Message from {senderEmail}</h1>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;
