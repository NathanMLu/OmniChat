import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='box-shadow'>
            <h1>
                <strong className='first-txt'>Omni</strong><em className='second-txt'>Talk</em> <i className="fa fa-comment" aria-hidden="true"></i>
            </h1>
            {/* <div className='buttons'>
                <ul>
                    <li class="btn">
                        <p>Logout</p>
                    </li>
                </ul>
            </div> */}
        </header>
    );
};

export default Header;
