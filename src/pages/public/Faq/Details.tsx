import { Link, useParams } from '@solidjs/router'
import { FiChevronLeft } from 'solid-icons/fi'
import { type Component, Match, Switch } from 'solid-js'

import { FaqHeader } from '../../../components/faq/Header'
import { Spinner } from '../../../components/global/Spinner'
import { useQuestion } from '../../../hooks/useQuestion'

export const FaqDetails: Component = () => {
  const params = useParams()

  const faq = useQuestion(params.id)

  return (
    <div class="bg-gray-50 h-screen text-green-800">
      <FaqHeader />
      <div class="flex justify-center m-12">
        <div class="flex flex-col w-2/4 gap-8">
          <Link href="/faq">
            <FiChevronLeft class="text-green-800 text-2xl self-start border-2 rounded-xl" />
          </Link>
          <Switch>
            <Match when={faq.isLoading}>
              <Spinner />
            </Match>
            <Match when={faq.isSuccess && faq.data}>
              <div class="flex flex-col gap-2">
                <h2 class="text-green-800 text-xl">{faq.data?.question}</h2>
                <p>{faq.data?.updatedAt}</p>
                <div class="text-green-800 p-8" innerHTML={faq.data?.answer} />
              </div>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  )
}
