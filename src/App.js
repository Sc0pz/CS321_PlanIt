import React, { Component } from 'react';
import Note from './Note'
import ListNotes from './ListNotes'
import './App.css';


const notesArray= [{id: 1, heading:'Untitled Note', value:''}]
const subnotesArray= [{id: 1, heading:'Untitled Note', value:''}]


class App extends Component {

  state = {

    currentNote: null,
    notes: notesArray,
    subnotes: subnotesArray,

  }

  changeCurrentNote = (note) =>{

    this.setState({ currentNote: note })
  }
  changeCurrentSubNote = (note) =>{

    this.setState({ currentNote: note })

  }
  deletenote = (note) =>{

    this.setState((state) => ({ notes: state.notes.filter(noteIterator => (noteIterator.id !== note.id)) }))
    this.setState({ currentNote: null })

  }
  deletesubnote = (note) =>{
    this.setState((state)=>({subnotes:state.subnotes.filter(noteIterator => (noteIterator.id !== note.id)) }))
    this.setState({ currentNote: null})
  }

  saveNote = (note) =>{

    this.setState((state) => { state.notes.concat([note]) })
    this.setState({ currentNote: note })

  }

  addNew = () =>{

    const note = {id: this.state.notes.length + 1, heading: 'Untitled Note', value: ''}
    this.setState((state) => ({ notes: state.notes.concat([note]) }))
    this.setState({ currentNote: note })

  }
  addSub = () =>{

    const note = {id: this.state.subnotes.length + 1, heading: 'Untitled Note', value: ''}
    this.setState((state) => ({ subnotes: state.subnotes.concat([note]) }))
    this.setState({ currentNote: note })

  }
  render() {

    this.state.notes.sort((a, b) => {return b.id-a.id})

  return (
    <div className="App">
      <div>
      <button className='add-note' onClick={this.addNew}>Add New</button>
      </div>
      <div className='notes-wrapper'>
        <div className='list-notes-top'>
          <ListNotes addSub={this.addSub} subnotes={this.state.subnotes} notes={this.state.notes} changeCurrentNote={this.changeCurrentNote}
           changeCurrentSubNote={this.changeCurrentSubNote} deletesubnote={this.deletesubnote} deletenote={this.deletenote}/>
        </div>
        <div className='current-note'>
          {( this.state.currentNote !== null ) && ( <Note note={this.state.currentNote} savenote={this.saveNote}/> )}
        </div>
      </div>
    </div>
  );
}
  
}

export default App;


// function App() {
//   return (
//     <div className="App">
//         <Header />
//     </div>
//   );
// }

// export default App;