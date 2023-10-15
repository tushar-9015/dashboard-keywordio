import React, { useState } from 'react'
import { Paper, Box, Card } from '@mui/material'
import "./createads.css"
import { useNavigate } from 'react-router-dom'

function CreateAds() {
  const [selectedCard, setSelectedCard] = useState({text: false, media: false})

  const navigate = useNavigate();

  const navigateTo = () => {

    if(selectedCard.text && !selectedCard.media) {
      navigate("/text-form")
    } else {
      navigate("/media-form")
    }
  }
  


  return (
    <div className='create'>
      <div className='create__card'>
      <Card className='card' onClick={() => setSelectedCard({...selectedCard, text: !selectedCard.text})}>
       <input id="text-form" type='checkbox' checked={selectedCard.text} onChange={() => setSelectedCard({...selectedCard, text: !selectedCard.text})} />
       <Box sx={{display: "flex", flexDirection: "column"}}>
        <img className='img-fluid' src="src/assets/text-screen.webp" alt='text-screen'/>
        <div>
          <p className='text-center subtitle'>Create</p>
          <h3 className='text-center title'>Text Ad</h3>
        </div>
       </Box>

      </Card>
      <Card className='card' onClick={() => setSelectedCard({...selectedCard, media: !selectedCard.media})}>
       <input id="media-form" type='checkbox' checked={selectedCard.media} onChange={() => setSelectedCard({...selectedCard, media: !selectedCard.media})}/>
       <Box sx={{display: "flex", flexDirection: "column"}}>
        <img className='img-fluid' src="src/assets/media-screen.webp" alt='media-screen'/>
        <div>
          <p className='text-center subtitle'>Create</p>
          <h3 className='text-center'>Media Ad</h3>
        </div>
       </Box>
      </Card>
      </div>

      <button className='btn btn-primary createad-btn' onClick={navigateTo} disabled={!selectedCard.text && !selectedCard.media}>Next</button>
    </div>
  )
}

export default CreateAds