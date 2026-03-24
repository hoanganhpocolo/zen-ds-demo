export type PropDef =
  | { type: 'select'; options: string[] }
  | { type: 'boolean' }
  | { type: 'text' };

export type ComponentSchema = Record<string, PropDef>;

export const PROP_DEFS: Record<string, ComponentSchema> = {
  Button: {
    variant: {
      type: 'select',
      options: [
        'primary', 'accent', 'secondary', 'tertiary',
        'danger', 'danger-subtle', 'positive', 'positive-subtle',
        'flat-primary', 'flat-accent', 'inverse', 'white', 'black-overlay',
      ],
    },
    size:     { type: 'select', options: ['2xs', 'xs', 's', 'm', 'l', 'xl'] },
    loading:  { type: 'boolean' },
    disabled: { type: 'boolean' },
  },

  Badge: {
    color: {
      type: 'select',
      options: [
        'neutral', 'accent', 'info', 'positive', 'negative', 'warning',
        'yellow', 'orange', 'red', 'pink', 'purple', 'blue', 'teal', 'green',
        'cyan', 'indigo', 'violet', 'plum', 'crimson', 'brown', 'inverse',
      ],
    },
    variant: { type: 'select', options: ['solid', 'subtle', 'ghost'] },
    size:    { type: 'select', options: ['m', 's'] },
    dot:     { type: 'boolean' },
  },

  Avatar: {
    size: { type: 'select', options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl'] },
    color: {
      type: 'select',
      options: [
        'accent', 'neutral', 'blue', 'green', 'purple',
        'orange', 'pink', 'red', 'teal', 'yellow', 'cyan', 'indigo',
        'violet', 'plum', 'crimson', 'brown',
      ],
    },
    background: { type: 'select', options: ['subtle', 'solid'] },
    shape:      { type: 'select', options: ['circle', 'square'] },
  },

  Search: {
    size:     { type: 'select', options: ['default', 's'] },
    disabled: { type: 'boolean' },
  },

  TabGroup: {
    tabStyle: { type: 'select', options: ['indicator', 'subtle'] },
    size:     { type: 'select', options: ['m', 's'] },
  },

  TabItem: {
    tabStyle: { type: 'select', options: ['indicator', 'subtle'] },
    size:     { type: 'select', options: ['m', 's'] },
  },

  Sidebar: {
    background: { type: 'select', options: ['default', 'neutral', 'brand'] },
  },
};
