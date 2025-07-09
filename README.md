# SHARON Academic Assistant

SHARON (Scholarly Help and Research Online Navigator) is an AI-powered academic assistant designed to support students throughout their academic journey. From brainstorming research ideas to drafting documents, analyzing papers, and preparing for presentations, SHARON offers a suite of intelligent tools to enhance productivity and learning.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration (Crucial!)](#environment-configuration-crucial)
- [Running the Application](#running-the-application)
  - [1. Compiling TypeScript](#1-compiling-typescript)
  - [2. Serving the Application](#2-serving-the-application)
- [Internationalization (i18n)](#internationalization-i18n)
- [Theming](#theming)
- [Gemini API Usage](#gemini-api-usage)
- [Contributing](#contributing)
- [License](#license)

## Description

SHARON aims to be an indispensable co-pilot for students, leveraging the power of Google's Gemini API to provide context-aware assistance for a wide range of academic tasks. The application is designed with a focus on user experience, offering a clean, responsive interface with light and dark modes, and support for multiple languages.

## Features

The application is a comprehensive suite of specialized academic tools:
*   **Dashboard:** Central hub for accessing all features.
*   **Idea Spark:** Brainstorm unique academic project ideas.
*   **DocuCraft:** Draft various sections of academic documents.
*   **StealthWriter:** Paraphrase and enhance text for clarity and originality.
*   **Professor AI:** Get simulated expert feedback on your work.
*   **InsightWeaver:** Synthesize literature, identify themes, and discover research gaps.
*   **LitReview Snippets:** Get AI-generated summary snippets from relevant academic sources.
*   **Resource Rover:** Discover academic articles with AI-powered search.
*   **Paper Analyzer:** Get summaries, methodologies, and limitations from research papers.
*   **Document Lab:** Upload your own documents for processing with SHARON's tools.
*   **Diagram Drafter:** Visualize concepts and processes with AI-generated diagrams.
*   **CiteWise:** Generate citations in various academic formats.
*   **IntegrityGuard:** Perform a simulated originality check on your text.
*   **Study Buddy AI:** An interactive AI tutor for any subject.
*   **Viva Voce Prep:** Generate potential defense questions and answers from your project.
*   **Presentation Crafter:** Create structured presentation outlines.
*   **Success Hub:** Get general academic advice and support.
*   **Prompt Lab:** Experiment with custom prompts and model settings.
*   **Settings:** Configure global preferences for all tools.


## Tech Stack

*   **Frontend:** React 19, TypeScript
*   **Routing:** React Router DOM v7
*   **AI:** Google Gemini API (via `@google/genai` SDK)
*   **Styling:** Tailwind CSS (CDN version configured in `index.html`)
*   **Module Loading:** ES Modules with `importmap` for CDN dependencies.
*   **Build Process:** TypeScript Compiler (`tsc`) for compiling `.tsx` and `.ts` files to JavaScript.
*   **Internationalization (i18n):** Custom context-based solution.
*   **State Management:** React Context API.

## Project Structure

The project uses a standard `src` directory structure. The root `index.html` is the entry point that loads the compiled application.

```
.
├── dist/                     # Compiled JavaScript output from tsc
├── src/                      # All application source code
│   ├── App.tsx               # Main app component with routing
│   ├── components/           # Reusable React components
│   │   ├── common/           # Generic components (Button, Card, Modal, etc.)
│   │   └── icons/            # SVG icon components
│   ├── constants.ts          # Application-wide constants
│   ├── contexts/             # React context providers for global state
│   ├── features/             # Components for each main application feature/page
│   ├── hooks/                # Custom React hooks
│   ├── index.tsx             # React DOM entry point for the app
│   ├── locales/              # Internationalization (i18n) translation files
│   ├── services/             # API call logic (geminiService.ts)
│   ├── types.ts              # TypeScript type definitions
│   └── utils/                # Utility functions (e.g., download helper)
├── index.html                # Main HTML entry point (loads compiled JS from /dist)
├── metadata.json             # Application metadata for the platform
├── package.json              # Project dependencies and scripts
├── README.md                 # This file
└── tsconfig.json             # TypeScript compiler configuration
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

*   **Node.js and npm:** Ensure you have Node.js (which includes npm) installed.
    *   [Node.js download](https://nodejs.org/)
*   **Modern Web Browser:** Chrome, Firefox, Edge, Safari, etc.

### Installation

1.  **Clone the repository (or download the source code):**
    ```bash
    git clone https://your-repository-url/sharon-academic-assistant.git
    cd sharon-academic-assistant
    ```
2.  **Install development dependencies:**
    This installs the TypeScript compiler and linter.
    ```bash
    npm install
    ```

### Environment Configuration (Crucial!)

SHARON uses the Google Gemini API, which requires an API key. The application code expects the key to be available via `process.env.API_KEY`.

Since this is a client-side application without a bundler like Vite or Webpack to manage environment variables, you must manually provide the API key for local development.

**Add the following script tag to the root `index.html` file**, right before the main module script (`<script type="module" src="./dist/index.js"></script>`):

```html
<!-- In index.html -->
<script>
  // WARNING: For local development only.
  // Do NOT commit this file with a real API key to a public repository.
  window.process = {
    env: {
      API_KEY: "YOUR_GEMINI_API_KEY_HERE"
    }
  };
</script>
```

**Under no circumstances should a real API key be hardcoded directly into the committed TypeScript source code.**

## Running the Application

The application is built by compiling TypeScript to JavaScript and then served using a simple static HTTP server.

### 1. Compiling TypeScript

Navigate to the project's root directory in your terminal and run:
```bash
npx tsc
```
This command compiles all `.ts` and `.tsx` files from the `src` directory into JavaScript files in the `dist` directory, as configured in `tsconfig.json`.

### 2. Serving the Application

Once compilation is complete, you must serve the project's **root directory** with a static server. This allows `index.html` to correctly load the compiled scripts from the `/dist/` folder.

*   **Using `serve` (Node.js package):**
    If you don't have `serve`, install it globally: `npm install -g serve`. Then, from your project's root directory, run:
    ```bash
    serve -s .
    ```
    Open your browser to the local address provided (e.g., `http://localhost:3000`).

*   **Using Python's HTTP Server:**
    If you have Python installed, navigate to your project's root directory and run:
    *   For Python 3: `python -m http.server`
    *   For Python 2: `python -m SimpleHTTPServer`
    Open your browser to `http://localhost:8000`.


## Internationalization (i18n)

SHARON supports multiple languages using a custom React Context-based solution.
*   Translation files are located in `src/locales/`.
*   Supported languages include English (en), Spanish (es), French (fr), German (de), Nigerian Pidgin (en-NG-x-pidgin), Hausa (ha), Yoruba (yo), and Igbo (ig).

## Theming

*   Supports **Light and Dark modes**.
*   The user's theme preference is stored in `localStorage`.
*   Tailwind CSS is configured with custom color palettes for both themes directly in `index.html`.

## Gemini API Usage

*   The application uses the `@google/genai` SDK to interact with Google's Gemini models.
*   API calls are centralized in `src/services/geminiService.ts`.
*   The service includes basic retry logic for API calls to handle transient network issues.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and open a pull request.

## License

This project is currently not licensed. Please assume all rights are reserved unless otherwise specified.