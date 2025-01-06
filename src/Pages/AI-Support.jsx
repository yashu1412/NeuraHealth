import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Navbar from "../Components/Common/Navbar"; 
import Footer from "../Components/Common/Footer";

function NeuraHealthChatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); 

    // Add user question to chat history
    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAmCXQ0zeG1LEOx_7lfuzPdSP8QXQS48Tc`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }]);
      setAnswer(aiResponse);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-violet-900 text-white mt-24 flex flex-col">
      <Navbar /> 
      <div className="flex-grow h-full max-w-4xl mx-auto flex flex-col p-3">
        {/* Fixed Header */}
        <header className="text-center py-4">
          <a href="https://your-neurahealth-website.com" target="_blank" rel="noopener noreferrer" className="block">
            <h1 className="text-4xl font-bold text-violet-400 hover:text-violet-300 transition-all duration-300 ease-in-out">
              NeuraHealth Chatbot
            </h1>
          </a>
        </header>
  
        {/* Scrollable Chat Container */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto mb-4 rounded-lg bg-black bg-opacity-30 shadow-xl p-4 hide-scrollbar animate-fadeIn"
        >
          {/* Chat content here */}
          {chatHistory.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="bg-violet-800 bg-opacity-20 rounded-xl p-8 max-w-2xl animate-fadeInSlow">
                <h2 className="text-2xl font-bold text-violet-300 mb-4">Welcome to NeuraHealth Chatbot! 👋</h2>
                <p className="text-gray-300 mb-4">I'm here to assist you with health-related queries, such as:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-black bg-opacity-20 p-4 rounded-lg shadow-sm">
                    <span className="text-violet-400">🩺</span> Medical information
                  </div>
                  <div className="bg-black bg-opacity-20 p-4 rounded-lg shadow-sm">
                    <span className="text-violet-400">💊</span> Medication guidance
                  </div>
                  <div className="bg-black bg-opacity-20 p-4 rounded-lg shadow-sm">
                    <span className="text-violet-400">🧘‍♀️</span> Mental health advice
                  </div>
                  <div className="bg-black bg-opacity-20 p-4 rounded-lg shadow-sm">
                    <span className="text-violet-400">🥗</span> Nutrition tips
                  </div>
                </div>
                <p className="text-gray-400 mt-6 text-sm">Type your question below and press Enter or click Send!</p>
              </div>
            </div>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 ${chat.type === "question" ? "text-right animate-slideInRight" : "text-left animate-slideInLeft"}`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
                    chat.type === "question"
                      ? "bg-violet-600 text-white rounded-br-none"
                      : "bg-gray-800 text-gray-200 rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown className="overflow-auto hide-scrollbar">{chat.content}</ReactMarkdown>
                </div>
              </div>
            ))
          )}
          {generatingAnswer && (
            <div className="text-left">
              <div className="inline-block bg-gray-800 p-3 rounded-lg animate-pulse">Thinking...</div>
            </div>
          )}
        </div>
  
        {/* Fixed Input Form */}
        <form onSubmit={generateAnswer} className="bg-gray-900 rounded-lg shadow-lg p-4">
          <div className="flex gap-2">
            <textarea
              required
              className="flex-1 border border-gray-700 bg-black text-white rounded p-3 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything about health..."
              rows="2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  generateAnswer(e);
                }
              }}
            ></textarea>
            <button
              type="submit"
              className={`px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transform transition-all duration-300 hover:scale-105 ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer /> 
    </div>
  );
  
}

export default NeuraHealthChatbot;
