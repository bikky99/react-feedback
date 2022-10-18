import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import feedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'



const App = () => {
    const [feedback, setFeedback] = useState(feedbackData);

    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete this feedback?')) { 
        setFeedback(feedback.filter((item) => item.id !== id)) 
          }}
 

  return (
    <>
        <Header text='Feedback UI' /> 
        <div className='container'>
            <FeedbackStats feedback = {feedback} />
            <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback} />
        </div>
    </>
  )
}

export default App