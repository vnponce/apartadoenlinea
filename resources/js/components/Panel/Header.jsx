import React from 'react';


const Header = ({ setShowPanel }) => (
        <header>
            <div className="flex items-center">
                <button className="close-icon" onClick={() => setShowPanel(false)}>
                    {/* <svg className="w-5 h-5 mr-4 fill-current stroke-current text-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20"> */}
                    {/*    <path */}
                    {/*        d="M11.302,6.776c-0.196-0.197-0.515-0.197-0.71,0L7.785,9.641c-0.196,0.199-0.196,0.52,0,0.717l2.807,2.864  c0.195,0.199,0.514,0.198,0.71,0c0.196-0.197,0.196-0.518,0-0.717L9,10l2.302-2.506C11.498,7.296,11.498,6.976,11.302,6.776z   M10,0.4c-5.302,0-9.6,4.298-9.6,9.6c0,5.303,4.298,9.6,9.6,9.6s9.6-4.297,9.6-9.6C19.6,4.698,15.302,0.4,10,0.4z M10,18.354  c-4.615,0-8.354-3.74-8.354-8.354S5.385,1.646,10,1.646c4.613,0,8.354,3.74,8.354,8.354S14.613,18.354,10,18.354z"/> */}
                    {/* </svg> */}
                    <span className="text-3xl text-brand-orange">
                        <i className="fa fa-angle-double-right"></i>
                    </span>
                </button>
                <span className="uppercase flex-1 text-center">tu charola</span>
            </div>
        </header>
);

export default Header;
