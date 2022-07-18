import { useState } from 'react'
import Link from 'next/link'
import React from 'react'


const Header = () => {
  const [query, setQuery] = useState('')
  console.log(query)

  //not working yet
  const Search = (data) => {
    return data.filter(
      (item) => item.name.first.toLowerCase().includes(query.toLowerCase())
    )
  }

  return (
    <div className="navbar bg-base-100 rounded-lg mb-3 bg-primary ">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Los Pollos Hermanos</a>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search by username" className="input input-bordered" onChange={(e) => setQuery(e.target.value)} />
        </div>
        <Link href='/auth'>
          <a>
            <button className="btn btn-ghost"> Authorize </button>
          </a>
        </Link>
        <div className="dropdown dropdown-end" >
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* <img src="https://placeimg.com/80/80/people" /> */}
            </div>
          </label>
          <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header