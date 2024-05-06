// import React from 'react';
// import faker from 'faker';
// import { Button } from "semantic-ui-react";
// import Card from './Card'; // Make sure to import the Card component if not already imported.
// import './Card.css';

// function generateFakeArticle() {
//     return {
//       image: faker.image.imageUrl(),
//       title: faker.lorem.words(),
//       author: faker.firstname.findfirstname(),
//       date: faker.date.past(),
//       content: faker.lorem.paragraph(),
//     };
//   }
//   const fakeArticleList = Array.from({ length: 6 }, () => generateFakeArticle());

//   export default generateFakeArticle;
  
import { faker } from "@faker-js/faker";

const articleList = [
  {
    key: 0,
    image: faker.internet.avatar(),
    firstname: faker.lorem.words(),
    position: faker.jobTitle,
    jobArea: faker.jobArea,
    rating: (
      <p>
        <img
          src={process.env.PUBLIC_URL + "/star-solid.svg"}
          alt="star"
          width={20}
          height={20}
        />
        5
      </p>
    ),
    author: faker.firstname,
  },
  {
    key: 1,
    image: faker.internet.avatar(),
    firstname: faker.lorem.words(),
    position: faker.jobTitle,
    jobArea: faker.jobArea,
    rating: (
      <p>
        <img
          src={process.env.PUBLIC_URL + "/star-solid.svg"}
          alt="star"
          width={20}
          height={20}
        />
        5
      </p>
    ),
    author: faker.firstname,
  },
  {
    key: 2,
    image: faker.internet.avatar(),
    firstname: faker.lorem.words(),
    position: faker.jobTitle,
    jobArea: faker.jobArea,
    rating: (
      <p>
        <img
          src={process.env.PUBLIC_URL + "/star-solid.svg"}
          alt="star"
          width={20}
          height={20}
        />
        5
      </p>
    ),
    author: faker.firstname,
  },
  {
    key: 3,
    image: faker.internet.avatar(),
    firstname: faker.lorem.words(),
    position: faker.jobTitle,
    jobArea: faker.jobArea,
    rating: (
      <p>
        <img
          src={process.env.PUBLIC_URL + "/star-solid.svg"}
          alt="star"
          width={20}
          height={20}
        />
        5
      </p>
    ),
    author: faker.firstname,
  },
  {
    key: 4,
    image: faker.internet.avatar(),
    firstname: faker.lorem.words(),
    position: faker.jobTitle,
    jobArea: faker.jobArea,
    rating: (
      <p>
        <img
          src={process.env.PUBLIC_URL + "/star-solid.svg"}
          alt="star"
          width={20}
          height={20}
        />
        5
      </p>
    ),
    author: faker.firstname,
  },
  {
    key: 5,
    image: faker.internet.avatar(),
    firstname: faker.lorem.words(),
    position: faker.jobTitle,
    jobArea: faker.jobArea,
    rating: (
      <p>
        <img
          src={process.env.PUBLIC_URL + "/star-solid.svg"}
          alt="star"
          width={20}
          height={20}
        />
        5
      </p>
    ),
    author: faker.firstname,
  },
  {
    key: 6,
    image: faker.internet.avatar(),
    firstname: faker.lorem.words(),
    position: faker.jobTitle,
    jobArea: faker.jobArea,
    rating: (
      <p>
        <img
          src={process.env.PUBLIC_URL + "/star-solid.svg"}
          alt="star"
          width={20}
          height={20}
        />
        5
      </p>
    ),
    author: faker.firstname,
  }
  // Add more fake articles here as needed.
];

export default articleList;
