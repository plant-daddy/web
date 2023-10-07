import { Link } from '@solidjs/router'
import { FiChevronRight } from 'solid-icons/fi'
import { type Component, For, Match, Switch } from 'solid-js'

import { FaqHeader } from '../../../components/faq/Header'
import { Spinner } from '../../../components/global/Spinner'
import { useQuestions } from '../../../hooks/useQuestions'

export const PublicFaq: Component = () => {
  const faq = useQuestions()

  return (
    <div class="flex-1 flex-col bg-gray-50 h-full flex-grow">
      <FaqHeader />
      <div class="flex justify-center p-12">
        <div class="flex flex-col gap-12 md:w-2/4">
          <Switch>
            <Match when={faq.isLoading}>
              <Spinner />
            </Match>
            <Match when={faq.isSuccess}>
              <For each={faq.data}>
                {(question) => (
                  <Link href={`/faq/${question.id}`}>
                    <div class="flex items-center justify-between w-full gap-8">
                      <h2 class="text-green-800 text-xl">{question.question}</h2>
                      <FiChevronRight class="text-green-800 text-xl" />
                    </div>
                  </Link>
                )}
              </For>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  )
}
