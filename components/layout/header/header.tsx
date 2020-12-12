import { useAtom } from "jotai"
import { FC, ReactNode } from "react"
import { isMobileAtom } from ".."
import { RiLogoutBoxLine } from "react-icons/ri"

export interface HeaderProps {
  start?: ReactNode
  end?: ReactNode
}

const Header: FC = () => {
  const [isMobile] = useAtom(isMobileAtom)

  return (
    <div
      className="
      px-4 py-2 mb-4
      flex justify-between
    "
    >
      <div className="w-full flex items-center"></div>

      <h1 className="mx-3 w-96 text-3xl text-custom-gray-normal font-bold">
        Pool App
      </h1>

      <div className="w-full flex flex-row-reverse items-center">
        <RiLogoutBoxLine />
      </div>
    </div>
  )
}

export default Header
