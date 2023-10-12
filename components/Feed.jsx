"use client"
import { useEffect,useState } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data,handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post) => (
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
        ))
}
    </div>
  )
}

const Feed = () => {
  const [searchText, setsearchText] = useState("")
  const [posts, setposts] = useState([]) 
  const [filteredPost,setFilteredPost]=useState([])

  const handleSearchText = (e) => {
    setsearchText(e.target.value)
    if (posts.length) {
      const filtered = posts?.filter((p) => p.prompt.includes(searchText)||p.tag.includes(searchText))
      console.log(filtered);
      setFilteredPost(filtered)
    }
  }
  useEffect(() => {
    console.log("reached");
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      console.log(data, "not found");
      setFilteredPost(data)
      setposts(data)
    }
    fetchPosts()
},[])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" placeholder="Search for Prompts" value={searchText} onChange={(e)=>handleSearchText(e)} required className="search_input peer"/>
      </form>
      <PromptCardList data={filteredPost} />
    </section>
  )
}

export default Feed