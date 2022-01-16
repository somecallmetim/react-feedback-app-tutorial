import { useContext, useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(10)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setIsSubmitButtonDisabled(false)
      setReviewText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleReviewTextChange = e => {
    if (reviewText === '') {
      setIsSubmitButtonDisabled(true)
      setMessage(null)
    } else if (reviewText !== '' && reviewText.trim().length <= 5) {
      setIsSubmitButtonDisabled(true)
      setMessage('Text must be at least 5 characters')
    } else {
      setIsSubmitButtonDisabled(false)
      setMessage(null)
    }
    setReviewText(() => e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (reviewText.trim().length >= 5) {
      const newFeedback = {
        text: reviewText,
        rating,
      }

      addFeedback(newFeedback)
      setReviewText('')
      setRating(10)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us...</h2>
        <RatingSelect select={rating => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleReviewTextChange}
            type='text'
            placeholder='Write a review'
            value={reviewText}
          />
          <Button type='submit' isDisabled={isSubmitButtonDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
