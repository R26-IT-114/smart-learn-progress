# Smart Learn inquiry email

`inquiry.html` is a custom email design for EmailJS. Open it in a browser to preview the layout; the `{{name}}`, `{{email}}`, `{{mobile}}`, and `{{message}}` placeholders are filled by EmailJS when connected.

The website uses EmailJS when all three public identifiers in `assets/js/inquiry-mail.js` are configured. Until then, it sends through FormSubmit with its existing design. Editing this HTML file alone does not change the live delivery template. FormSubmit documents only the basic, table, and box templates: https://formsubmit.co/email-templates.

## Connect the design

1. Create an EmailJS account and connect the receiving Gmail account as an email service.
2. Create an email template, select the HTML code editor, and paste `inquiry.html`.
3. Set **To Email** to `smartlearnprogress@gmail.com`, **From Name** to `Smart Learn Website`, **Subject** to `Smart Learn — New website inquiry`, and **Reply-To** to `{{email}}`. Keep the service's authenticated address as From Email.
4. Save the template and obtain the **Service ID**, **Template ID**, and **Public Key**. These public identifiers are needed to connect the existing website form to EmailJS. Do not share a Gmail password, private key, or OAuth tokens.
5. Put those values into `serviceId`, `templateId`, and `publicKey` in `assets/js/inquiry-mail.js`. The recipient must be fixed in the EmailJS dashboard, not supplied by the visitor.
6. Save and deploy the website. Send a test inquiry to check the actual Gmail rendering and reply behavior. Delivery cannot be tested until the account and template are configured.

When changing the design later, copy the updated HTML into the EmailJS template again. The browser sends only the four form fields; EmailJS stores and renders the template. Failed EmailJS requests are not retried through FormSubmit, to avoid duplicate emails.

Use double-brace variables, as included in this file, so EmailJS escapes visitor input. Do not replace them with unescaped triple braces.

Documentation: https://www.emailjs.com/docs/user-guide/creating-email-templates/ and https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/.
