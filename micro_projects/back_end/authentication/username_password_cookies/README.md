# Authentication with Username, Password, and Cookies

- backend
  - [ ] Node.js with Express
  - [ ] store username and password in memory
  - [ ] hash the passwords bcrypt
  - [ ] store cookies to keep sessions
  - [ ] Unprotected route for everyone to read
  - [ ] Protected route that only logged in users can read
  - [ ] delete account
- frontend
  - [ ] React
  - [ ] landing page
    - [ ] create account
    - [ ] login
    - [ ] public data
  - [ ] dashboard
    - [ ] private data
    - [ ] log out
    - [ ] delete account

## stories

- [x] As a user I want to see the landing page when navigate to the page
  - [x] welcome h1
  - [x] create account form
  - [x] login form
- [x] As a user, I want to create an account
  - [x] create account form works
  - [x] redirects to the dashboard
- [x] As a logged in user, I want to see my personal information
  - [x] display personal info on dashboard
- [x] As a logged in user, I want to be able to log out
  - [x] log out button
  - [x] redirects to landing page on log out
- [ ] As a logged in user, I want to be able to delete my account
  - [ ] delete button
  - [ ] redirects to landing page on account deletion
