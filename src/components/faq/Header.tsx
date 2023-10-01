import name from '../../assets/name.png'

export const FaqHeader = () => {
  return (
    <div class="flex flex-col items-center p-24 bg-green-300">
      <img src={name} alt="Plant Daddy" />
      <h1 class="font-nunito text-green-800 text-3xl font-bold">Frequently asked questions</h1>
    </div>
  )
}
