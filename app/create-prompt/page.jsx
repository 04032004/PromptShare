'use client';
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
    const { data: session , status} = useSession()
    const router = useRouter()
    const [submitting , setSubmitting] = useState(false)
    const [post , setPost] = useState({
          prompt : '',
          tag : '',

    })

    const createPrompt = async (e) => {
           e.preventDefault()
           setSubmitting(true)

           try {
                     const res = await fetch('/api/prompt/new' ,        //api we want to call after submit of oyr prompt
                        {
                             method: 'POST',
                             headers: {
                                'Content-Type': 'application/json'
                              },
                             body : JSON.stringify({
                                  prompt: post.prompt,
                                  userId : session.user.id,
                                  tag: post.tag

                             })
                        })

                        const json = await res.json()
      if (!res.ok) throw Error(json.message)
      alert('Prompt created successfully')
      setPost({ prompt: '', tag: '' })
      router.push('/')
    } catch (e) {
      console.log(e)
    } finally {
      setSubmitting(false)
    }
}

  return (
      <Form 
          type= " Create" 
          post = {post}
          setPost = {setPost}
          submitting = {submitting}
          handleSubmit = {createPrompt}
      />
  )
}

export default CreatePrompt





