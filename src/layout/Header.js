import React from "react";

function Header() {
    return (
        <nav className='blue lighten-2'>
            <div className='nav-wrapper blue lighten-2'>
                <a href='#' className='brand-logo'>
                    MOVIES.GEO
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='!#'>Latest</a>
                    </li>
                    <li>
                        <a href='!#'>Most watched</a>
                    </li>
                    <li>
                        <a href='!#'>FAQ</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
