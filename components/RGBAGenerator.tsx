// React
import { FunctionComponent, useState } from 'react';

// Libs
import { IoMdColorFilter } from 'react-icons/io';
import { MdFileCopy } from 'react-icons/md';
import { notify } from '../utils/notify';

export const RGBAGenerator: FunctionComponent = () => {
  const [red, setRed] = useState(127);
  const [green, setGreen] = useState(127);
  const [blue, setBlue] = useState(127);
  const [opacity, setOpacity] = useState(100);

  const copyColor = () => {
    const color = `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`;
    window.navigator['clipboard'].writeText(color);
    notify("Copied to clipboard!", "success");
  }

  return (
    <>
      <div
        className="
          flex 
          flex-col
          items-center
          text-white 
          py-12 px-6 
          rounded-md
          mb-6
          bg-[#44474E]"
      >
        <div
          className="
            flex flex-wrap
            w-full 
            gap-4 
            justify-center"
        >
          {/* Red bar */}
          <div
            className="
              p-4
              rounded-md
              bg-red-400"
          >
            <input
              type="range"
              name="red"
              min="0" max="255"
              value={red}
              className="cursor-pointer"
              onChange={(e) => setRed(Number((e.target as HTMLInputElement).value))}
            />
          </div>
          {/* Green bar */}
          <div
            className="
              p-4
              rounded-md
              bg-green-400"
          >
            <input
              type="range"
              name="green"
              min="0" max="255"
              value={green}
              className="cursor-pointer"
              onChange={(e) => setGreen(Number((e.target as HTMLInputElement).value))}
            />
          </div>
          {/* Blue bar */}
          <div
            className="
              p-4
              rounded-md
              bg-blue-400"
          >
            <input
              type="range"
              name="blue"
              min="0" max="255"
              value={blue}
              className="cursor-pointer"
              onChange={(e) => setBlue(Number((e.target as HTMLInputElement).value))}
            />
          </div>
        </div>

        <div
          className="my-10 sm:p-24 p-16 rounded-full"
          style={{
            backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`,
          }}
        />

        <div
          className="
            flex sm:flex-row flex-col 
            justify-center items-center 
            text-lg font-medium
            py-2 px-4 
            bg-gray-800 hover:bg-gray-900
            transition-all
            rounded-md cursor-pointer"
          onClick={copyColor}
        >
          <p>
            rgba({red}, {green}, {blue}, {opacity / 100})
          </p>
          <MdFileCopy className="ml-3" />
        </div>

        {/* Opacity bar */}
        <div
          className="
            p-2 mt-6
            bg-black bg-opacity-10
            rounded-md"
        >
          <input
            type="range"
            name="opacity"
            min="0" max="100"
            value={opacity}
            className="cursor-pointer"
            onChange={(e) => setOpacity(Number((e.target as HTMLInputElement).value))}
          />
        </div>
      </div>
    </>
  )
}
