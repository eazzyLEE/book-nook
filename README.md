Welcome to BookNook, a mobile platform where you can browse and purchase the latest and trending books.

# Overview - The BookNook App

BookNook is a React Native application designed to provide a seamless book browsing and purchasing experience. The app consists of three major screens: Home, Book List, and Cart. Users can browse a curated list of books, add them to their cart, and proceed to purchase.

## Features

### Home Screen
- **Welcome Message**: Greet users with a friendly welcome message.
- **Navigation**: Provides easy navigation to the Book List and Cart screens.

### Book List Screen
- **Book Display**: Retrieves and displays a list of books from the Stephen King API.
- **Book Details**: Shows detailed information about each book, including the title, author, price, and cover image.
- **Add to Cart**: Allows users to add books to their cart for later purchase.

### Cart Screen
- **Cart Display**: Shows all books that have been added to the cart.
- **Cart Management**: Allows users to increase or decrease the quantity of books in the cart or remove them entirely.
- **Purchase**: Provides an interface to proceed with the purchase of the books in the cart.

## Technical Choices

### React Native
- **Cross-Platform Development**: Enables the app to run on both iOS and Android devices with a single codebase.

### Libraries Used

#### `react-navigation/native`
- **Navigation**: Handles screen navigation within the app, providing a smooth user experience.

#### `reduxjs/toolkit`
- **State Management**: Simplifies state management with efficient and scalable Redux code.

#### `react-redux`
- **Redux Integration**: Connects Redux with React components, enabling the use of global state within the app.

#### `redux-persist`
- **State Persistence**: Persists Redux state across app restarts, ensuring a consistent user experience.

#### `testing-library/jest-native`
- **Testing**: Facilitates the testing of React Native components to ensure they work as expected.

### API
- **Stephen King API**: Fetches book data to be displayed in the Book List screen. P.S.: Unfortunately, this API has a relatively finite set of results and is not paginated. 

## Project Structure



# Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js (version 18 or higher) is installed.
- **Yarn**: Install Yarn package manager.

## Step 1: Clone this project

Clone this project with this command:

```bash
git clone https://github.com/eazzyLEE/book-nook.git

```

## Step 2: Install dependencies

Install the project's dependencies by running the following

```bash
yarn install

```

## Step 3: Install Pods [For iOS]

Install the project's cocoapod dependencies by running the following

```bash
cd ios && pod install && cd ..

```

## Step 4: Start the Metro Server [OPTIONAL]

This is optional because your script should automatically start Metro server by default.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start

```

## Step 5: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android

```

### For iOS

```bash
yarn ios

```

Or run from within Xcode

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Screenshots
![Book List Screenshot]<img src="https://github.com/eazzyLEE/book-nook/assets/29065790/01d52147-f56f-4e96-8516-6a973c71f407" width="375" height="800" />

![Book Detail Screenshot StarPrime]<img src="https://github.com/eazzyLEE/book-nook/assets/29065790/392a29ce-6247-4bdc-b708-03fb3068de4d" width="375" height="800" />

![Cart Screenshot]<img src="https://github.com/eazzyLEE/book-nook/assets/29065790/feeb4a16-78ae-4c76-a251-8fab69d92e16" width="375" height="800" />
