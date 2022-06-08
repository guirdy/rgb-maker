// React
import classNames from 'classnames';
import { ChangeEvent, FunctionComponent, useState } from 'react';

// Libs
import { MdFileCopy } from 'react-icons/md';
import { notify } from '../utils/notify';
import { Card } from './Card';

export const RGBAGenerator: FunctionComponent = () => {
  const [red, setRed] = useState(122);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const [opacity, setOpacity] = useState(100);

  const copyColor = () => {
    const color = `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`;
    window.navigator['clipboard'].writeText(color);
    notify("Copied to clipboard!", "success");
  }

  return (
    <>
    <Card className="mb-6 py-12 px-6">
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setRed(Number(e.target.value))}
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setGreen(Number(e.target.value))}
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setBlue(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Star */}
        <span
          className={classNames(
            "relative my-16 sm:p-24 p-16 rounded-full",
            red === 0 && green === 0 && blue === 0 && opacity === 100 ? "black-hole" : "")}
          style={{
            backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`,
          }}
        >
          <span
            className={classNames(
              "absolute rounded-full -top-3 -left-4",
              red === 0 && green === 0 && blue === 0 && opacity === 100 ? "" : "blur-xl shadow-xl animate-pulse sm:p-28 p-20")}
            style={{
              backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`,
            }}
          />
        </span>

        <div
          className="
            flex
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
            bg-white bg-opacity-20
            rounded-md"
        >
          <input
            type="range"
            name="opacity"
            min="0" max="100"
            value={opacity}
            className="cursor-pointer"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setOpacity(Number(e.target.value))}
          />
        </div>
      </Card>
    </>
  )
}
