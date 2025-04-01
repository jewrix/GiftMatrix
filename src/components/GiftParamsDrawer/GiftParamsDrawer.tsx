import { Button, CloseButton, Drawer, Portal } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { NativeSelect } from '../Select/Select.tsx'
import { models } from '../../shared/models/models.ts'

interface Props {
  onChange?: (gift: any) => void
}

export const GiftParamsDrawer: FC<Props> = ({ onChange }) => {
  const [gift, setGift] = useState<string>('Astral Shard')
  const [model, setModel] = useState<string>('Blender')

  const onChangeGift = (e: any) => {
    setGift(e.target.value)
  }

  const onChangeModel = (e: any) => {
    setModel(e.target.value)
  }

  const onClick = () => {
    onChange?.({ name: gift, model })
  }

  // @ts-ignore
  const modelOptions = models[gift]?.map((model) => ({
    value: model.name,
    label: `${model.name} (${model.rarity}%)`,
  }))

  console.log({ modelOptions })

  return (
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <NativeSelect
              items={[
                { value: 'Astral Shard', label: 'Astral Shard' },
                { value: 'Witch Hat', label: 'Witch Hat' },
              ]}
              value={gift}
              onChange={onChangeGift}
            />
            <NativeSelect
              // @ts-ignore
              items={modelOptions}
              value={model}
              onChange={onChangeModel}
            />
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.ActionTrigger>
            <Drawer.ActionTrigger asChild>
              <Button onClick={onClick} disabled={gift === ''}>
                Save
              </Button>
            </Drawer.ActionTrigger>
          </Drawer.Footer>
          <Drawer.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  )
}
