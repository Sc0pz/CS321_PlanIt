import React, {Component} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class ListNotes extends Component{


  render(){

    const {addSub, subnotes, notes, changeCurrentNote, changeCurrentSubNote, deletesubnote, deletenote} = this.props
return(


    <ProSidebar>
      <Menu iconShape="circle">
        <SubMenu title="Notes">
          { notes.map((note) => (
          <MenuItem>
            <div className='list-item-top' key={ note.id }>
              <div>
              <ul>
                <li className='list-item' onClick={ () => changeCurrentNote(note) } >
                  {note.heading}
                </li>
                <SubMenu title="Notes">
                  <div>
                  <button className='add-sub-note' onClick={ () => addSub()}>+</button>
                  </div>
                  { subnotes.map((note) => (
                    <div className='list-sub-item-top' key={note.id}>
                    <div>
                      <li className='list-sub-item' onClick={ () => changeCurrentSubNote(note)} >
                        {note.heading}
                      </li>
                    </div>
                    <div>
                    <button className='delete-sub-note' onClick={ () => deletesubnote(note)}>x</button>
                    </div>
                    </div>
                  ))}
                </SubMenu>
              </ul>
              </div>
              <div>
                <button className='delete-note' onClick={ () => deletenote(note)}>Delete</button>
                </div>
              </div>
          </MenuItem>
          )) }
      </SubMenu>
      </Menu>
    </ProSidebar>
)
}
}

export default ListNotes
