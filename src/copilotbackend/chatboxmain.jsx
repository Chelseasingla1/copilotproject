import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useMakeCopilotReadable } from "@copilotkit/react-core";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  // Provide the Copilot with information about the application state
  useMakeCopilotReadable(JSON.stringify({ question, answer }));

  async function questionasked(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer...\nIt might take up to 10 seconds");
    try {
      // Send the question to CopilotKit for processing
      const response = await axios.post("/api/copilotkit", { question });

      // Update the answer with the response from CopilotKit
      setAnswer(response.data.answer);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div>
        <form onSubmit={questionasked}>
          <h1>Chatbox</h1>
          <textarea
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type a message..."
          ></textarea>
          <button type="submit" disabled={generatingAnswer}>
            Send
          </button>
        </form>
        <div>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
