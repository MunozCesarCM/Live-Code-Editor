# Live Code Editor

## [View Site ↗️](https://code-editor-munozcesar.netlify.app/)

## Introduction 🚀
Welcome to my code editor! A ReactJS application that provides you with a versatile sandbox environment for creating and testing HTML, CSS, and JavaScript code snippets. With real-time rendering and an user-friendly interface, this platform allows you to unleash your coding skills and bring your web development ideas to life.

## Key Features
* 🌟 Live Rendering: Experience the immediate visual output of your HTML, CSS, and JavaScript code, enabling you to iterate and refine your creations efficiently.
* 🧩 Multi-Language Support: Write and experiment with HTML, CSS, and JavaScript code within a single environment, simplifying your development workflow.
* 💡 Example Projects: Explore a collection of pre-built projects that demonstrate the editor's capabilities and provide inspiration for your own creations.

## Project Structure
The project follows a well-organized structure designed to enhance maintainability and modularity. Each directory serves a specific purpose, promoting separation of concerns and ease of navigation.

* 📂 components: This directory contains the editor's heart, housing the JSX files responsible for the code editor, its container, and the header components. By separating these components into their dedicated folder, the project achieves a clear separation of concerns, making it easier to understand and modify each individual component.

* 📂 constants: The constants directory holds a set of example projects that showcase the editor's features and serve as a reference for users. By centralizing these projects in a dedicated directory, developers can easily manage and update the example projects without cluttering other parts of the codebase.

* 📂 context: The context directory includes a single file that manages context within the application. Context provides a way to share data between components without the need for prop drilling. By isolating the context-related logic in a separate directory, the project maintains a clear and organized structure.

> This project structure ensures that the editor remains modular, scalable, and easy to navigate. It allows developers to focus on specific components or functionalities without getting overwhelmed by unnecessary code.

## Getting Started
### Prerequisites

Before you dive into the editor, ensure you have the following prerequisites installed on your system:

* ⚙️ Node.js: Make sure you have Node.js (version 19.3.0) installed. Visit the official Node.js website to download and install the appropriate version for your operating system.

### Installation

Follow the steps below to set up the editor on your local machine:

Clone the repository:

```sh
git clone https://github.com/MunozCesarCM/Live-Code-Editor.git
```
  
Install the required dependencies:

```sh
yarn
```
  
### Usage
To start using the editor, follow the instructions below:

Launch the development server:

```sh
yarn dev
```

Open your web browser and navigate to http://localhost:5173 to access the editor.
