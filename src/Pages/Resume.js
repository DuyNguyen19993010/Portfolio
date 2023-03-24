import '../CSS/App.css';
import { useState } from 'react';
import Cv_p0 from '../Resume/2023_Cv_00.png'
import Cv_p1 from '../Resume/2023_Cv_01.png'
function Resume() {
  const pages = [Cv_p0, Cv_p1]
  const [pageNumber,setPageNumber] = useState(0);
  const nextPage = ()=>{
    if(pageNumber+1>pages.length-1){
      setPageNumber(0);
    }
    else{
      setPageNumber(pageNumber+1);
    }
  }
  return (
    <div id="Resume" className='Tab'>
      <div id='resume-wrapper'>
        <img alt='Failed to load CV page' onClick={()=>nextPage()} className='page' src={pages[pageNumber]}/>
        <p id='page-counter'>
          {pageNumber+1} / {pages.length}
        </p>
      </div>
      <p id='download-text'>You can download the resume <a href='../Resume/2023_Cv.pdf' download>here</a></p>
    </div>
  );
}

export default Resume;
