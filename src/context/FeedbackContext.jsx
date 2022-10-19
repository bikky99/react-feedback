import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "This is a test feedback",
      rating: 5,
    },
  ]);

  return (
    <FeedbackContext.Provider value={{ feedbacks }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
