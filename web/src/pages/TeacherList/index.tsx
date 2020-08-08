import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Profs Disponiveis">

                <form id="search-teachers">

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "História", label: "História" },
                            { value: "Português", label: "Português" },
                            { value: "Inglês", label: "Inglês" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Física", label: "Física" },
                            { value: "Química", label: "Química" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Filosofia", label: "Filosofia" },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" },
                        ]}
                    />

                    <Input type="time" name="time" label="Horário" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;