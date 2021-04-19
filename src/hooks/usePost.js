import { useState, useEffect } from 'react'
import key from 'weak-key'

const useBookPreparation = title => {
  return {
        "id": key({title}),
        "title": title,
        "author": {
          "id": 34055,
          "name": ""
        },
        "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
        "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
        "goodreads": {
          "id": 6449560,
          "books_count": 68,
          "ratings_count": 1528,
          "text_reviews_count": 125,
          "original_publication_year": 1924,
          "original_publication_month": "",
          "original_publication_day": "",
          "average_rating": 4.07
        },
        "club": {
          "initiator": "",
          "votes": 0,
          "reading": false,
          "rating": 0,
          "meeting_date": "",
          "meeting_involved": [],
          "meeting_notes": "",
          "notes": ""
        }
      }
}
const useReaderPreparation = name => {
  return {
    name
  }
}

export default function usePost( data, type ) {
  const [ addItem, setAddItem ] = useState('')
  const url = process.env.NEXT_PUBLIC_API + type
  //console.log(`usePost: ${ url }`);
  //console.log(`addItem: ${ addItem }`);

  const postOptions = {
    method: 'POST',
    //mode: 'no-cors',
    headers:{
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
    body: JSON.stringify( type === 'books'
                            ? useBookPreparation( data )
                            : useReaderPreparation( data )
                          )
  }

  useEffect(() => {
    if ( !data.length ) return
    fetch( url, postOptions )
      .then( res => res.json() )
      .then( r => { setAddItem( r ) } )
      .catch( console.error )
  }, [ data ])

  return { addItem }
}
