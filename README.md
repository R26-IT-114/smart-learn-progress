# Smart Learn — Final-Year Research Project Website

Smart Learn is an SLIIT final-year research project website for **R26-IT-114: Smart Learn — An Adaptive Mobile Platform for Neurodevelopmental Learning Disorders**.

The site is a lightweight static website built with HTML, CSS, and a small amount of inline vanilla JavaScript for the mobile menu and mailto contact action. It has no framework, no package installation, no CDN, and no external runtime dependency.

## Project structure

```text
index.html                  Main website page
assets/css/style.css        All website styling
assets/images/              Team, supervisor, logo, and technology images
assets/presentations/       Downloadable presentation slide decks
public/documents/           Downloadable project PDF documents
public/favicon.ico          Browser tab icon
public/robots.txt           Search-crawler instructions
vercel.json                 Vercel static-hosting configuration
```

## Run locally

Open `index.html` directly in a modern browser, or start a simple local server from the project folder:

```bash
python3 -m http.server 5500
```

Then open `http://localhost:5500`.

## Update content

### Project details and research domain

Edit the appropriate section in `index.html`. Keep content marked `TODO` until it has been approved. Do not present proposed technologies, outcomes, dates, marks, or component details as final unless they are confirmed.

### Team and supervisors

The About Us section contains the current team and supervisor cards. Update the name, role, email, image path, or contribution text only when confirmed. Place replacement images inside `assets/images/` and use a relative path such as `assets/images/new-image.jpg`.

### Milestones

Milestones are written directly in the `#milestones` section of `index.html`. Update the assessment title, date, description, allocated marks, and progress-bar width together when official information changes.

### Documents

1. Copy a PDF into `public/documents/`.
2. Add a matching relative `href` in the Documents section of `index.html`.
3. Verify the file exists before publishing. Never add a link to a missing file.

### Presentations

1. Copy a presentation into `assets/presentations/`.
2. Update the matching card in the Presentations section with the correct filename.
3. Replace `Coming soon` only after the file is available locally.

### Technologies and icons

Technology cards are in the Domain section. Their local SVG logos are stored in `assets/images/`. Add a technology only if it is confirmed in approved project material.

## Course-web upload checklist

Upload only the active website files:

- `index.html`
- `assets/`
- `public/`
- `vercel.json` is optional for CourseWeb but required for this Vercel setup

Before uploading, verify the total size is below 20 MB:

```bash
find index.html assets public -type f -print0 | xargs -0 stat -f '%z' | awk '{sum+=$1} END {printf "%.2f MB\n", sum/1024/1024}'
```

Do not upload development folders such as `node_modules/` or `build/`.

## Test before publishing

- Check desktop, tablet, and mobile navigation.
- Confirm all local images load.
- Open each available document and presentation link.
- Test keyboard navigation and visible focus states.
- Test the Contact Us button; it opens an email draft and does not submit data to a server.
- Confirm no horizontal scrolling occurs on a narrow screen.

## Vercel deployment

The production site is configured as a static deployment through `vercel.json`. To deploy after logging in to Vercel:

```bash
npx vercel --prod
```

The site includes downloadable proposal documents and presentations. A public Vercel deployment makes those files publicly accessible; confirm that this is appropriate before deploying.
