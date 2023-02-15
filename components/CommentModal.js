import {useRecoilState} from "recoil"
import { modalState, postIdState} from "@/atom/modalAtom"
import Modal from  "react-modal"
import { XCircleIcon } from "@heroicons/react/solid"

export default  function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState)
    const [postId] = useRecoilState (postIdState);

  return(
  <div >
  {open &&  (
   <Modal isOpen = {open}
    onRequestClose = {() => setOpen(false) }
    className='max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-color-gray-200 rounded-xl shadow-md h-[300px] ' >
    <div className='p-1'>
        <div className='border-b border-gray-300 py-2 px-1.5 '> 
            <div onClick={() =>setOpen(false)} className='flex w-9 h-9 items-center justify-center'>
               <XCircleIcon className='h-1o w-10 hover:bg-red-600'/>
            </div>
        </div>
        <h1>{postId}</h1>
    </div>
   </Modal>
  )};
  </div>
  )
};