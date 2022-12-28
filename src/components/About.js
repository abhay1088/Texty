import React from 'react'

export default function About(props) {
 //   const [myStyle, setMyStyle] = useState({
 //     color: "black",
 //     backgroundColor: "white",
 //   });
 let myStyle ={
  color: props.mode==='dark'?'#FFFAF0':'#042743',
  backgroundColor: props.mode==='dark'?'	#484848':'white',
 }
 
  return (
    <div className="container">
  <h1 className="my-3" style={{color: props.mode==='dark'?'	#818589':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
             <strong>Analyze your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Texty gives you a way to analyze your text quickly and
              efficientely , be it character count , word count or coverting
              your text to uppercase or lowercase.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Texty is a free character counter tool that provides instant
              character count and word count statistics for a given text. Texty
              reports the number of words and characters . Thus it is suitable
              for writing text with word , character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any browser such as Chrome,
              Firefox, Internet Explorer, Safari, Opera . It suits to count
              characters in facebook , blog, books, excel document, pdf document
              ,essays , etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
