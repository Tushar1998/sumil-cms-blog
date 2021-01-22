import contentstack from "contentstack";

// console.log(process.env.API_KEY);

//initialize the SDK
// const Stack = Contentstack.Stack(
//   process.env.API_KEY,
//   process.env.DELIVERY_TOKEN,
//   process.env.ENVIRONMENT,
//   process.env.REGION
// );
console.log(process.env.DELIVERY_TOKEN, typeof process.env.DELIVERY_TOKEN);

const Stack = contentstack.Stack({
  api_key: process.env.API_KEY.toString(),
  delivery_token: process.env.DELIVERY_TOKEN.toString(),
  environment: process.env.ENVIRONMENT.toString(),
  region: process.env.REGION.toString(),
});

export default Stack;
