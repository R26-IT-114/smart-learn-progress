# Smart Learn — Final-Year Research Project Website

This is a dependency-free static website built with HTML, CSS, and vanilla JavaScript. Open `index.html` in a modern browser for local testing.

## Files for deployment

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `public/favicon.ico`
- `public/documents/` (only if document downloads are required)

The listed deployment files are about 8.5 MB, below the 20 MB course-web limit. Do not upload `node_modules/`, `src/`, `build/`, or development files.

## Updating the site

- **Team:** Replace `TODO` details in the About Us cards in `index.html` only after they are confirmed.
- **Contact:** Replace the email recipient in both the contact text and `assets/js/main.js`; add the phone number when confirmed.
- **Milestones:** Update the `data` object in `assets/js/main.js` with confirmed assessment descriptions, dates, and marks.
- **Documents:** Put PDFs in `public/documents/`, then add a matching relative link in `index.html`. Never link to a missing file.
- **Presentations:** Put a slide/PDF file in `assets/presentations/` and convert its matching `Coming soon` label to a relative link.
- **Research domain:** Keep unconfirmed wider components, technologies, results, and identities as `TODO` until approved.

## Test before upload

Check desktop, tablet, and mobile navigation; each milestone option; all available PDF links; keyboard focus; and the email draft action. The contact form opens the local mail client and does not send data to a server.
