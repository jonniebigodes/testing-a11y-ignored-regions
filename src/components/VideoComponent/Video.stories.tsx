import type { Meta, StoryObj } from '@storybook/react'

import Video from './Video'

const meta = {
  title: 'Components/Video',
  component: Video,
} satisfies Meta<typeof Video>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: '',
    datePublished: '2025-13-01',
  },
}

export const WithPlaceholder: Story = {
  args: {
    src: '',
    datePublished: '2025-13-01',
    placeholderImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  },
}
