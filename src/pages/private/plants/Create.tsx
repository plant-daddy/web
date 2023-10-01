import { Motion, Presence } from '@motionone/solid'
import { Link } from '@solidjs/router'
import { FaSolidChevronDown, FaSolidChevronUp, FaSolidUpload } from 'solid-icons/fa'
import { type Component, Match, Show, Switch, createSignal } from 'solid-js'

import { Input, TextArea } from '../../../components/global'
import { Button } from '../../../components/global/Button'

export const CreatePlant: Component = () => {
  const [isExtraExpanded, setIsExtraExpanded] = createSignal(false)

  return (
    <form class="bg-white p-6 rounded-lg">
      <h1 class="text-2xl font-nunito mb-6">Create plant</h1>
      <hr class="my-6 border-gray-700" />

      <div class="grid gap-6 grid-cols-2">
        <div class="p-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center text-center cursor-pointer">
          <input type="file" class="hidden" accept="image/*" />
          <label class="flex flex-col align-center">
            <FaSolidUpload size={36} class="self-center mb-2" />
            <h5 class="mb-2 text-xl font-bold">Upload picture</h5>
            <p>
              Photo size should be less than <b class="text-green-300">2mb</b>
            </p>
            <p class="md:px-6">
              and should be in <b class="text-green-300">JPG, PNG or JPEG</b> format.
            </p>
          </label>
        </div>

        <div class="flex flex-col justify-between">
          <Input required name="common_name" label="Common Name" />
          <Input required name="botanical_name" label="Botanical Name" />
        </div>
        <TextArea required name="description" label="Description" />
        <TextArea required name="light" label="Light" />
        <TextArea required name="soil" label="Soil" />
        <TextArea required name="water" label="Water" />
        <TextArea required name="fertilizer" label="Fertilizer" />
      </div>

      <div class="flex my-6 justify-between px-4">
        <h1 class="text-xl">Extras</h1>
        <Button class="p-0" onClick={() => setIsExtraExpanded(!isExtraExpanded())}>
          <Switch
            fallback={
              <Motion.div animate={{ rotate: '-180deg' }}>
                <FaSolidChevronUp />
              </Motion.div>
            }>
            <Match when={isExtraExpanded()}>
              <Motion.div animate={{ rotate: '180deg' }}>
                <FaSolidChevronDown />
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
        <Link href="/dashboard/plants">
          <Button>Cancel</Button>
        </Link>
        <Button class="bg-green-500" type="submit">
          Save
        </Button>
      </div>
    </form>
  )
}
