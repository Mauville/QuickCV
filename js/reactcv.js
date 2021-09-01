'use strict';

// enlacabecera,deberáirtunombre,fotoyunafrasedescriptiva
let Header = (props) => {
  return (
    <header>
      <div>
        <p>{props.name}</p>
        <img src="/img/pic.jpg"/>
        <p>{props.phrase}</p>
      </div>
    </header>
  )
}

let Body = () => {
  return (
    <h1>Hello</h1>
  )
}

let Footer = () => {
  return (
    <h1>Hello</h1>
  )
}
let CV = (props) => {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

let student = {
  "name" : "Vargas Perez Oscar",
  "imgsrc" : ""
}

ReactDOM.render(
  <CV/>,
  document.getElementById('root')
);

