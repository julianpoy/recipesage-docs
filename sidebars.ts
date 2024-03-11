import { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars = {
  tutorialSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tutorials'
    }
  ],
  developingSidebar: [
    {
      type: 'autogenerated',
      dirName: 'developing'
    }
  ],
} satisfies SidebarsConfig;

export default sidebars;
