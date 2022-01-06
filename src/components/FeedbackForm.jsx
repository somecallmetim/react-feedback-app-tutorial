import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

function FeedbackForm() {
  const [reviewText, setReviewText] = useState('')
  const handleReviewTextChange = e => {
    setReviewText(e.target.value)
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
          {/* <button type='submit'>Send</button> */}
          <Button type='submit'>
            tasty clam
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
