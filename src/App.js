import './App.css';
import React , {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      day : ["Sat" , "Sun" , "Mon", "Tue" , "Wed" , "Thur" , "Fri"],
      period : ["Per1" ,"Per2" ,"Per3" ,"Per4" ,"Per5" ,"Per6" ,"Per7" ,"Per8"],
      dayNo : 0,
      periodNo : 0,
      displayDay : 0, 
      displayPeriod : 0,
      teacherClass : []
    }
  }
  handleChange = (e) => {
    const {name , value} = e.target;
    this.setState({
      [name] : value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      displayDay : this.state.dayNo, 
      displayPeriod : this.state.periodNo
    })
  }
    // handleSubmit2 = (e) => {
    //   e.preventDefault();
    //   let x = []
    //   x.push(this.state.teacherAll+ " "+  this.state.classAll)
    //   this.setState({
    //     teacherClass : [...this.state.teacherClass , ...x]
    //   })
    // } 



  render(){
    const day = this.state.day.slice(0 , this.state.displayDay).map(days => {
      return(
        <p style={{border : "1px solid gray", margin : 0}}>{days}</p>
      )
    })
    const period = this.state.period.slice(0 , this.state.displayPeriod).map(period => {
      return(
        <span style={{border : "1px solid gray"}}> {period} </span>
      )
    })  

    let total = this.state.displayDay * this.state.displayPeriod;
    let m = 0
    const teacher = [...Array(total)].map(x => {
      let teacherAlll = `teacherAll${m++}`
      m--
      let classAlll = `classAll${m++}`
      return(
        <div>
                  <div style={{border : "1px solid gray"}}>
                    <select name={teacherAlll} value={this.state.teacherAlll} onChange={this.handleChange} style={{marginBottom : 15 , width: "100%", border : "none", outline : "none"}}>
                      <option>Choose Teacher</option>
                      <option value="teacher1">teacher1</option>
                      <option value="teacher2">teacher2</option>
                    </select>

                    <select name ={classAlll} va lue={this.state.classAlll} onChange={this.handleChange} style={{marginBottom : 15 , width: "100%", border : "none", outline : "none"}}>
                      <option>Choose Class</option>
                      <option value="class1">class1</option>
                      <option value="class2">class2</option>
                    </select>
                  </div>
        </div>
      )
    })
    console.log(this.state)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} style={{margin : "1em 0"}}>
          <select name="dayNo" value={this.state.dayNo} onChange={this.handleChange}>
            <option>Select Day</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6"> Day 6</option>
            <option value="7">Day 7</option>
          </select>
          <select name="periodNo" value={this.state.periodNo} onChange={this.handleChange}>
            <option>Select Day</option>
            <option value="1">Per 1</option>
            <option value="2">Per 2</option>
            <option value="3">Per 3</option>
            <option value="4">Per 4</option>
            <option value="5">Per 5</option>
            <option value="6"> Per 6</option>
            <option value="7">Per 7</option>
            <option value="8">Per 8</option>
          </select>
          <button>Generate</button>
        </form>


        <div style={{ display : "grid", gridTemplateColumns : `repeat(${this.state.displayPeriod} , 1fr)` , marginLeft : "5%" , textAlign : "center"}}>
          {period}
        </div>
        <div style={{ display : "grid", gridTemplateColumns : "5% 95%"}}>
          <div style={{ display : "grid", gridTemplateRows : `repeat(${this.state.displayDay} , 1fr)`}}>
            {day}
          </div>
          <form onSubmit={this.handleSubmit2} >
            <div style={{ display : "grid", gridTemplateColumns : `repeat(${this.state.displayPeriod} , 1fr)` , textAlign : "center"}}>
            {teacher}
            </div>  
          </form> 
        </div>
      </div>
    );
  }
}

export default App;
