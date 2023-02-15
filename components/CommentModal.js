import {useRecoilState} from "recoil"
import { modalState } from "@/atom/modalAtom"
import { useState } from "react"

export default  function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState)
  return(
  <div >
  {open &&  (
    <h1>u clicked & Iloveu</h1>
  )}
  </div>
  )
};