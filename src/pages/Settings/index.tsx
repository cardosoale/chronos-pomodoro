import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput/Index';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useEffect, useRef } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = 'Configurações - Chronos Pomodoro';
  }, []);

  function handelSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);
    const formErrors = [];

    if (isNaN(workTime)) {
      formErrors.push('Digite aspenas números');
    }
    if (isNaN(shortBreakTime)) {
      formErrors.push('Digite aspenas números');
    }
    if (isNaN(longBreakTime)) {
      formErrors.push('Digite aspenas números');
    }
    if (workTime < 1 || workTime > 99) {
      formErrors.push('Foco deve ter valor entre 1 e 99');
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Descanso curto deve ter valor entre 1 e 30');
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Descanso longo deve ter valor entre 1 e 60');
    }
    if (formErrors.length > 0) {
      formErrors.forEach((error) => showMessage.error(error));
      return;
    }
    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success('Configurações salvas');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Altere as configurações para Foco, Descanso curto e Descanso longo
          aqui.
        </p>
      </Container>

      <Container>
        <form action='' className='form' onSubmit={handelSaveSettings}>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
