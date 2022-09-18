import Commerce from "@chec/commerce.js";

//creating an instance of the Commerce
//export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true); //1st Param - Public key, 2nd Param - flag(true-create a new store)
export const commerce = new Commerce('pk_4687237460a45fe200cef45348e2146b8e0057512a327', true); //1st Param - Public key, 2nd Param - flag(true-create a new store)