import React from 'react';

import './style.css';
import PageHeader from '../../components/PageHeader';
function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Profs Disponiveis">

                <form id="search-teachers">
                    <div className="input-block">

                        <label htmlFor="subject">Máterias</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">

                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">

                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
            <article className="teacher-item">
                <header>
                    <img src="" alt=""/>
                    <div>
                        <strong>Cicero Gabriel</strong>
                        <span>Quimica</span>
                    </div>
                </header>
            </article>


            </main>
        </div>
    )
}

export default TeacherList;