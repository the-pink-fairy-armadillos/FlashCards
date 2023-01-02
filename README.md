# Instructions
Create a .babelrc file in your base directory. Insert the following:
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
} 
```

Create a secrets.js file in your base directory. Insert the following:
```
module.exports = {
  /* The password for the database. */
  DB_PASSWORD: 'dAQs98txSZ_ucoRBYsUZYxwopArHE2ls',
  GOOGLE_CLIENT_ID:
    '483750040191-lm1ckhp9spqbv469t5qvso11pgj6gupl.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET: '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',
  SESSION_SECRET: 'OAGDGLK2T4GWKSD09253LKF2457KITRSL',
  DEBUG: false,
};
```
DO NOT SHARE THESE KEYS

# Scratch-Project

In a world full of studying tools sometimes it's difficult to be able to learn a few miscellaneous questions that just don't seem to stick. You spend time searching online and reinforcing topics but see so many random questions based on that topic that you end up not putting the extra practice on the spots you are truly weak on. We want to solve that issue by creating a flash card app where you can write and store your own customizable flash cards so you can review only the topics you feel you need to review the most.
