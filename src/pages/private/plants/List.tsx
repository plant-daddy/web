import { Link } from '@solidjs/router'
import { AiOutlineEdit, AiOutlinePlus } from 'solid-icons/ai'
import { FiTrash2 } from 'solid-icons/fi'
import { type Component, For, Match, Switch } from 'solid-js'

import { Button } from '../../../components/global/Button'
import { Spinner } from '../../../components/global/Spinner'
import { usePlants } from '../../../hooks'

export const PlantsList: Component = () => {
  const plants = usePlants()

  return (
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-nunito">Plants</h1>
        <Link href="/dashboard/plants/create">
          <Button class="bg-green-500 flex gap-2 p-3">
            <AiOutlinePlus />
            Create new plant
          </Button>
        </Link>
      </div>

      <table class="table-auto">
        <thead class="border-b">
          <tr>
            <th class="px-6 py-4">ID</th>
            <th class="px-6 py-4 text-start">Common Name</th>
            <th class="px-6 py-4 text-start">Botanical Name</th>
            <th class="px-6 py-4 text-start">Type</th>
            <th class="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Switch>
            <Match when={plants.isLoading}>
              <Spinner />
            </Match>
            <Match when={plants.isSuccess}>
              <For each={plants.data}>
                {(plant) => (
                  <tr class="border-b">
                    <td class="px-6 py-4">{plant.id}</td>
                    <td class="px-6 py-4">{plant.commonName}</td>
                    <td class="px-6 py-4">{plant.botanicalName}</td>
                    <td class="px-6 py-4">{plant.type}</td>
                    <td class="flex gap-2 px-6 py-4">
                      <Link href={`/dashboard/plants/${plant.id}`}>
                        <Button class="bg-green-500 p-2">
                          <AiOutlineEdit size={18} />
                        </Button>
                      </Link>
                      <Button class="bg-red-500 p-2">
                        <FiTrash2 size={18} />
                      </Button>
                    </td>
                  </tr>
                )}
              </For>
            </Match>
          </Switch>
        </tbody>
      </table>
    </div>
  )
}
