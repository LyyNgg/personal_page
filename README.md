# personal_page

Lei's personal website: a static site (plain HTML, CSS and JS) built from the design in
[`design/Lei — Personal Website.html`](design/).

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: hero and "Explore" cards |
| `profile.html` | About me, experience and skills |
| `hobbies.html` | Things I love |

Every page ends with the shared **Let's connect** section and footer.

## Editing your content

- **Text**: search each HTML file for `[`. Every placeholder in the design, such as `[YOUR ROLE]` or `[Company]`, is written in brackets.
- **Email**: set `CONTACT_EMAIL` at the top of `js/main.js`. The contact form opens the visitor's email app with their message filled in.
- **Photos**: put images in `images/`, then add an `<img>` inside a placeholder box, for example:
  ```html
  <div class="photo about__photo photo--sand"><img src="images/me.jpg" alt="Portrait of Lei"></div>
  ```
  Once a box contains an image, its dashed border goes away.
- **Experience layout**: to put a row's photo on the right, add `role--reverse` to that `<article class="role">`.
- **Colors and fonts**: the design tokens are CSS variables at the top of `css/style.css`. The Fraunces and Instrument Sans fonts are self-hosted in `fonts/`.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy with GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
