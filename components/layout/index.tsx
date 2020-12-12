import { atom, useAtom } from "jotai"
import { FC, useEffect } from "react"
import { useMedia } from "react-use"
import Header from "./header/header"

export const isMobileAtom = atom<boolean>(false)

const Layout: FC = ({ children }) => {
  const [isMobile, setIsMobile] = useAtom(isMobileAtom)

  const thisIsMobile = useMedia("(max-width: 768px)")

  useEffect(() => {
    setIsMobile(thisIsMobile)
  }, [thisIsMobile])

  return (
    <div className="min-h-screen bg-custom-blue">
      <div className="w-full bg-white">
        <Header />

        <div className="px-4 flex flex-col items-center">{children}</div>
      </div>
    </div>
  )
}

export default Layout
