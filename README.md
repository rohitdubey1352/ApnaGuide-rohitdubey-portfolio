# 3D Portfolio


## 🌐 Live Demo

Explore the live demonstration of the project:


## 📝 Description

<details><summary><b>Folder Structure</b></summary>

```bash
rohitdubey-portfolio/
├── src/
├   ├── App.tsx
├   ├── globals.css
├   ├── main.tsx
├   ├── vite.env.d.ts
├   ├── components/
├   ├   ├── atoms/
├   ├   ├   └── Header.tsx
├   ├   ├── canvas/
├   ├   ├   ├── Ball.tsx
├   ├   ├   ├── Computers.tsx
├   ├   ├   ├── Earth.tsx
├   ├   ├   ├── Stars.tsx
├   ├   ├   └── index.ts
├   ├   ├── layout/
├   ├   ├   ├── Loader.tsx
├   ├   ├   └── Navbar.tsx
├   ├   ├── sections/
├   ├   ├   ├── About.tsx
├   ├   ├   ├── Contact.tsx
├   ├   ├   ├── Experience.tsx
├   ├   ├   ├── Feedbacks.tsx
├   ├   ├   ├── Hero.tsx
├   ├   ├   ├── Tech.tsx
├   ├   ├   ├── Works.tsx
├   ├   ├   └── page.tsx
├   ├   └── index.ts
├   ├── constants/
├   ├   ├── config.ts
├   ├   ├── styles.ts
├   ├   └── index.ts
├   ├── hoc/
├   ├   ├── SectionWrapper.tsx
├   ├   └── index.ts
├   ├── utils/
├   ├   └── motion.ts
├   ├── types/
├   ├   └── index.d.ts
├   └── assets/
├       ├── company/
├       ├   └── [[...]].{svg,png}
├       ├── tech/
├       ├   └── [[...]].{svg,png}
├       ├── [[...]].{svg,png}
├       └── index.ts
├── public/
├   ├── desktop_pc
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── planet
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── logo.png
├   └── logo.svg
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [References](#-references)
- [Contact Us](#-contact-us)

</details>

## ✨ Technologies Used

<details><summary><b>3D Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the
  frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note :bangbang: the application uses EmailJS in order to send emails using client-side, therefore,
you need to create EmailJS account [here](https://emailjs.com/) and sets the
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAIL_JS_ACCESS_TOKEN` environment
variables in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/ladunjexa/reactjs18-3d-portfolio.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.


## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Freactjs18-3d-portfolio)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/reactjs18-3d-portfolio)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this project and made it
possible:

- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com/)
- [JavaScript Mastery](https://www.jsmastery.pro/)

## 📞 Contact Us

[![LinkedIn](https://img.shields.io/badge/LinkedIn-rohit--dubey--7743a81a3-blue?style=flat&logo=linkedin&logoColor=ffffff&labelColor=000000)](https://www.linkedin.com/in/rohit-dubey-7743a81a3/)


[![Github](https://img.shields.io/badge/Github-rohitdubey1352-blue?style=flat&logo=Github&logoColor=ffffff&labelColor=000000)](https://github.com/rohitdubey1352/)



## 📋 License

**Three.js 3D Portfolio** is open source software
[licensed as MIT](https://opensource.org/license/mit/) and is free to use — See
[LICENSE](https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/LICENSE) for more details.
