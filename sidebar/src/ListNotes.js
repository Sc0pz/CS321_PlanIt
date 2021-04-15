import React, {Component} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

class ListNotes extends Component{

  
  render(){
    var menuState = false
    const {notes, changeCurrentNote, deletenote, toggleSideBar} = this.props
return(
    <ProSidebar collapsed = {menuState}>
        <SidebarHeader>
            <div className="closemenu" onClick={() =>toggleSideBar(menuState)}>
                {/* changing menu collapse icon on click */}
              {menuState ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          <div className="logotext">
            {/* small and big change using menucollapse state */}
              <p>{menuState ? "Pla" : "Plan\\t"}</p>
            </div>
            
        </SidebarHeader>
        <Menu>
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
      </Menu>

    </ProSidebar>
)
}
}

export default ListNotes
