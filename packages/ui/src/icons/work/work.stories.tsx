import type { Meta, StoryObj } from '@storybook/react'

import {
  // Cycle,
  // Module,
  // State,
  // Common
  ArchiveIcon,
  BlockedIcon,
  BlockerIcon,
  CalendarAfterIcon,
  CalendarBeforeIcon,
  CenterPanelIcon,
  CreateIcon,
  DiceIcon,
  DiscordIcon,
  FullScreenPanelIcon,
  GithubIcon,
  InfoIcon,
  LayersIcon,
  LayerStackIcon,
  PhotoFilterIcon,
  PriorityIcon,
  RelatedIcon,
  SidePanelIcon,
  TransferIcon,
} from '.'
import {
  CircleDotFullIcon,
  ContrastIcon,
  CycleGroupIcon,
  DoubleCircleIcon,
  // Helper,
} from './cycle'
import {
  ModuleBacklogIcon,
  ModuleCancelledIcon,
  ModuleCompletedIcon,
  ModuleInProgressIcon,
  ModulePausedIcon,
  ModulePlannedIcon,
} from './module'
import {
  BacklogGroupIcon,
  CancelledGroupIcon,
  CompletedGroupIcon,
  // Helper,
  StartedGroupIcon,
  StateGroupIcon,
  UnstartedGroupIcon,
} from './state'

// import type { ISvgIcons } from "./type";

const meta: Meta<typeof ArchiveIcon> = {
  component: ArchiveIcon,
  args: {},
  render: (args) => <ArchiveIcon {...args} />,
}

export default meta
type Story = StoryObj<typeof ArchiveIcon>

// export const CycleStory: Story = {
//   args: {},
//   render: (args) => <Cycle className='mx-auto h-16 w-auto' {...args} />,
// }

// export const ModuleStory: Story = {
//   args: {},
//   render: (args) => <Module className='mx-auto h-16 w-auto' {...args} />,
// }

// export const StateStory: Story = {
//   args: {},
//   render: (args) => <State className='mx-auto h-16 w-auto' {...args} />,
// }

