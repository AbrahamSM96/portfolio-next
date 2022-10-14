// import React, { createContext } from "react";
// import "@testing-library/jest-dom/extend-expect";
// import { render } from "@testing-library/react";
// import HomePage from ".";
// const AppContext = createContext();

// const customRender = (ui, { providerProps, ...renderOptions }) => {
//   return render(
//     <AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>,
//     renderOptions
//   );
// };

// test("should render Homepage", async () => {
//   let sharedState = {
//     data: {},
//     load: false,
//     error: false,
//   };

//   // const hero = {
//   //   title: "Iam the fckn leader",
//   //   subtitle: "What is your problem",
//   //   url: "https://www.tuzos.com",
//   // };

//   customRender(<HomePage />, { sharedState });
//   console.log(customRender(<HomePage />, { sharedState }));
// });
