import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/solid'
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import Moments from 'react-moment'
import { useSession } from 'next-auth/react'
import { db, storage } from '@/firebase'
import { useState} from 'react'
import {HeartIcon as HeartIconFilled} from '@heroicons/react/outline'
import { signIn } from 'next-auth/react'
import { deleteObject, ref } from 'firebase/storage'

function Post({post}) {
 const {data : session} = useSession()
 const [likes, setLikes] = useState( [ ] )
 const [hasLiked, setHasLiked] = useState( [ false] )

useEffect(() => {
  const unsubscribe = onSnapshot(
    collection ( db,  "posts",  post.id,  "likes" ), 
    (snapshot) => setLikes ( snapshot.docs )
  );
},  [ db ] );

useEffect (() =>{
    setHasLiked ( likes.findIndex ((like) => like.id  === session?.user.uid) !== -1)
}, [ likes ] )

async function likePost () {
    if (session) {
      if (hasLiked)  {
     await deleteDoc(doc(db, "posts" ,  post.id,  "likes",  session?.user.uid))
    }else{
         await setDoc (doc (db, "posts", post.id, "likes",  session?.user.uid ), {
      username: session.user.username,
    })
    }
    } else {
       signIn()
    }
  }

  async function deletePost() {
    if (window.confirm('Are you Sure to Delete the Post')) {
      deleteDoc(doc(db, "posts", post?.id))
      if (post?.data()?.image) {
          deleteObject(ref(storage, `posts/${post?.id}/image`))
      }
    }
  }

  return (
    <div className='flex p-3  cursor-pointer border-b border-gray-300'>
      {/*User  image */}
    <img className='h-11 w-11 rounded-full mr-4 items-center justify-center ' src={post.data().userImg} alt="user-img"/>
      {/* right side */}
      <div className=''>
        {/* header */}
        <div className='flex items-center justify-between'>
          {/* post user info */}
          <div className='flex items-center space-x-1 whitespace-nowrap'>
         <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.data().name}</h4>
         <span className='text-sm sm:text-[15px]'>@{post.data().username} - </span>
         <span className='text-sm sm:text-[15px] hover:underline'>
             <Moments  fromNow>
               {post?.data().timestamp?.toDate()}
            </Moments> 
        </span>
          </div>
         {/* dotIcons */}
         <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-red-600 hover:text-white p-2'/>
        </div>
        {/* post text */}
       <p className='text-gray-900 text-[15px] sm:text-[16px] mb-2 '>{post?.data()?.text}</p>
       {/* postImage */}
       <img className= 'rounded-1xl mr-2 items-center justify-center'  src={post?.data()?.image}  alt=""/>
       {/* icons */}
       <div className='flex justify-between text-gray-500 p-2  '>
       <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600 '/>
        {session?.user.uid === post?.data().id && (
          <TrashIcon onClick={deletePost} className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600  '/>
         )}
         <div className='flex items-center '>
          { hasLiked ? ( <HeartIconFilled 
         onClick= {likePost} 
         className='h-9 w-9 hoverEffect p-2 hover:text-white bg-red-600 text-white '/>
         ): (
        <HeartIcon 
        onClick= {likePost} 
        className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600 '/>
        )}
        {
          likes.length > 0 && (
            <span className={`${hasLiked && 'text-red-600 ml-2' } text-sm select-none`}>{likes.length}</span>
          )
        }
         </div>
       <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600  '/>
       <ChartBarIcon className='h-9 w-9 hoverEffect p-2  hover:text-white hover:bg-red-600  '/>
       </div>
      </div>
    </div>
  )
}

export default Post