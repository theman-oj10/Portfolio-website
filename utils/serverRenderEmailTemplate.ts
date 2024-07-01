export function renderEmailTemplate(senderEmail: string, message: string): string {
  return `
    <div>
      <h2>${senderEmail} saw your website!</h2>
      <p>${message}</p>
    </div>
  `;
}