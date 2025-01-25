# study-google-sheets
1. Next JS App to make crud operations on a google sheet (구글 시트 사용 template)
2. template

## Getting Started

### 1. Click the link to create a Google Sheet and download the API key.

- [한국 velog](https://velog.io/@junsugi/Google-Sheet-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0-feat.-Google-API)
- [Medium](https://levelup.gitconnected.com/using-google-sheets-as-another-database-in-your-next-js-app-ab1b2c6d8f1a)

### 2. Enter data into Google Sheets

<img width="451" alt="image" src="https://github.com/user-attachments/assets/12c26644-4946-4895-8523-57b7650ce25b" />

### 3. Fill in information in .env
For API_KEY, enter all the contents of the .JSON downloaded from the Google Cloud Console.

```
// .env 
API_KEY=
SHEET_ID=
NEXT_PUBLIC_BASE_URL=
```

### 4. run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Result 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<img width="1068" alt="image" src="https://github.com/user-attachments/assets/252ebfde-f698-48d3-80dd-18a121431f99" />




You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
