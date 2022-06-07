import classNames from "classnames";

type CardProps = {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({children, className}: CardProps) => {
  return (
    <div
    className={classNames(
      "flex flex-col items-center text-white rounded-md bg-[#000000a4]",
      className ? className : ""
     )}
  >
    {children}
  </div>
  )
}
