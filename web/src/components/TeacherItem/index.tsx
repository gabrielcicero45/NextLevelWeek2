
import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'
function TeacherItem(){

return(
            <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/42891342?s=460&u=caf3616576da268d0f8c1606f29b3a4ce4086aad&v=4" alt=""/>
                    <div>
                        <strong>Cicero Gabriel</strong>
                        <span>Quimica</span>
                    </div>
                </header>
                <p>
                Entusiasta das melhores tecnologias de química avançada. 
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões. 

                </p>
                <footer>
                    <p>
                        Preço/hora:
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt=""/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
           )}
export default TeacherItem;