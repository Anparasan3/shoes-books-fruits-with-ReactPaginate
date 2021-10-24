import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'
import axios from 'axios'
import Posts from './Posts'
import './Style/Main.css'

function App(props, {location}) {

  const [allData, setAllData] = useState('')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  props.setState(allData?.settings?.header?.headerBGColor?.code?.hex);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      // const res = await axios.get('https://plugin-content-original-api.herokuapp.com')
      const res = await axios.get('https://json.extendsclass.com/bin/f64b1d0e4029')
      setAllData(res.data);
      setPosts(res.data.product);
      setLoading(false);
    }

    fetchPosts()
  }, [])

  console.log('posts : ', posts)
  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length/postsPerPage)
  
  return (
    <div className="main-container">
      <Posts posts={currentPosts} /> 
      <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
