import {useState} from 'react'

function Header({money}) {
    return(
        <>
        <div className="header">
        Harcamak için ${money}  paranız var 
        </div>
      
<style jsx>{`
              .header {
                position: sticky;
                top: 0;
                background: linear-gradient(to bottom, #20b820, #14be2a);
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 24px;
                letter-spacing: 1px;
              }
              .header.empty {
                background: linear-gradient(to bottom, #b82020, #be1414);
              }
              .header span {
                margin: 0 10px;
                font-weight: bold;
              }
			`}</style>  </>
    )}
export default Header