import { FunctionComponent, useEffect } from 'react'
import { MdColorLens } from 'react-icons/md'
import { getDateWithHour } from '../utils/format'

export const CurrentDate: FunctionComponent = () => {

  useEffect(() => {
    getDateWithHour();
  }, [])

  return (
    <>
      <div
        className="
          flex 
          sm:flex-row flex-col
          items-center
          text-white 
          py-3 px-6 
          rounded-md
          mb-6
          bg-[#44474E]"
      >
        <MdColorLens size={25} className="sm:mr-2 sm:mb-0 mb-2" />
        <p id="date" className="text-lg font-medium"></p>
      </div>
    </>
  )
}
