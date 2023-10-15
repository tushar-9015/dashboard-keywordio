import React, {useState} from 'react'
import CustomForm from '../../components/Form/CustomForm'
import { useNavigate } from 'react-router-dom'

function MediaForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate()

    const backCallback = () => {
        navigate("/create");
    }

    const submitCallback = () => {
      console.log(123);
      setTimeout(() => navigate("/create"), 600);
      setIsSubmitted(true)
  }
  return (
    <div>
        <CustomForm 
        type="media"
        isSubmitted={isSubmitted}
        backCallback={backCallback}
        submitCallback={submitCallback}/>
    </div>
  )
}

export default MediaForm