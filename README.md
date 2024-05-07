# CoPilotKit Project

## Introduction

Welcome to the integration guide for CopilotKit in our existing React project of Dev-Deakin! CopilotKit offers an open-source AI copilot platform designed to provide context-aware assistance, enhance user interaction, and streamline development processes. In this guide, we'll explain how to add the Copilot API key to your project and explore how CopilotKit can benefit our existing application, which allows users to post new questions, articles, and search for existing posts through a Copilot chat interface
## Getting Started with CopilotKit

To integrate CopilotKit into our React application, follow these steps:

1. **Sign Up for CopilotKit**: Visit the CopilotKit website and sign up for an account. Upon registration, you'll receive an API key.

2. **Add Copilot API Key to Your Project**: Open the root directory of our React project and create a new file named `.env` if it doesn't exist already. Add your Copilot API key to the `.env` file using the following format:

    ```
    REACT_APP_COPILOT_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with the API key you received from CopilotKit.

3. **Access Copilot Services in Your Application**: With the API key added, we can now access Copilot services in our application. We can make HTTP requests to the Copilot server to fetch responses from copilots and integrate them into our app's functionality.

Image 1:
![image](https://github.com/Chelseasingla1/copilotproject/assets/129886894/557c1628-dc6d-4822-a61d-a0969437ccc7)

**Click on the "chat" to access the chatbox**

**Chatbox Image:**

![image](https://github.com/Chelseasingla1/copilotproject/assets/129886894/29508411-2444-4152-b320-25b0f023d273)

Image 2:
![image](https://github.com/Chelseasingla1/copilotproject/assets/129886894/97fca112-76b1-454a-ad17-cce2a3dba04d)

Image 3:
![image](https://github.com/Chelseasingla1/copilotproject/assets/129886894/a9b6477f-ff1c-42be-bdc9-a0f01a87f038)

## How CopilotKit Can Help in Our Project

Integrating CopilotKit into our existing React project offers several advantages:

- **Context-Aware Assistance**: With CopilotKit, we can implement context-aware in-app chatbots that execute actions within the app. These copilots can provide users with assistance based on the current context, such as guiding them through form submissions, suggesting relevant actions, or providing help documentation.

- **AI-Enhanced Text Fields**: CopilotKit enables us to create AI-enhanced text fields offering context-sensitive autocomplete and insertions. This feature can enhance user experience by predicting user input, suggesting relevant options, and reducing manual effort in data entry tasks.

- **Seamless Interaction**: CopilotKit facilitates the integration of in-app AI agents that interact seamlessly with both our application and its users. These agents can offer personalized recommendations, answer user queries, and provide real-time assistance, thereby improving user engagement and satisfaction.
  
- **Efficient Search Functionality**:CopilotKit enables advanced search functionality within the chat interface, allowing users to search for specific articles or questions submitted by themselves or others. The chatbot can process search queries, retrieve relevant content from the database, and present the results in a user-friendly manner.


[![**Video Demonstration how this chatbox will actually help**](![image](https://github.com/Chelseasingla1/copilotproject/assets/129886894/ed8f356c-d51c-4990-bd4e-bae16ac46203)
)](https://youtu.be/9cNMypF5XM8)

[![**Video Demonstration 2 how this chatbox actually works**]()](https://youtu.be/RZDywu9OKP4)



By integrating CopilotKit into our existing React application, we can enhance user experience, streamline development processes, and introduce innovative features that elevate the functionality of our project.

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Chelseasingla1/copilotproject
   ```
2. Navigate into the project directory:
   ```bash
   cd copilotprojecy
   ```
3. Install dependencies using npm:
   ```bash
   npm install
   ```

## Usage
1. After installing the dependencies, you can run the development server using:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) to view the app.

## Obtaining API Key for Chatbox
To use the Open API in the app, you need to obtain an API key from the OpenAPI platform. Follow these steps to get your API key:
1. Sign in to your account or create a new one if you don't have an account yet.
2. Once logged in, navigate to the API section in your account settings.
3. Generate a new API key with the necessary permissions for the functionalities you intend to use in the app (e.g., trading, accessing market data).
4. Copy the generated API key and store it securely. Avoid sharing your API key with unauthorized parties.
5. Then add this OpenAPI key into .env.local file
[https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

## React Packages
### React Codemirror 2
- **Installation**: React Codemirror 2 can be installed via npm:
  ```bash
  npm install react-codemirror2
  ```
- **Usage**: To use React Codemirror 2 in your components, import it as follows:
  ```javascript
  import { Controlled as CodeMirror } from "react-codemirror2";
  ```
  Then, you can use `<CodeMirror />` components in your JSX.
- **Documentation**: Refer to the [official documentation](https://github.com/scniro/react-codemirror2) for detailed usage instructions and examples.

### React Markdown
- **Installation**: React Markdown can be installed via npm:
  ```bash
  npm install react-markdown
  ```
- **Usage**: After installation, you can import and use React Markdown in your components:
  ```javascript
  import ReactMarkdown from "react-markdown";
  ```
  Then, you can use the `<ReactMarkdown />` component to render Markdown content.
- **Documentation**: Refer to the [official documentation](https://github.com/remarkjs/react-markdown) for detailed usage instructions and examples.

### remark-gfm
- **Installation**: remark-gfm can be installed via npm:
  ```bash
  npm install remark-gfm
  ```
- **Usage**: After installation, you can use remark-gfm as a plugin with React Markdown to support GitHub Flavored Markdown:
  ```javascript
  import remarkGfm from "remark-gfm";
  import ReactMarkdown from "react-markdown";
  
  // Use remarkGfm as a plugin with ReactMarkdown
  <ReactMarkdown remarkPlugins={[remarkGfm]} />
  ```
- **Documentation**: Refer to the [official documentation](https://github.com/remarkjs/remark-gfm) for detailed usage instructions and examples.

## Troubleshooting
- If you encounter any errors related to missing dependencies, make sure you have installed all required packages by running `npm install`.
- If the development server fails to start or the app doesn't load in the browser, check the terminal/console for any error messages and try to resolve them accordingly.
- Ensure that your system meets the minimum requirements for running the app.

## Additional Information
- For more information on how to use Vite, refer to the [official documentation](https://vitejs.dev/guide/).
- For more information on React, refer to the [official documentation](https://reactjs.org/docs/getting-started.html).


