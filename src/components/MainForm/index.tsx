import { PlayCircleIcon } from 'lucide-react';
import { Cicles } from '../Cicles';
import { DefaultButton } from '../DefaultButton/Index';
import { DefaultInput } from '../DefaultInput/Index';
import { FormEvent, useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('pausei o submit', taskName);
  }
  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>
      <div className='formRow'>
        <Cicles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
