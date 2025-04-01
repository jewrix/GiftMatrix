import { Box, Drawer, GridItem, Heading } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { GiftParamsDrawer } from '../GiftParamsDrawer'
import { Symbol } from '../Symbol/symbol.tsx'
import { CDN_URL } from '../../shared/config'

interface Props {
  gift: {
    name: string
    model: string
    backdropName?: string
    symbolName?: string
  }
  onChange?: (gift: any) => void
}

export const GiftItem: FC<Props> = ({ gift, onChange }) => {
  const { name, model, symbolName = 'Diamond', backdropName = 'Sapphire' } = gift

  const [lottieAnime, setLottieAnime] = useState(null)
  const [backdrop, setBackdrop] = useState([])

  useEffect(() => {
    if (!name || !model) return

    axios.get(`${CDN_URL}/models/${name}/lottie/${model}.json`).then((data) => {
      setLottieAnime(data.data)
    })
  }, [name, model])

  useEffect(() => {
    if (!name || !model) return

    axios.get(`${CDN_URL}/backdrops/${name}/backdrops.json`).then((data) => {
      setBackdrop(data.data)
    })
  }, [name])

  const currentBackdrop = backdrop.find((item: any) => item.name === backdropName)

  const symbolUrl = `${CDN_URL}/patterns/${name}/png/${symbolName}.png`

  return (
    <Drawer.Root placement={'bottom'}>
      <Drawer.Trigger asChild>
        <GridItem overflow="hidden" position="relative">
          <Box
            border="1px solid red"
            borderRadius="8px"
            width="197px"
            height="197px"
            position="relative"
            background={`radial-gradient(circle, ${currentBackdrop?.hex.centerColor} 20%, ${currentBackdrop?.hex.edgeColor} 80%)`}
          >
            <Symbol src={symbolUrl} />

            <Box
              style={{
                backgroundColor: 'red',
                width: '83px',
                position: 'absolute',
                right: '-22px',
                top: '10px',
                rotate: '45deg',
                padding: 0,
                paddingInline: 0,
              }}
            >
              <Heading color="white" lineHeight="1" fontSize="xs" zIndex="99" py="4px">
                #11123
              </Heading>
            </Box>
            <Lottie
              style={{
                position: 'absolute',
                inset: 0,
                padding: '12px',
                zIndex: 1,
              }}
              animationData={lottieAnime}
            />
          </Box>
        </GridItem>
      </Drawer.Trigger>
      <GiftParamsDrawer onChange={onChange} />
    </Drawer.Root>
  )
}
