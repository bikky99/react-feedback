import React from 'react'
import Card from './shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackForm = () => {
    
    const [text, setText ] = useState('')
    const [rating, setRating ] = useState(10)
    const [btnDisabled, setBtnDisabled ] = useState('true')
    const [message, setMessage ] = useState('')

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            setBtnDisabled(false)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }else if (text !== '' & text.trim().length <= 10) {
            setMessage('Please enter at least 10 characters')
            setBtnDisabled(true)
        }
        else { 
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            if(text.trim().length > 10) {
                const newFeedback = {
                    text,
                    rating
                }

                if (feedbackEdit.edit === true) {
                    updateFeedback(feedbackEdit.item.id, newFeedback)
                } else {
                    addFeedback(newFeedback)
                }
                setText('')
            }
        }

  return (
    <Card>
        <form onSubmit={handleSubmit} >
            <h2>How would you rate our service with us?</h2>

    <RatingSelect select={(rating) => setRating(rating)} />


        <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='Write a review'
            value={text}
             />
            <Button type='submit' version='secondary' isDisabled={btnDisabled} >Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm