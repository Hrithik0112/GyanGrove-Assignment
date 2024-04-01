# GyanGrove Frontend Assignment

This project is a website built using Next.js, Tailwind CSS, and TypeScript. The main goal is to create a platform that displays upcoming and recommended events fetched from provided APIs. The website is designed to be responsive, ensuring a seamless experience across various screen sizes, including desktop and mobile devices.

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/events-website.git
```

2. Navigate to the project directory

3. Install dependencies using npm:

```bash
npm install
```

## Run

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Explanation of Design and Technical Decisions

- ### Next.js

  Next.js is chosen as the framework for building the website due to its ease of use, built-in support for server-side rendering, and efficient handling of dynamic content. It allows for fast development of React applications with features like automatic code splitting and hot module replacement.

- ### Tailwind CSS

  Tailwind CSS is utilized for styling the website's UI components. Its utility-first approach provides flexibility and allows for rapid prototyping. Additionally, Tailwind CSS integrates well with Next.js, making it easy to create responsive designs and customize styles.

- ### TypeScript

  TypeScript is used to enhance the development experience by adding static typing to JavaScript. It helps catch errors early in the development process and provides better code documentation and autocomplete features in code editors. TypeScript also improves code maintainability and scalability, especially in larger projects.

- ### Responsive Design

  The website is designed to be responsive, ensuring optimal viewing and interaction across various devices and screen sizes. Media queries and responsive layout techniques are utilized to adjust the layout and styling based on the viewport dimensions.

- ### API Integration
  The website fetches event data from provided APIs to populate the content dynamically. This allows for real-time updates and ensures that users always have access to the latest information about upcoming and recommended events.
