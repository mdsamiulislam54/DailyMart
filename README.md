
# DailyMart E-Commerce Website  
## Features  
✅ User Authentication  
✅ Product Filtering & Search  
✅ Add to Cart & Checkout  
✅ Payment Integration  
✅ Responsive UI  

## Tech Stack  
- React.js  
- Tailwind CSS  
- Firebase  
- Stripe API  
# Registration Component Documentation

## Description:
This component handles user registration functionality, allowing users to sign up with email and password, as well as through Google or Facebook authentication.

## Dependencies:
- **React**: Library for building user interfaces.
- **Firebase Authentication**: For user registration and login.
- **React Icons**: For adding icons (e.g., Google, Facebook).
- **useContext & useRef**: For managing global states and referencing DOM elements.
- **Tailwind CSS**: For styling.
  
## State Variables:
- `sucessMessage`: Stores the success message after registration.
- `error`: Stores error messages.
- `showPassword`: Controls the visibility of the password input.
- `termsCheck`: Tracks the checkbox state for terms and conditions.

## Context Usage:
- `CreateuserAuthenticationContext`: Used to manage user authentication and user-related data.
- `useDarkMode`: Used to manage the dark mode theme.

## useEffect Hook:
- Clears success and error messages after 5 seconds.

## Functions:
- **`ShowPassword`**: Toggles password visibility.
- **`handleForm`**: Handles the form submission:
  1. Validates password and terms acceptance.
  2. Registers the user with Firebase.
  3. Sets the success message and resets the form.
  4. Redirects to the login page after a successful registration.
- **`googleHandler`**: Handles Google authentication:
  1. Registers the user using Google’s OAuth via Firebase.
  2. Sets user information in the context and Firebase.
  
## UI Elements:
- **Form Fields**:
  - First Name, Last Name, Phone Number, Email, Password, Confirm Password.
- **Checkboxes**:
  - "Show Password" toggle.
  - "Accept Terms & Conditions" checkbox.
- **Buttons**:
  - Submit button for registration.
  - Google and Facebook login buttons.
- **Success/Error Messages**:
  - Displays messages for successful or failed registration.

## Usage:
**Registration Form**  
This form collects the user’s details and allows them to sign up using either an email/password combination or third-party authentication (Google/Facebook).

## Styling:
Uses **Tailwind CSS** for responsive, flexible, and modern design.
- Tailwind classes like `border`, `bg-background`, `text-text`, and `rounded-2xl` are used for styling.
  
