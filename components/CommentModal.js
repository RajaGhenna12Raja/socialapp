import React from 'react'
import {useRecoilState} from 'recoil'
import {modalState} from "atom/modalAtom"

const CommentModal = () => {
    const [open, setOpen] = useRecoilState(modalState);
  return 
    <div>
        <h1> Comments Modal</h1> 
        {open && <h1>the modal is open</h1>} 
    </div>
}

export default CommentModal