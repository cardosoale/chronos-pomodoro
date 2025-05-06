import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem
        vero ea quibusdam. Odio, ab quia minima voluptatibus ullam eveniet illo
        sit esse deserunt odit, aspernatur doloribus velit dolor reprehenderit.
      </p>
    </>
  );
}
