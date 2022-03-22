import React,{useState} from 'react'

const SearchItems = ({searchText}) => {

    const [text, setText] = useState('')

    const onSubmit =(e)=>{
        e.preventDefault()
        searchText(text)
    }
  return (
    <div className='max-w-sm overflow-hidden my-10 mx-auto items-center'>
        <div className=''>
            <form onSubmit={onSubmit}>
                <input onChange={e => setText(e.target.value)} className='bg-gray-200 px-3 py-2 mx-2 text-center text-lg  font-bold' type="text" placeholder='Search image..' />
                <button type='submit' className='bg-green-800 text-white px-4 py-4 rounded-xl hover:bg-green-700 cursor-pointer font-bold text-lg'>Search</button>
            </form>
        </div>

    </div>
  )
}

export default SearchItems;