import React, { Component } from 'react'
import data from '../../data'
export default class InfoCard extends Component {
    constructor(){
        super()
        this.state = {
            
            id: 0,
            firstName: '',
            lastName: '',
            city: '',
            contry: '',
            title: '',
            employer: '',
            favoriteMovies: [],
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }
   handleNext(){
       if(this.state.id < data.length){
       let newId = this.state.id + 1
       this.setState({id: newId})
    }else{
        alert('Reached maximum amount')
    }
    this.loadPeople()
   } 

handlePrev(){
    if(this.state.id > 0){
        let newId = this.state.id - 1
        this.setState({id: newId})
     }else{
         alert('Reached minimum amount')
     }
     this.loadPeople()
    } 

loadPeople(){
    let i = data[this.state.id]
    console.log(i)
    this.setState({
        firstName: i.name.first,
        lastName: i.name.last,
        city: i.city,
        contry: i.country,
        title: i.title,
        employer: i.employer,
        favoriteMovies: i.favoriteMovies,
    })
}




  render() {
    let amount = data.length
    console.log(this.state.id)
    console.log(this.state.firstName)
   let movies = this.state.favoriteMovies.map((val, index) =>{
       return <li key={index}>{val}</li>
   })


    return (
      <div className='mainInfo'>
        <div className='container'>
                <h1 className='cardCount'>{this.state.id}/{amount}</h1>
                <h1 className='name'>{this.state.firstName} {this.state.lastName}</h1>
                
            
                <div className='midPoint'>
                    <h3>From: {this.state.contry} {this.state.city} </h3>
                    <h3>Job Title:  {this.state.title}</h3>
                    <h3>Employer:  {this.state.employer}</h3>
                    <br/>
                    <h3>Favorite Movies</h3>
                    <ol>
                    {movies}
                    </ol>
                </div>
        </div>
        <div className='buttons'>
            <div className="left">
                <h4 onClick={() => this.handlePrev()}> &#60;  Previous </h4>
            </div>
                <div className='middelButtons'>
                    <h4 className='pills'>Edit</h4>
                    <h4 className='pills'>Delete</h4>
                    <h4 className='pills'>New</h4>
                </div>
            <div className="right">
                <h4 onClick={() => this.handleNext()}> Next &#62;</h4>
            </div>
        </div>
      </div>
    )
  }
}
