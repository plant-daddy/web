import { Motion, Presence } from '@motionone/solid'
import { Link, useNavigate } from '@solidjs/router'
import { FaSolidChevronDown, FaSolidChevronUp } from 'solid-icons/fa'
import { type Component, Match, Show, Switch, createSignal } from 'solid-js'

import { ImagePicker, Input } from '../../../components/global'
import { Button } from '../../../components/global/Button'
import { Modal } from '../../../components/global/Modal'

export const EditPlant: Component = () => {
  const [isExtraExpanded, setIsExtraExpanded] = createSignal(false)

  const [isOpen] = createSignal(true)

  const navigate = useNavigate()

  const close = () => {
    navigate('..')
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={close}
      class="w-1/2"
      body={
        <form class="bg-white p-6 rounded-lg">
          <h1 class="text-2xl font-nunito mb-6">Edit plant</h1>
          <hr class="my-6 border-gray-700" />

          <div class="grid gap-6 grid-cols-2">
            <ImagePicker />

            <div class="flex flex-col gap-6">
              <Input required name="common_name" label="Common Name" />
              <Input required name="botanical_name" label="Botanical Name" />
            </div>

            <Input required name="description" label="Description" />
            <Input required name="light" label="Light" />
            <Input required name="soil" label="Soil" />
            <Input required name="water" label="Water" />
            <Input required name="fertilizer" label="Fertilizer" />
          </div>

          <div class="flex my-6 justify-between px-4 items-center">
            <h1 class="text-xl">Extras</h1>
            <Button class="p-0" onClick={() => setIsExtraExpanded(!isExtraExpanded())}>
              <Switch
                fallback={
                  <Motion.div animate={{ rotate: '-180deg' }}>
                    <FaSolidChevronUp color="white" />
                  </Motion.div>
                }>
                <Match when={isExtraExpanded()}>
                  <Motion.div animate={{ rotate: '180deg' }}>
                    <FaSolidChevronDown color="white" />
                  </Motion.div>
                </Match>
              </Switch>
            </Button>
          </div>
          <hr class="my-6 border-gray-600" />

          <Presence>
            <Show when={isExtraExpanded()}>
              <Motion.div
                class="grid grid-cols-1 gap-6 md:grid-cols-2"
                animate={{
                  y: [100, 0]
                }}
                exit={{
                  y: [0, 100],
                  opacity: 0
                }}>
                <Input name="type" label="Type" />
                <Input name="mature_size" label="Mature Size" />
                <Input name="sun_exposure" label="Sun Exposure" />
                <Input name="soil_type" label="Soil Type" />
                <Input name="soil_ph" label="Soil Ph" />
                <Input name="bloom_time" label="Bloom Time" />
                <Input name="flower_color" label="Flower Color" />
                <Input name="hardiness_zones" label="Hardiness Zones" />
                <Input name="native_area" label="Native Area" />
                <Input name="temperature_and_humidity" label="Temperature and Humidity" />
                <Input name="toxicity" label="Toxicity" />
              </Motion.div>
            </Show>
          </Presence>

          <div class="flex justify-end mt-6">
            <Link href="..">
              <Button class="text-gray-50">Cancel</Button>
            </Link>
            <Button class="bg-green-300" type="submit">
              Save
            </Button>
          </div>
        </form>
      }
    />
  )
}
