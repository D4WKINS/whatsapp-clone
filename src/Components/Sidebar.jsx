import "../Styles/Sidebar.css"
import React from 'react'
import { IconButton, Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Add from "@material-ui/icons/Add";
import { MoreVert } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebarHeader">
            <Avatar/>
                <div className="sidebarHeaderRight">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <Add />
                </IconButton>
                <IconButton>
                <MoreVert />
                </IconButton>

                </div>
            </div>
            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <SearchIcon/>
                    <input placeholder="Search or Start a new chat" type="text"/>
                </div>
            </div>
            <div className="sidebarChats">
            <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar
