import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a test feedback",
      rating: 5,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
    };

    // update the feedback
    const updateFeedback = (id, updItem) => {
      setFeedback(
        feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
      )
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item, 
        edit: true
        });}


  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, feedbackEdit, updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
