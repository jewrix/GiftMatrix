import './App.css'
import { Grid } from '@chakra-ui/react'
import { GiftItem } from './components'
import { useState } from 'react'

function App() {
  const [gifts, setGifts] = useState<{ model: string; name: string }[]>(
    Array.from({ length: 9 }, () => ({ model: '', name: '' })),
  )

  const onGiftChange = (index: number) => (newGift: any) => {
    setGifts((gifts) => {
      const newGifts = [...gifts]

      newGifts[index] = newGift

      return newGifts
    })
  }

  console.log({ gifts })

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
      {gifts.map((gift, index) => (
        <GiftItem onChange={onGiftChange(index)} gift={gift} />
      ))}
    </Grid>
  )
}

export default App
