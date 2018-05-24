// import React from 'react';
// import ReactDOM from 'react-dom';

function HomePage ({value, onClick},) {                 //HOME
  console.log('inside home-----', value)

  if (!value.homePageShowing) {
    return null;
  }
  return (
    <div>
      <div>
        <h1>HOME</h1>
      </div>
      <button onClick={onClick} >NEXT</button>
    </div>
  )
}

function FirstPage({value, onClick}) {                   //FIRST
  if (!value.firstPageShowing) {
    return null;
  }
  return (
    <div>
      <div>
        <h1>FIRST</h1>
      </div>

      <button onClick={onClick}>NEXT</button>
    </div>
  )
}




function SecondPage({value, onClick}) {                  //SECOND
  if (!value.secondPageShowing) {
    return null;
  }
  return (
      <div>
      <div>
        <h1>SECOND</h1>
      </div>

      <button onClick={onClick}>NEXT</button>
    </div>
  )
}



function ThirdPage({value, onClick}) {                   //THIRD
  if (!value.thirdPageShowing) {
    return null;
  }
  return (
      <div>
      <div>
        <h1>THIRD</h1>
      </div>

      <button onClick={onClick}>NEXT</button>
    </div>
  )
}



function ForthPage({value, onClick}) {                 //FORTH
  if (!value.forthPageShowing) {
    return null;
  }
  return (
      <div>
      <div>
        <h1>FORTH</h1>
      </div>

      <button onClick={onClick}>NEXT</button>
    </div>
  )
}



function FifthPage({value, onClick}) {                 //FIFTH
  if (!value.fifthPageShowing) {
    return null;
  }
  return (
      <div>
      <div>
        <h1>FIFTH</h1>
      </div>

      <button onClick={onClick}>NEXT</button>
    </div>

  )
}


class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      homePageShowing: true,
      firstPageShowing: false,
      secondPageShowing:false,
      thirdPageShowing:false,   
      forthPageShowing:false
    }

this.homePageHandler = this.homePageHandler.bind(this);  
this.firstPageHandler = this.firstPageHandler.bind(this);
this.secondPageHandler = this.secondPageHandler.bind(this);
this.thirdPageHandler = this.thirdPageHandler.bind(this);
this.forthPageHandler = this.forthPageHandler.bind(this);
//this.forthPageHandler = this.forthPageHandler.bind(this);
  }




  nextPageOn(numPageOn) {
    let tempState = this.state;
    if (numPageOn === 0) {
      tempState.homePageShowing =  true;
    } else {
      tempState.homePageShowing =  false;
    }
    if (numPageOn === 1) {
      tempState.firstPageShowing =  true;
    } else {
      tempState.firstPageShowing =  false;
    }
    if (numPageOn === 2) {
      tempState.secondPageShowing =  true;
    } else {
      tempState.secondPageShowing =  false;
    }
    if (numPageOn === 3) {
      tempState.thirdPageShowing =  true;
    } else {
      tempState.thirdPageShowing =  false;
    }
    if (numPageOn === 4) {
      tempState.forthPageShowing =  true;
    } else {
      tempState.forthPageShowing =  false;
    }
    this.setState(tempState);

  }

  homePageHandler () {
   this.nextPageOn(1);
  }

  firstPageHandler () {
    this.nextPageOn(2);
  }


  secondPageHandler () {
    this.nextPageOn(3);
  }

  thirdPageHandler () {
    this.nextPageOn(4);
  }

  forthPageHandler () {
    this.nextPageOn(0);
  }

  render (props) {
    //console.log('this.firstPageHandler',this.firstPageHandler);

    return (
      <div>
        <HomePage value={this.state} onClick={this.homePageHandler} />
        <FirstPage value={this.state} onClick={this.firstPageHandler} />
        <SecondPage value={this.state} onClick={this.secondPageHandler} />
        <ThirdPage value={this.state} onClick={this.thirdPageHandler} />
        <ForthPage value={this.state} onClick={this.forthPageHandler} />
        <FifthPage value={this.state} onClick={this.fifthPageHandler} />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));







