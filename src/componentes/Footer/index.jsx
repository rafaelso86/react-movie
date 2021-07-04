import React from 'react';

import iconLinkedin from '../../imagens/icon-linkedin.png';
import iconEmail from '../../imagens/icon-email.png';
import iconGitHub from '../../imagens/icon-github.png';

//import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <div className="logo-footer">
                    <a href="/" >React Movie</a>
                </div>
                <div className="info-footer developer">Desenvolvido por: <span>Rafael S Oliveira</span></div>
                <div className="info-footer">
                    <ul className="social-footer">
                        <li>
                            <a href="https://linkedin.com.br" rel="noopener noreferrer">
                                <img src={iconLinkedin} alt="icon-inkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:rafaelso86@gmail.com" rel="noopener noreferrer">
                                <img src={iconEmail} alt="icon-email" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com" rel="noopener noreferrer">
                                <img src={iconGitHub} alt="icon-github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}