import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search);

    if(!search) 
      return
    navigate(`/search?q=${search}`)
    setSearch('');
  }

    return(
        <nav id='navbar'>
        <h2>
          <Link to="/"> M O V I E</Link>
        </h2>
        <div className='navbarBox'>
        <Link to="/">Films</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/likes">Likes</Link>
        <Link to="/order">Order</Link>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar filme' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type='submit'><BiSearchAlt2 /></button>
        </form>
        </div>
        
      
      </nav>
    )
}

export default Navbar;