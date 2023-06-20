# GPT-Based Poem Generator

This is a web application built using Next.js and the OpenAI API to generate poems in the style of a given author, on a given theme.

## Requirements

- Node.js
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/poemgpt.git
```

Navigate into the project directory:

```bash
cd poemgpt
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add the following line, replacing `your-api-key` with your OpenAI API key:

```bash
NEXT_PUBLIC_OPENAI_API_KEY=your-api-key
```

## Running the Application

To run the application in development mode, use:

```bash
npm run dev
```

To build the application for production, use:

```bash
npm run build
```

To start the application in production mode, use:

```bash
npm start
```

## Usage

Navigate to `http://localhost:3000` in your browser. You should see a form where you can select the language, length of the poem, whether it should include rhymes, the style (e.g., Victor Hugo), and the theme (e.g., artificial intelligence).

Click the "Generate" button to generate the poem.