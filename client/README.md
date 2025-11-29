# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Client Directory Documentation

This directory contains the source code for the client-side of the application.

## File Structure

- `src`: Contains the main source code for the client.
  - `pages`: Contains the individual pages of the application.
    - `home`: Contains the code for the home page.
    - `user-pages`: Contains the code for the user-related pages.
      - [Profile](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/pages/user-pages/Profile.jsx:2:0-6:1): Contains the code for the user profile page.
      - [Settings](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/pages/user-pages/Settings.jsx:2:0-6:1): Contains the code for the user settings page.
      - [UserOrders](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/pages/user-pages/UserOrders.jsx:2:0-6:1): Contains the code for the user orders page.
      - [UserAddresses](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/pages/user-pages/UserAddresses.jsx:2:0-6:1): Contains the code for the user addresses page.
    - `authentication`: Contains the code for the authentication-related pages.
      - [Login](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/pages/authentication/Login.jsx:2:0-6:1): Contains the code for the login page.
      - [Register](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/pages/authentication/Register.jsx:2:0-6:1): Contains the code for the registration page.
    - [Cart](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/pages/Cart.jsx:2:0-6:1): Contains the code for the shopping cart page.
  - `components`: Contains reusable components used throughout the application.
    - `layout`: Contains layout-related components.
      - [Navbar](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/components/layout/Navbar.jsx:2:0-6:1): Contains the code for the navigation bar component.
      - [Footer](cci:1://file:///c:/Users/atole/Desktop/CDAC/AgriProductMarketplace/client/src/components/layout/Footer.jsx:2:0-6:1): Contains the code for the footer component.
  - `redux`: Contains the Redux-related code.
    - `slices`: Contains the Redux slices.
      - `authSlices.js`: Contains the authentication-related Redux slices.
      - `cartSlice.js`: Contains the shopping cart-related Redux slices.
      - `userSlices.js`: Contains the user-related Redux slices.
  - `context`: Contains the context-related code.
    - `ThemeContext.js`: Contains the code for the theme context.
  - `src/index.css`: Contains the global CSS styles.
  - `src/index.jsx`: Contains the root component of the application.
  - `src/main.jsx`: Contains the main entry point of the application.
  - `src/vite.config.js`: Contains the Vite configuration.
  - `src/eslint.config.js`: Contains the ESLint configuration.
  - `package.json`: Contains the package configuration.
  - `README.md`: Contains the general information about the client directory.