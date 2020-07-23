// import components
import React, { Component } from "react";
import {
InputGroup, 
InputGroupButtonDropdown,
DropdownToggle, 
DropdownMenu, 
DropdownItem
} from "reactstrap";

// init state
state = {
    dropdownOpen: false,
    loading: false,
    roleData: userRoleData
}

// init toggleCheckFunction
changeRoleModel(name) {
    let roleModel = this.state.roleData.map(c => {
        if (c.name === name) {
            c.checked = !c.checked;
        }
        return c;
    });
    this.setState({ roleModel });
}

// init fake toggle for issue
errorFixToggle = () => {
    console.log();
};

// for render area
const { dropdownOpen, loading, roleData } = this.state;

<InputGroupButtonDropdown
    addonType="prepend"
    isOpen={dropdownOpen}
    toggle={this.errorFixToggle}>
    <DropdownToggle caret onClick={this.toggleDropDown}>
        <Filter />
    </DropdownToggle>
    <DropdownMenu>
        {
            roleData.map((item, i) => (
                <DropdownItem key={i} onClick={() =>
                    this.changeRoleModel(item.name)
                }>
                    <Input
                        type="checkbox"
                        checked={item.checked}
                        onChange={e => console.log("Checked")}
                    />
                    {translate(item.name)}
                </DropdownItem>
            ))
        }
    </DropdownMenu>
</InputGroupButtonDropdown>
