export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail') as string;
  const message = formData.get('message') as string;

  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ senderEmail, message }),
  });

  const result = await response.json();
  return result;
};
