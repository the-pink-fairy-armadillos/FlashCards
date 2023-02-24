Flash-Cards is a studying app that allows users to custom make flashcards according to their needs. They can create specific sets for whatever topic they want to study and decide what questions and answers to put in them. Future idea may be to incorporate an api that allows users to pick topics and have flash cards populated for them based on that topic.

![Screenshot_20230204_211344](https://user-images.githubusercontent.com/111662444/216798056-e6c4ccab-0bb9-4670-8cf7-d1dc1523ad59.png)

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

NOT BEST PRACTICE TO SHARE KEYS BUT FOR THE CURRENT STAGE WE LEFT THEM IN PLACE FOR EASE OF DEVELOPMENT LATER WILL BE REPLACED