export const Archive: Story = {
  args: {},
  render: (args) => <ArchiveIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const Blocked: Story = {
  args: {},
  render: (args) => <BlockedIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const Blocker: Story = {
  args: {},
  render: (args) => <BlockerIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const CalendarAfter: Story = {
  args: {},
  render: (args) => (
    <CalendarAfterIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}

export const CalendarBefore: Story = {
  args: {},
  render: (args) => (
    <CalendarBeforeIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}

export const CenterPanel: Story = {
  args: {},
  render: (args) => (
    <CenterPanelIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}

export const Create: Story = {
  args: {},
  render: (args) => <CreateIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const Dice: Story = {
  args: {},
  render: (args) => <DiceIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const Discord: Story = {
  args: {},
  render: (args) => <DiscordIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const FullScreenPanel: Story = {
  args: {},
  render: (args) => (
    <FullScreenPanelIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}

export const Github: Story = {
  args: {},
  render: (args) => <GithubIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const LayerStack: Story = {
  args: {},
  render: (args) => (
    <LayerStackIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}

export const Layers: Story = {
  args: {},
  render: (args) => <LayersIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const PhotoFilter: Story = {
  args: {},
  render: (args) => (
    <PhotoFilterIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}

export const Priority: Story = {
  args: {},
  render: () => (
    <>
      <PriorityIcon
        containerClassName='size-8 p-1.5 rounded-lg'
        withContainer={true}
        priority='urgent'
        className='urgent mx-auto h-16 w-auto'
      />
      <PriorityIcon
        containerClassName='size-8 p-1.5 rounded-lg'
        withContainer={true}
        priority={'high'}
        className='high mx-auto h-16 w-auto'
      />
      <PriorityIcon
        containerClassName='size-8 p-1.5 rounded-lg'
        withContainer={true}
        priority={'medium'}
        className='medium mx-auto h-16 w-auto'
      />
      <PriorityIcon
        containerClassName='size-8 p-1.5 rounded-lg'
        withContainer={true}
        priority={'low'}
        className='low mx-auto h-16 w-auto'
      />
      <PriorityIcon
        containerClassName='size-8 p-1.5 rounded-lg'
        withContainer={true}
        priority={'none'}
        className='none mx-auto h-16 w-auto'
      />
    </>
  ),
}

export const Related: Story = {
  args: {},
  render: (args) => <RelatedIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const SidePanel: Story = {
  args: {},
  render: (args) => <SidePanelIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const Transfer: Story = {
  args: {},
  render: (args) => <TransferIcon className='mx-auto h-16 w-auto' {...args} />,
}

export const Info: Story = {
  args: {},
  render: (args) => <InfoIcon className='mx-auto h-16 w-auto' {...args} />,
}

// Cycle
export const CircleDotFull: Story = {
  args: {},
  render: (args) => (
    <CircleDotFullIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const Contrast: Story = {
  args: {},
  render: (args) => <ContrastIcon className='mx-auto h-16 w-auto' {...args} />,
}
export const CycleGroup: Story = {
  args: {},
  render: () => (
    <>
      <CycleGroupIcon cycleGroup='current' className='mx-auto h-16 w-auto' />
      <CycleGroupIcon cycleGroup='upcoming' className='mx-auto h-16 w-auto' />
      <CycleGroupIcon cycleGroup='completed' className='mx-auto h-16 w-auto' />
      <CycleGroupIcon cycleGroup='draft' className='mx-auto h-16 w-auto' />
    </>
  ),
}
export const DoubleCircle: Story = {
  args: {},
  render: (args) => (
    <DoubleCircleIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
// export const HelperStory: Story = {
// 	args: {},
// 	render: (args) => <Helper className="mx-auto h-16 w-auto" {...args} />,
// };

// Module
export const ModuleBacklog: Story = {
  args: {},
  render: (args) => (
    <ModuleBacklogIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const ModuleCancelled: Story = {
  args: {},
  render: (args) => (
    <ModuleCancelledIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const ModuleCompleted: Story = {
  args: {},
  render: (args) => (
    <ModuleCompletedIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const ModuleInProgress: Story = {
  args: {},
  render: (args) => (
    <ModuleInProgressIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const ModuleStatus: Story = {
  args: {},
  render: () => (
    <>
      <ModuleBacklogIcon className='mx-auto h-16 w-auto' />
      <ModuleCancelledIcon className='mx-auto h-16 w-auto' />
      <ModuleCompletedIcon className='mx-auto h-16 w-auto' />
      <ModuleInProgressIcon className='mx-auto h-16 w-auto' />
      <ModulePausedIcon className='mx-auto h-16 w-auto' />
      <ModulePlannedIcon className='mx-auto h-16 w-auto' />
    </>
  ),
}
export const ModulePaused: Story = {
  args: {},
  render: (args) => (
    <ModulePausedIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const ModulePlanned: Story = {
  args: {},
  render: (args) => (
    <ModulePlannedIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}

// State
export const BacklogGroupState: Story = {
  args: {},
  render: (args) => (
    <BacklogGroupIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const CancelledGroupState: Story = {
  args: {},
  render: (args) => (
    <CancelledGroupIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const CompletedGroupState: Story = {
  args: {},
  render: (args) => (
    <CompletedGroupIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const StartedGroupState: Story = {
  args: {},
  render: (args) => (
    <StartedGroupIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
export const StateGroupState: Story = {
  args: {},
  render: () => (
    <>
      <StateGroupIcon stateGroup='backlog' className='mx-auto h-16 w-auto' />
      <StateGroupIcon stateGroup='unstarted' className='mx-auto h-16 w-auto' />
      <StateGroupIcon stateGroup='started' className='mx-auto h-16 w-auto' />
      <StateGroupIcon stateGroup='completed' className='mx-auto h-16 w-auto' />
      <StateGroupIcon stateGroup='cancelled' className='mx-auto h-16 w-auto' />
    </>
  ),
}
export const UnstartedGroupState: Story = {
  args: {},
  render: (args) => (
    <UnstartedGroupIcon className='mx-auto h-16 w-auto' {...args} />
  ),
}
