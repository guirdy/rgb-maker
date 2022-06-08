import { ReactNode } from 'react'
import classNames from 'classnames';

type WrapperProps = {
  children: ReactNode,
  className?: string,
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={classNames(
      "flex flex-col mx-auto w-full max-w-3xl",
      className ? className : ""
    )}>
      {children}
    </div>
  )
}
