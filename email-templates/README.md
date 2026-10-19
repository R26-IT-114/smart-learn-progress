# Smart Learn inquiry email

`inquiry.html` is a custom email design for EmailJS. Open it in a browser to preview the layout; the `{{email}}`, `{{subject}}`, and `{{message}}` placeholders are filled by EmailJS when connected.

The website currently sends through FormSubmit. This file does not change the live delivery template. FormSubmit documents only the basic, table, and box templates: https://formsubmit.co/email-templates.

## Connect the design

1. Create an EmailJS account and connect the receiving Gmail account as an email service.
2. Create an email template, select the HTML code editor, and paste `inquiry.html`.
3. Set **To Email** to `smartlearnprogress@gmail.com`, **From Name** to `Smart Learn Website`, **Subject** to `{{subject}}`, and **Reply-To** to `{{email}}`. Keep the service's authenticated address as From Email.
4. Save the template and obtain the **Service ID**, **Template ID**, and **Public Key**. These public identifiers are needed to connect the existing website form to EmailJS. Do not share a Gmail password, private key, or OAuth tokens.
5. After connecting the form, send a test inquiry to check the actual Gmail rendering and reply behavior.

Use double-brace variables, as included in this file, so EmailJS escapes visitor input. Do not replace them with unescaped triple braces.

Documentation: https://www.emailjs.com/docs/user-guide/creating-email-templates/ and https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/.
