import { Link, Outlet } from '@solidjs/router'
import { AiOutlineEdit, AiOutlinePlus } from 'solid-icons/ai'
import { FiTrash2 } from 'solid-icons/fi'
import { type Component, For, Match, Switch, createSignal } from 'solid-js'

import { Button } from '../../../components/global/Button'
import { Modal } from '../../../components/global/Modal'
import { Pagination } from '../../../components/global/Pagination'
import { Spinner } from '../../../components/global/Spinner'
import { usePlants } from '../../../hooks'

export const PlantsList: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false)
  const plants = usePlants()

  return (
    <>
      <div class="flex flex-col gap-8 overflow-auto h-full">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-nunito">Plants</h1>
          <Link href="/dashboard/plants/create">
            <Button class="bg-green-300 flex gap-2 p-3">
              <AiOutlinePlus />
              Add new plant
            </Button>
          </Link>
        </div>

        <div class="overflow-y-scroll">
          <table class="table-auto">
            <thead class="bg-green-800 sticky top-0 rounded">
              <tr>
                <th class="px-6 py-4">ID</th>
                <th class="px-6 py-4 text-start">Common Name</th>
                <th class="px-6 py-4 text-start">Botanical Name</th>
                <th class="px-6 py-4 text-start">Type</th>
                <th class="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              <Switch>
                <Match when={plants.isLoading}>
                  <Spinner />
                </Match>
                <Match when={plants.isSuccess}>
                  <For each={plants.data}>
                    {(plant) => (
                      <tr class="border-b w-1/12">
                        <td class="px-6 py-4">{plant.id}</td>
                        <td class="px-6 py-4">{plant.commonName}</td>
                        <td class="px-6 py-4">{plant.botanicalName}</td>
                        <td class="px-6 py-4">{plant.type}</td>
                        <td class="flex gap-2 px-6 py-4">
                          <Link href={`/dashboard/plants/${plant.id}`}>
                            <Button class="bg-green-300 !p-2">
                              <AiOutlineEdit size={18} />
                            </Button>
                          </Link>
                          <Button class="bg-red-500 !p-2" onClick={() => setIsOpen(true)}>
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
        <div class="self-end">
          <Pagination
            currentPage={3}
            onPageChange={() => {}}
            registersPerPage={30}
            totalCountOfRegisters={500}
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        body={
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 class="font-nunito text-xl text-gray-50">Delete plant</h3>
            <div class="mt-2">
              <p class="text-gray-50">
                Are you sure you want to delete this plant? This action cannot be undone.
              </p>
            </div>
          </div>
        }
        footer={
          <>
            <Button class="bg-red-500" onClick={() => setIsOpen(false)}>
              Delete
            </Button>
            <Button
              class="text-gray-50 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-gray-800"
              onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </>
        }
      />
      <Outlet />
    </>
  )
}