## Example:
```jsx
<Registraion />


# Login Page Documentation

## Overview
A user authentication login page built using React, Tailwind CSS, Firebase Authentication, and React Icons. The page supports email/password login, Google and Facebook authentication, and dark mode.

## Features
- Email and password login with Firebase Authentication
- Google and Facebook login options
- Dark mode support
- Show/hide password toggle
- Error and success message display

## Installation
```sh
npm install react-router-dom react-icons firebase tailwindcss
```

## Key Functionalities
### 1. **User Authentication**
- Uses Firebase Authentication for sign-in.
- `loginuser(email, password)` handles login requests.
- `signInWithEmailAndPassword` authenticates users.

### 2. **Show/Hide Password**
- A checkbox toggles password visibility using `useState`.

### 3. **Error & Success Messages**
- Success and error messages are displayed for 5 seconds using `useEffect`.

### 4. **Navigation After Login**
- `useNavigate` redirects users to the profile page after successful login.

## Customization
- Modify Tailwind CSS classes for custom styling.
- Update Firebase configuration for your project.
- Customize success and error messages as needed.

## Conclusion
This login page provides a simple yet effective authentication system with enhanced UI/UX features.

🚀 **Happy Coding!** 🎉


# Smooth Dropdown Menu

## Overview
A smooth dropdown menu with a hover effect using React, Tailwind CSS, and React Icons. The dropdown appears on hover and smoothly transitions in and out.

## Features
- Smooth hover effect
- Animated dropdown with opacity and translate effects
- Icon rotation on menu open
- Grid layout for category items
- Tailwind CSS transition effects

## Installation
```sh
npm install tailwindcss react-icons
```

## Explanation
- **Dropdown Appears on Hover:** `onMouseEnter` and `onMouseLeave` control visibility.
- **Smooth Transitions:** `transition-all duration-500 ease-in-out` for animation.
- **Opacity & Translate Effects:** Dropdown smoothly slides in and out.
- **Icon Rotation:** `rotate-180` and `rotate-0` animate the dropdown icon.
- **Hover Effect for Items:** Changes background color and adds an icon before text.

## Customization
- Modify colors using Tailwind utility classes.
- Adjust dropdown width (`w-[700px]`) and grid layout (`grid-cols-2`).
- Change animation duration (`duration-500`).

## Conclusion
This dropdown menu offers a smooth and responsive user experience with Tailwind CSS. Customize it as needed.

🎉 **Happy Coding!** 🚀

# User Authentication Context API Documentation

## Description:
This Context API manages user authentication, including registration, login, logout, and storing user data using Firebase Authentication. It provides functions for signing up, logging in with email/password or Google, and tracking the authentication state.

## Dependencies:
- **Firebase**: For user authentication with `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`, `signInWithPopup`, `GoogleAuthProvider`, `signOut`, and `onAuthStateChanged`.
- **React**: For building the UI and handling state management.
- **useNavigate**: For navigation handling within the app.

## Context & Provider:
- **CreateuserAuthenticationContext**: The context that shares user authentication data and functions throughout the application.
  
## State Variables:
- **`user`**: Stores the current authenticated user’s data (e.g., name, email, phone number).
- **`sucessMsg`**: Stores the success message after certain actions (e.g., registration or logout).
- **`errorMsg`**: Stores error messages.
- **`customData`**: Stores custom data associated with the user.

## Functions:
- **`registeruser(email, password)`**: Registers a new user using email and password.
- **`loginuser(email, password)`**: Logs in an existing user using email and password.
- **`loginGoogleHandler()`**: Logs in the user via Google using Firebase's `signInWithPopup`.
- **`logout()`**: Logs out the user and clears authentication data.
- **`userCustomData(data)`**: Updates custom user data stored in the context.

## `useEffect`:
- Tracks authentication state changes with Firebase’s `onAuthStateChanged`. If a user is logged in, their information is set in the `user` state. If not, `user` is set to `null`.

## `useNavigate`:
- Used for navigation to other routes after actions like sign-out.

## Example Usage:
```jsx
import { useContext } from 'react'
import { CreateuserAuthenticationContext } from './path-to-context'

