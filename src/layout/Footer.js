import React from "react";

function Footer() {
    return (
        <footer className='page-footer blue lighten-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Tsotne Tsintsadze
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
