# Contributing to Home of Pianists

Thank you for considering contributing to Home of Pianists! We appreciate your interest and are excited to work with you. Here’s how you can help:

## How to Contribute

### 1. Setting Up Environment

#### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- pnpm
- Git

#### Install Dependencies

   pnpm install

#### Environment Variables

Create an `.env` file in the root directory and configure the necessary environment variables
Make sure to update the values in the `.env` file according to your local setup.

#### Database setup

Setup the database using this command:

- Migrate the database:

```
pnpm prisma migrate dev
```

- Seed the database (optional):

```
pnpm prisma db seed
```

#### Running the Development Server

To start the development server, run:

```
pnpm dev
```

This command will start the server on `localhost:3000`

### 2. Reporting Issues

If you find a bug or have a feature request, please follow these steps:

1. **Search**: Check if the issue has already been reported in the [Issues](https://github.com/giolynx104/pianists-home/issues) section.
2. **Report**: If it hasn’t been reported, create a new issue with a clear description of the problem or request. Include steps to reproduce the issue, screenshots, and any other relevant information.

### 3. Submitting Code Changes

To contribute code, follow these guidelines:

1. **Fork the Repository**: Create a personal copy of the repository by forking it to your own GitHub account.
2. **Clone Your Fork**: Clone your forked repository to your local machine:
   ```
   git clone https://github.com/giolynx104/pianists-home.git
   ```
3. **Create a Branch**: Create a new branch for your changes
   ```
   git switch -c your-branch-name
   ```
4. **Set up Environment**: Refer to [this](#1-setting-up-environment)
5. **Make Changes**: Implement your changes or new features. Be sure to write clear, concise commit messages.
6. **Test**: Test your changes to ensure they work as expected and do not introduce new issues.
7. **Push**: Push your changes to your forked repository.
8. **Open a Pull Request**: Go to the original repository and open a pull request. Provide a detailed description of the changes and why they are being made.

### 4. Style Guides
