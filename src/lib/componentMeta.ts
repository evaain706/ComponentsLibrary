import Button from '@/app/components/Button';

export const components = {
  Button: {
    component: Button,
    example: `<Button size="md" color="primary">눌러봐</Button>`,
  },
};

export type ComponentName = keyof typeof components;
