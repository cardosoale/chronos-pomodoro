import { PlayCircleIcon } from 'lucide-react';
import { Cicles } from '../Cicles';
import { DefaultButton } from '../DefaultButton/Index';
import { DefaultInput } from '../DefaultInput/Index';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
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
