# Green React Test

React test for green, deployed to Netlify: [green-react-test.netlify.app](https://green-react-test.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f8fb4480-3192-4e87-8b92-2304743f340d/deploy-status)](https://app.netlify.com/sites/green-react-test/deploys)

## Site Structure

- assets - contains custom fonts and image assets.
- components - contains a 'common' folder for components used. throughout the application and a 'ui' folder for sections of pages such as a login form.
- hooks - contains any custom hooks, currently we have a custom 'useInput' hook.
- styles - contains all sass files, broke down into a 'base' or 'ui' folder. In 'base' we have default, fonts, utils and variables. In 'ui' we have styling for the login form.

## Future Enhancements

- Add a form library for more advanced forms and error handling. A good library for this is [react-hook-form.com](https://react-hook-form.com/)
- Add a testing library for automating tests to the UI. A good library for this is [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
