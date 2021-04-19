import { useState } from 'react'
import { useRouter } from 'next/router'
// import { mutate } from 'swr'  //for PUT method

/* The POST method adds a new entry in the mongodb database. */
const router = useRouter()
const contentType = 'application/json'
const [errors, setErrors] = useState({})
const [message, setMessage] = useState('')

const postData = async (form) => {
  try {
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: {
        Accept: contentType,
        'Content-Type': contentType,
      },
      body: JSON.stringify(form),
    })

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      throw new Error(res.status)
    }

    router.push('/')
  } catch (error) {
    setMessage('Failed to add book')
  }
}

/* The PUT method edits an existing entry in the mongodb database. */
/*const putData = async (form) => {
  const { id } = router.query

  try {
    const res = await fetch(`/api/pets/${id}`, {
      method: 'PUT',
      headers: {
        Accept: contentType,
        'Content-Type': contentType,
      },
      body: JSON.stringify(form),
    })

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      throw new Error(res.status)
    }

    const { data } = await res.json()

    mutate(`/api/pets/${id}`, data, false) // Update the local data without a revalidation
    router.push('/')
  } catch (error) {
    setMessage('Failed to update pet')
  }
}*/
