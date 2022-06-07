import { FunctionComponent, useEffect } from 'react'
import { MdColorLens } from 'react-icons/md'
import { getDateWithHour } from '../utils/format'
import { Card } from './Card'

export const CurrentDate: FunctionComponent = () => {

  useEffect(() => {
    getDateWithHour();
  }, [])

  return (
    <>
      <Card className="sm:flex-row mb-6 py-3 px-6">
        <MdColorLens size={25} className="sm:mr-2 sm:mb-0 mb-2" />
        <p id="date" className="text-lg font-medium"></p>
      </Card>
    </>
  )
}
