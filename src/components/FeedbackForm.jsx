import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

function FeedbackForm() {
  const [reviewText, setReviewText] = useState('')
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const handleReviewTextChange = e => {
    if(reviewText === ''){
        setIsSubmitButtonDisabled(true)
        setMessage(null)
    }else if (reviewText !== '' && reviewText.trim().length <= 5){
        setIsSubmitButtonDisabled(true)
        setMessage('Text must be at least 5 characters')
    }else {
        setIsSubmitButtonDisabled(false)
        setMessage(null)
    }
    setReviewText(() => e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us...</h2>
        <div className='input-group'>
          <input
            onChange={handleReviewTextChange}
            type='text'
            placeholder='Write a review'
            value={reviewText}
          />
          <Button type='submit' isDisabled={isSubmitButtonDisabled}>
            tasty clam
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
