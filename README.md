# GyanGrove Frontend Assignment

This project is a website built using Next.js, Tailwind CSS, and TypeScript. The main goal is to create a platform that displays upcoming and recommended events fetched from provided APIs. The website is designed to be responsive, ensuring a seamless experience across various screen sizes, including desktop and mobile devices.
Desktop Screens:
![Screenshot 2024-04-01 174826](https://github.com/Hrithik0112/GyanGrove-Assignment/assets/122002784/793ecd3e-38de-4be6-8b56-67e43b352c79)
![Screenshot 2024-04-01 174838](https://github.com/Hrithik0112/GyanGrove-Assignment/assets/122002784/c632168d-8b3b-443e-a653-cf3ff34e0c71)
![Screenshot 2024-04-01 174850](https://github.com/Hrithik0112/GyanGrove-Assignment/assets/122002784/57b8d10c-1176-4a5f-8079-c1f13f217df5)
Mobile Secreen :
![Screenshot 2024-04-01 175044](https://github.com/Hrithik0112/GyanGrove-Assignment/assets/122002784/f603ed14-45e9-4f95-acb1-d6d96cdcb0f0)
![Screenshot 2024-04-01 175058](https://github.com/Hrithik0112/GyanGrove-Assignment/assets/122002784/0923acdc-6bc2-4da3-94ab-543836cb199d)
![Screenshot 2024-04-01 175107](https://github.com/Hrithik0112/GyanGrove-Assignment/assets/122002784/40c19a09-979c-4750-8edf-b1f61ccd9e6f)



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
> [!NOTE]  
> Create a `.env.local` file in root directory and Paste the below Line.
> NEXT_PUBLIC_AZURE_SECRET = FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ

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

> [!CAUTION]
> The Website is only responsive to Devices =< 480px i.e. Moobile devices and Devices > 1240px i.e. Laptop/Desktop .
