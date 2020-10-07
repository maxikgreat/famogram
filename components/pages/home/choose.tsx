import { Container } from 'semantic-ui-react';
import { motion } from 'framer-motion';

import { Mode } from '@/types';

interface ChooseProps {
  mode: Mode,
  setMode: (value: Mode) => void,
}

export const Choose = ({ mode, setMode }: ChooseProps) => {
  return (
    <section className="choose-hld">
      <Container className="choose">
        <h2 className="mode-center accent skew">I want to...</h2>
        <div className={`${mode === 'finder' ? 'mode mode-active' : 'mode'} finder-hld`}
          onClick={() => setMode('finder')}
        >
          <h2 className="mode-title primary">to be advertised</h2>
        </div>
        <div className={`${mode === 'bloger' ? 'mode mode-active' : 'mode'} bloger-hld`}
          onClick={() => setMode('bloger')}
        >
          <h2 className="mode-title secondary">to advertise</h2>
        </div>
      </Container>
    </section>
  )
};