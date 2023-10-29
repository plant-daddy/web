import { FaSolidImage } from 'solid-icons/fa'

export const ImagePicker = () => {
  return (
    <div class="bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center text-center cursor-pointer">
      <input type="file" hidden accept="image/*" />
      <label class="flex flex-col align-center pt-8">
        <FaSolidImage size={36} class="self-center mb-2" color="#65CCB7" />
        <h5 class="mb-2 text-xl font-bold">Upload a picture</h5>
        <p>
          Picture size should be less than <b class="text-green-300">2mb</b>
        </p>
        <p class="px-6">
          and should be in <b class="text-green-300">JPG, PNG or JPEG</b> format.
        </p>
      </label>
    </div>
  )
}
