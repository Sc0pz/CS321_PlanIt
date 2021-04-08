import React, {Component} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class ListNotes extends Component{


  render(){

    const {notes, changeCurrentNote, deletenote} = this.props
return(


    <ProSidebar>
      <Menu iconShape="circle">
        <SubMenu title="Notes">
          { notes.map((note) => (
          <MenuItem>
            <div className='list-item-top' key={ note.id }>
              <div>
              <ul className="no-bullets">
                <li className='list-item' onClick={ () => changeCurrentNote(note) } >
                  {note.heading}
                </li>
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
