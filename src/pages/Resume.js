// CSS
import '../css/Resume.css';
//Image
import page_1 from '../resources/Cv_page1.jpg'
// import page_2 from '../resources/Cv_page2.jpg'
import { useState } from 'react';
const Resume=()=> {
    // const [page_no_1,setPage] = useState(true)
    // const changePage = ()=>{
    //     setPage(!page_no_1)
    // }
    return (
    <div className="Resume">
       <div className="content">
           {/* { page_no_1== true?(<img onClick={changePage} src= {page_1}/>):(<img onClick={changePage} src= {page_2}/>)} */}
           <img src= {page_1}/>
       </div>
    </div>
  );
}

export default Resume;
