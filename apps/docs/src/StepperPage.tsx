import { useState } from 'react';
import { Stepper, Button } from '@zen/components';
import { ChevronLeft01, ChevronRight01 } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';

const steps = [
  { title: 'Shipping', subtitle: 'Enter your address' },
  { title: 'Payment', subtitle: 'Choose method' },
  { title: 'Review', subtitle: 'Confirm order' },
  { title: 'Confirm' },
];

export function StepperPage() {
  const [current, setCurrent] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      <DemoBlock label="Interactive">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Stepper steps={steps} currentStep={current} />
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <Button variant="tertiary" size="s" icon={<ChevronLeft01 size={16} />} onClick={() => setCurrent((v) => Math.max(0, v - 1))}>Prev</Button>
            <Button variant="tertiary" size="s" iconRight={<ChevronRight01 size={16} />} onClick={() => setCurrent((v) => Math.min(steps.length - 1, v + 1))}>Next</Button>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock label="Step 0 — active">
        <Stepper steps={steps} currentStep={0} />
      </DemoBlock>

      <DemoBlock label="Step 2 — mid progress">
        <Stepper steps={steps} currentStep={2} />
      </DemoBlock>

      <DemoBlock label="All completed">
        <Stepper steps={steps} currentStep={steps.length} />
      </DemoBlock>

      <DemoBlock label="With error">
        <Stepper steps={steps} currentStep={2} errorSteps={[1]} />
      </DemoBlock>

      <DemoBlock label="2 steps">
        <Stepper
          steps={[{ title: 'Details' }, { title: 'Done' }]}
          currentStep={0}
        />
      </DemoBlock>

      <DemoBlock label="Vertical — step 1 active">
        <Stepper steps={steps} currentStep={1} orientation="vertical" />
      </DemoBlock>

      <DemoBlock label="Vertical — all completed">
        <Stepper steps={steps} currentStep={steps.length} orientation="vertical" />
      </DemoBlock>

      <DemoBlock label="Vertical — with error">
        <Stepper steps={steps} currentStep={2} errorSteps={[1]} orientation="vertical" />
      </DemoBlock>

    </div>
  );
}
