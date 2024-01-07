import { createContext } from "react";

const userContext = createContext({
  name: "dummy@default",
});
userContext.displayName = "userContext";
export default userContext;
