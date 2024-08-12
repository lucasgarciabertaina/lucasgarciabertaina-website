import Tool from "@/components/ui/Tool";

const Tools = () => (
  <div className="pt-12 grid grid-cols-8 grid-rows-auto gap-y-8">
    <Tool image="./typescript.svg"> Typescript</Tool>
    <Tool image="./python.svg"> Python</Tool>
    <Tool image="./nodejs.svg"> NodeJS</Tool>
    <Tool image="./express.svg"> Express</Tool>
    <Tool image="./nestJS.svg"> NestJS</Tool>
    <Tool image="./mongoDB.svg"> Mongo DB</Tool>
    <Tool image="./postgreSQL.svg"> PostgreSQL</Tool>
    <Tool image="./awsDynamoDB.svg"> Amazon DynamoDB</Tool>
    <Tool image="./awsSES.svg"> Amazon SES</Tool>
    <Tool image="./jest.svg"> Jest</Tool>
    <Tool image="./docker.svg"> Docker</Tool>
    <Tool image="./vue.svg"> Vue</Tool>
    <Tool image="./nuxt.svg"> Nuxt</Tool>
    <Tool image="./react.svg"> React</Tool>
    <Tool image="./next.svg"> Nextjs</Tool>
    <Tool image="./cypress.svg"> Cypress</Tool>
  </div>
);

export default Tools;
