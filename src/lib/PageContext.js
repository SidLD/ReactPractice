import React, { Component, createContext } from "react"; 

export const PageContext = createContext()

export default class PageContextProvider extends Component {
    user = {
        name: "Me",
        isLogin: true
    }
  render() {
    return (
        <PageContext.Provider value={{...this.user}}>
            {this.props.children}
        </PageContext.Provider>
    );
  }
}
