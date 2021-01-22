 import {useState, useEffect} from 'react'
 import { FaAngleDoubleRight } from 'react-icons/fa'
 
const url = 'https://course-api.com/react-tabs-project'
function App() {
const [value,setValue]= useState(0)
const [loading,setLoading] = useState(true);
const [jobs,setJobs] = useState([])
  const showContent=async()=>{
    const response = await fetch(url)
    const data = await response.json()
  setJobs(data)
   setLoading(false)
  }

  useEffect(()=>{
showContent()
 
  },[])

if(loading){
  return(
    <h1 className='main-title' >loading...</h1>
  )
}
const {id,order,title,dates,duties,company} = jobs[value]
 
  return (
    <section   className='section'>
  <div className="main-title">
  <h1>Experience</h1>
  <div className="underline"></div>
  </div>
  <article key={id} className='article-container' >
   <div className="btn-container">
{jobs.map((btn,index)=>{
const {company} = btn
  return <button onClick={()=>{
    setValue(index)
  }}  className={`btn ${index===value && `left-border`}`} >{company}</button>
})}
  </div>
  <div className="main-content">
  <h1>{title}</h1>
  <h4>{company}</h4>
  <h3>{dates}</h3>
   
  {duties.map((duty,index)=>{
    return <div className="para-container" key={index} >
    <FaAngleDoubleRight className='arrow' ></FaAngleDoubleRight>
    <p>{duty}</p>
    </div>
  })}
  
  </div>
 
  </article>
    </section>
  );
}

export default App;