const SomeComponent = () => {
    const { user, loginGoogleHandler, logout } = useContext(CreateuserAuthenticationContext)

    return (
        <div>
            {user ? <p>Welcome, {user.name}</p> : <p>Please log in</p>}
            <button onClick={loginGoogleHandler}>Login with Google</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}


```


# UserProfile Component Documentation

## Description:
The `UserProfile` component displays the user profile with personal details, a sidebar menu, and a logout option. It uses `Context API` to fetch user data and handle logout. The sidebar menu has hover effects that show icons when the menu items are hovered over.

## Dependencies:
- **React**: For creating the component.
- **Context API**: `CreateuserAuthenticationContext` for accessing user information and `useDarkMode` for theme management.
- **react-icons**: For displaying icons (e.g., `FcBusinessman` for the user profile icon).
- **Link (from `react-router`)**: For navigation within the app.
- **Listimages**: An image used for the hover effect in the sidebar menu.

## States:
- **`hoverIndex`**: Tracks the index of the currently hovered sidebar menu item to apply hover effects.

## Context Used:
- **`CreateuserAuthenticationContext`**: Provides access to user information like name, email, and profile photo, along with custom data and logout functionality.
- **`useDarkMode`**: Provides the current theme state (`darkMode`), which determines the background and text colors.

## Props:
- No props are passed to this component.

## Functions:
- **`logout`**: Logs out the user by calling the `logout` function from the `CreateuserAuthenticationContext`.

## Structure:

1. **Sidebar Section**:
   - Displays the user's profile picture (or a default icon if no photo is available).
   - Shows the user's name and email.
   - Contains a vertically aligned list of menu items, which display additional options like "Profile Overview", "My Profile", etc. Each item has a hover effect that displays an icon.
   
2. **Main Content**:
   - Displays the user dashboard with a greeting message, user's first name, and phone number from `customData`.
   - A logout button that calls the `logout` function when clicked.
   - Placeholder text for a dashboard feature that is yet to be developed.

## Example Usage:

```jsx
import UserProfile from './path-to-component/UserProfile';

const App = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};
```


# App Component Documentation

## Description:
The `App` component is the root component of the application that defines the routing structure using `react-router-dom`. It contains the `Layout` component, which is shared across multiple pages, and manages the routes for different pages like `Home`, `LoginPage`, `Registration`, and `UserProfile`.

## Dependencies:
- **react-router-dom**: Provides routing functionality for navigating between different components in the app.
- **CSS**: Custom CSS for styling the app.
- **React Components**:
  - `Layout`: A wrapper component that contains shared layout for the entire app.
  - `Home`: The landing page component.
  - `LoginPage`: The login page component for user authentication.
  - `Registraion`: The registration page component for new user sign-ups.
  - `UserProfile`: A page that displays the user's profile after login.

## Structure:

1. **Layout Route**:
   - This is the parent route that wraps all the nested routes (`Home`, `LoginPage`, `Registraion`, and `UserProfile`).
   - The `Layout` component contains the structure that remains consistent across different pages, such as the header, sidebar, etc.

2. **Nested Routes**:
   - **Home**: The default route that renders when the user visits the base URL `/`.
   - **LoginPage**: Route for the login page, accessed by `/login`.
   - **Registration**: Route for the registration page, accessed by `/registration`.
   - **UserProfile**: Route for the user's profile page, accessed by `/userprofile`.

## Code Breakdown:

```jsx
import { Route, Routes } from "react-router-dom"; 
import "./App.css"; 
import Layout from "./Layout/Layout"; 
import Home from "./componants/Home/Home"; 
import LoginPage from "./componants/UserAuthentication/LoginPage"; 
import Registraion from "./componants/UserAuthentication/Registraion"; 
import UserProfile from "./componants/UserProfile/UserProfile"; 

function App() { 
  return ( 
    <> 
      <Routes> 
        {/* Layout stays always */} 
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registraion />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Route>
      </Routes> 
    </> 
  ); 
}

export default App;
```


# index.js Documentation

## Description:
The `index.js` file is the entry point for the application. It initializes the root component and renders it into the `DOM`. The application is wrapped with essential providers, such as `BrowserRouter` for routing, `DarkModeProvider` for dark mode functionality, `WindowScrollYProvider` for scroll-related functionality, and `UserAuthentication` for user authentication context.

## Dependencies:
- **StrictMode**: Ensures that the app runs in development mode with additional checks and warnings.
- **BrowserRouter**: Provides routing capabilities for the application.
- **DarkModeProvider**: Context for managing dark mode state throughout the app.
- **WindowScrollYProvider**: Context for managing the scroll position of the window.
- **UserAuthentication**: Context for managing user authentication state (login, registration, etc.).
- **App**: The main component that contains all routes and content of the application.

## Code Breakdown:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { DarkModeProvider } from "./componants/ContextApi/DarkModeApi.jsx";
import { WindowScrollYProvider } from "./componants/ContextApi/WindowScrollY.jsx";
import UserAuthentication from "./componants/ContextApi/UserAuthentication.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <WindowScrollYProvider>
          <UserAuthentication>
            <App />
          </UserAuthentication>
        </WindowScrollYProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
);


