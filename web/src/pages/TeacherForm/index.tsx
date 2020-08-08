import React from 'react';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './style.css';

import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que Incrivel que você quer dar aulas"
                description="O primeiro passo é vocẽ preencher este formulário"
            />
            <main>
                <fieldset>
                    <legend>
                        Seus Dados
                </legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>
                <fieldset>
                    <legend>
                        Sobre a aula
                </legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'História', label: 'História' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Filosofia', label: 'Filosofia' },
                        ]} />
                    <Input name="cost" label="Custo da sua hora/aula" />

                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis <button type="button" > + Novo horário
                    </button>
                    </legend>
                </fieldset>
                <div className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
                <Input
                  name="from"
                  label="Das"
                  type="time"
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                />
              </div>

                <footer>
                    <p>
                        <img src={warningIcon} alt="" />
                        Importante ! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button"> Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;