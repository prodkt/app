'use client'

import type { SVGProps } from 'react'

const behance = 'Behance'
const discord = 'Discord'
const docker = 'Docker'
const dribbble = 'Dribbble'
const figma = 'Figma'
const github = 'GitHub'
const x = 'X'
const gitlab = 'GitLab'
const instagram = 'Instagram'
const linkedin = 'LinkedIn'
// const medium = 'Medium'
// const pinterest = 'Pinterest'
const slack = 'Slack'
// const snapchat = 'Snapchat'
// const spotify = 'Spotify'
// const tiktok = 'TikTok'
// const twitch = 'Twitch'
// const twitter = 'Twitter'
// const whatsapp = 'WhatsApp'
const youtube = 'YouTube'

const BehanceLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{behance}</title>
    <path
      fill='url(#BehanceLogo-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M18.848 12.641c.528.72.793 1.578.793 2.582 0 1.031-.265 1.863-.8 2.491-.301.348-.74.67-1.322.96.883.316 1.548.814 2 1.493.449.68.675 1.506.675 2.477 0 1.002-.258 1.902-.772 2.696-.326.526-.735.971-1.225 1.33-.552.412-1.203.695-1.955.85a12.3 12.3 0 0 1-2.445.226H6V10.838h8.362c2.11.032 3.604.631 4.486 1.803ZM9.45 13.775v3.73h4.207c.749 0 1.36-.14 1.83-.419.468-.279.704-.775.704-1.484 0-.79-.31-1.309-.93-1.563-.535-.175-1.217-.264-2.045-.264H9.45Zm0 6.529v4.51h4.202c.75 0 1.337-.1 1.753-.3.76-.37 1.138-1.07 1.138-2.11 0-.883-.366-1.486-1.101-1.816-.413-.182-.99-.279-1.733-.284H9.45Zm21.204-4.806c.895.39 1.63 1.008 2.209 1.85.529.744.868 1.605 1.022 2.585.091.572.126 1.403.112 2.483h-9.323c.056 1.253.497 2.134 1.34 2.636.512.314 1.124.472 1.847.472.76 0 1.38-.19 1.855-.572.263-.208.492-.494.69-.86h3.416c-.091.74-.506 1.494-1.24 2.26-1.145 1.214-2.75 1.823-4.814 1.823-1.704 0-3.206-.512-4.506-1.538-1.306-1.025-1.955-2.694-1.955-5.005 0-2.167.588-3.83 1.762-4.986 1.178-1.153 2.7-1.734 4.575-1.734 1.117-.001 2.12.195 3.01.586Zm-5.003 2.825c-.473.476-.77 1.121-.893 1.934h5.767c-.062-.868-.36-1.525-.891-1.978-.537-.449-1.197-.672-1.986-.672-.856.001-1.525.24-1.997.716Zm-1.758-4.591h7.416v-2.105h-7.416v2.105Z'
    />
    <defs>
      <linearGradient
        id='BehanceLogo-a'
        x1={34.071}
        x2={18.18}
        y1={28.383}
        y2={2.717}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const DiscordLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{discord}</title>
    <path
      fill='url(#DiscordLogo-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='m29.798 10.699-.093-.136-.149-.07a22.625 22.625 0 0 0-5.681-1.763l-.413-.07-.204.367c-.198.356-.382.72-.552 1.092a21.022 21.022 0 0 0-5.419 0c-.17-.371-.354-.736-.552-1.092l-.203-.368-.414.071a22.786 22.786 0 0 0-5.685 1.768l-.15.07-.093.138c-3.583 5.348-4.56 10.583-4.074 15.733l.025.262.21.157a22.819 22.819 0 0 0 6.967 3.528l.4.123.249-.337a17.159 17.159 0 0 0 1.505-2.45l.138-.272a16.4 16.4 0 0 0 8.776.001l.137.273c.433.858.936 1.677 1.506 2.448l.248.336.4-.121a22.715 22.715 0 0 0 6.971-3.527l.21-.157.025-.261c.571-5.975-.979-11.16-4.085-15.743ZM15.545 22.702c-.937 0-1.823-.884-1.823-2.11 0-1.235.858-2.119 1.819-2.119.97 0 1.845.893 1.826 2.11-.02 1.247-.872 2.119-1.822 2.119Zm8.91 0c-.938 0-1.822-.883-1.822-2.11 0-1.234.858-2.119 1.822-2.119.97 0 1.838.89 1.82 2.11-.02 1.248-.87 2.119-1.82 2.119Z'
    />
    <defs>
      <linearGradient
        id='DiscordLogo-a'
        x1={34.071}
        x2={12.367}
        y1={30.771}
        y2={2.959}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const DockerLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{docker}</title>
    <path
      fill='url(#discord-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='m26.267 14.723.561.408c.976.79 1.537 1.682 1.66 2.702 1.048-.204 2.39-.05 2.975.357l.537.332-.098.204c-.17.382-.22.484-.244.535-.95 1.912-2.83 1.938-3.707 1.912-2.22 5.584-6.953 8.67-13.344 8.67-2.952 0-5.196-.944-6.709-2.805-2-2.448-2-5.635-1.83-6.655l.05-.204h17.637c.927 0 1.634-.255 1.976-.459a3.417 3.417 0 0 1-.513-1.555c-.073-1.02.171-2.091.659-2.856l.39-.586Zm-15.563 2.396v2.55H8.02v-2.55h2.684Zm3.17 0v2.55h-2.683v-2.55h2.684Zm3.172 0v2.55h-2.683v-2.55h2.683Zm3.171 0v2.55h-2.683v-2.55h2.683Zm3.172 0v2.55h-2.684v-2.55h2.684Zm-3.172-3.06v2.55h-2.683v-2.55h2.683Zm-3.17 0v2.55h-2.684v-2.55h2.683Zm-3.172 0v2.55H11.19v-2.55h2.684ZM20.217 11v2.55h-2.683V11h2.683Z'
    />
    <defs>
      <linearGradient
        id='discord-a'
        x1={32.066}
        x2={13.729}
        y1={30.069}
        y2={4.767}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const DribbbleLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{dribbble}</title>
    <path
      fill='url(#dribbble-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M19.81 8.007c5.483-.197 9.193 3.596 9.382 9.343v.002c.22 6.368-3.873 14.142-12.23 14.625-2.538.145-5.065-.398-6.729-1.349a.49.49 0 0 1-.185-.631l.734-1.546a.444.444 0 0 1 .628-.204 9.01 9.01 0 0 0 1.63.72.452.452 0 0 0 .58-.33c1.162-4.573 2.452-9.448 3.742-13.942a.461.461 0 0 1 .411-.339l1.71-.099c.316-.018.553.299.46.617a337.454 337.454 0 0 0-3.785 14.071c-.075.303.145.596.443.596.213 0 .425-.005.63-.016 5.843-.338 9.48-6.572 9.279-12.021-.161-4.68-2.922-7.104-6.68-6.946-2.025.09-4.13.935-5.673 2.226a.444.444 0 0 1-.672-.111l-.86-1.41a.494.494 0 0 1 .11-.641c2.027-1.608 4.72-2.507 7.075-2.615Z'
    />
    <defs>
      <linearGradient
        id='dribbble-a'
        x1={29.248}
        x2={5.272}
        y1={32.288}
        y2={13.107}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const FigmaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={40}
    viewBox='0 0 32 40'
    fill='none'
    {...props}
  >
    <title>{figma}</title>
    <path
      fill='url(#figma-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M11.995 31c2.02 0 3.66-1.643 3.66-3.667v-3.666h-3.66a3.665 3.665 0 0 0-3.66 3.666A3.665 3.665 0 0 0 11.994 31Z'
    />
    <path
      fill='url(#figma-b)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M8.334 20a3.665 3.665 0 0 1 3.66-3.667h3.661v7.333h-3.66A3.665 3.665 0 0 1 8.335 20Z'
    />
    <path
      fill='url(#figma-c)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M8.335 12.667A3.665 3.665 0 0 1 11.995 9h3.66v7.333h-3.66a3.665 3.665 0 0 1-3.66-3.666Z'
    />
    <path
      fill='url(#figma-d)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M15.655 9h3.66c2.021 0 3.66 1.643 3.66 3.667a3.665 3.665 0 0 1-3.66 3.666h-3.66V9Z'
    />
    <path
      fill='url(#figma-e)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M22.976 20a3.665 3.665 0 0 1-3.66 3.666A3.665 3.665 0 0 1 15.656 20a3.665 3.665 0 0 1 3.66-3.667c2.02 0 3.66 1.643 3.66 3.667Z'
    />
    <defs>
      <linearGradient
        id='figma-a'
        x1={15.674}
        x2={8.164}
        y1={31.088}
        y2={23.592}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='figma-b'
        x1={15.674}
        x2={8.164}
        y1={23.754}
        y2={16.258}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='figma-c'
        x1={15.674}
        x2={8.165}
        y1={16.421}
        y2={8.925}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='figma-d'
        x1={22.994}
        x2={15.485}
        y1={16.421}
        y2={8.925}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='figma-e'
        x1={22.994}
        x2={15.485}
        y1={23.754}
        y2={16.258}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const YouTubeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{youtube}</title>
    <path
      fill='url(#a)'
      fillRule='evenodd'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M29.839 13.16c.34.35.582.785.701 1.26.317 1.759.471 3.543.46 5.33a29.008 29.008 0 0 1-.46 5.25 2.78 2.78 0 0 1-1.94 2c-1.72.46-8.6.46-8.6.46s-6.88 0-8.6-.46a2.78 2.78 0 0 1-1.94-1.92A29.001 29.001 0 0 1 9 19.75a29.001 29.001 0 0 1 .46-5.29 2.78 2.78 0 0 1 1.94-2C13.12 12 20 12 20 12s6.88 0 8.6.42c.47.133.898.388 1.239.74ZM23.5 19.75l-5.75 3.27v-6.54l5.75 3.27Z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='a'
        x1={31.056}
        x2={16.162}
        y1={27.645}
        y2={6.449}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const XLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{x}</title>
    <path
      fill='url(XLogo-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M22.096 18.317 30.285 9h-1.94l-7.116 8.088L15.551 9H9l8.59 12.231L9 31h1.94l7.51-8.543L24.448 31H31l-8.904-12.683Zm-2.66 3.021-.871-1.218-6.924-9.688h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982l-5.927-8.3Z'
    />
    <defs>
      <linearGradient
        id='XLogo-a'
        x1={31.055}
        x2={8.527}
        y1={31.264}
        y2={8.736}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const SlackLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{slack}</title>
    <path
      fill='url(#slack-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M22.5 18c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5Z'
    />
    <path
      fill='url(#slack-b)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M28.5 18H27v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z'
    />
    <path
      fill='url(#slack-c)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M17.5 22c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5Z'
    />
    <path
      fill='url(#slack-d)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M11.5 22H13v1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5Z'
    />
    <path
      fill='url(#slack-e)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M22 22.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5Z'
    />
    <path
      fill='url(#slack-f)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M23.5 27H22v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Z'
    />
    <path
      fill='url(#slack-g)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M18 17.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5Z'
    />
    <path
      fill='url(#slack-h)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M16.5 13H18v-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5Z'
    />
    <defs>
      <linearGradient
        id='slack-a'
        x1={24.008}
        x2={18.621}
        y1={18.096}
        y2={16.076}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='slack-b'
        x1={30.008}
        x2={26.936}
        y1={18.036}
        y2={14.964}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='slack-c'
        x1={19.008}
        x2={13.621}
        y1={30.096}
        y2={28.076}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='slack-d'
        x1={13.008}
        x2={9.936}
        y1={25.036}
        y2={21.964}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='slack-e'
        x1={30.02}
        x2={28}
        y1={24.036}
        y2={18.649}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='slack-f'
        x1={25.008}
        x2={21.936}
        y1={30.036}
        y2={26.964}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='slack-g'
        x1={18.02}
        x2={16}
        y1={19.036}
        y2={13.649}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='slack-h'
        x1={18.008}
        x2={14.936}
        y1={13.036}
        y2={9.964}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const LinkedinLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{linkedin}</title>
    <path
      fill='url(#linkedin-a)'
      fillRule='evenodd'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M10.633 9C9.73 9 9 9.706 9 10.576v18.849c0 .87.731 1.575 1.633 1.575h18.823c.902 0 1.632-.706 1.632-1.576V10.576c0-.87-.73-1.576-1.632-1.576H10.633Zm5.08 8.507v9.904h-3.306v-9.904h3.306Zm.217-3.063c0 .95-.717 1.71-1.87 1.71h-.021c-1.11 0-1.827-.76-1.827-1.71 0-.973.74-1.712 1.87-1.712 1.131 0 1.827.74 1.848 1.712Zm4.917 12.967h-3.305s.043-8.975 0-9.904h3.305v1.402c.44-.675 1.226-1.634 2.98-1.634 2.174 0 3.804 1.415 3.804 4.457v5.68h-3.305v-5.299c0-1.331-.478-2.24-1.674-2.24-.913 0-1.457.613-1.696 1.205-.087.21-.109.507-.109.803v5.53Z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='linkedin-a'
        x1={31.144}
        x2={8.616}
        y1={31.264}
        y2={8.646}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
const InstagramLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{instagram}</title>
    <path
      fill='url(#instagram-a)'
      fillRule='evenodd'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M25 10H15a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5Zm-1 9.37a4 4 0 1 1-7.913 1.174A4 4 0 0 1 24 19.37ZM25.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='instagram-a'
        x1={30.05}
        x2={9.57}
        y1={30.24}
        y2={9.76}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const GitlabLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{gitlab}</title>
    <path
      fill='url(#gitlab-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='m20 30.266 4.05-12.467h-8.1L20 30.266Z'
    />
    <path
      fill='url(#gitlab-b)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='m20 30.266-4.05-12.467h-5.678L20 30.266Z'
    />
    <path
      fill='url(#gitlab-c)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='m10.272 17.799-1.23 3.788a.839.839 0 0 0 .304.938L20 30.265 10.272 17.8Z'
    />
    <path
      fill='url(#gitlab-d)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M10.272 17.799h5.677l-2.44-7.51a.42.42 0 0 0-.797 0l-2.44 7.51Z'
    />
    <path
      fill='url(#gitlab-e)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='m20 30.266 4.05-12.467h5.678L20 30.266Z'
    />
    <path
      fill='url(#gitlab-f)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='m29.728 17.799 1.23 3.788a.839.839 0 0 1-.304.938L20 30.265l4.864-6.233 4.864-6.233Z'
    />
    <path
      fill='url(#gitlab-g)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M29.728 17.799H24.05l2.44-7.51a.42.42 0 0 1 .797 0l2.44 7.51Z'
    />
    <defs>
      <linearGradient
        id='gitlab-a'
        x1={24.071}
        x2={12.405}
        y1={30.416}
        y2={22.835}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='gitlab-b'
        x1={20.024}
        x2={7.641}
        y1={30.416}
        y2={20.753}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='gitlab-c'
        x1={20.028}
        x2={7.361}
        y1={30.416}
        y2={19.239}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='gitlab-d'
        x1={15.963}
        x2={8.364}
        y1={17.892}
        y2={12.36}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='gitlab-e'
        x1={29.752}
        x2={17.369}
        y1={30.416}
        y2={20.753}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='gitlab-f'
        x1={31.028}
        x2={18.361}
        y1={30.416}
        y2={19.239}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='gitlab-g'
        x1={29.742}
        x2={22.143}
        y1={17.892}
        y2={12.36}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

const GithubLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    {...props}
  >
    <title>{github}</title>
    <path
      fill='url(#github-a)'
      stroke='currentcolor'
      strokeLinejoin='bevel'
      strokeWidth={0.5}
      d='M20.053 9a11.041 11.041 0 0 0-3.491 21.52c.556.102.752-.244.752-.535v-1.878c-3.084.671-3.734-1.484-3.734-1.484a2.955 2.955 0 0 0-1.227-1.62c-.996-.678.081-.678.081-.678a2.326 2.326 0 0 1 1.688 1.139 2.359 2.359 0 0 0 3.213.922 2.346 2.346 0 0 1 .677-1.478c-2.453-.278-5.029-1.227-5.029-5.422a4.27 4.27 0 0 1 1.132-2.962 4.026 4.026 0 0 1 .109-2.922s.928-.298 3.036 1.132c1.81-.497 3.72-.497 5.531 0 2.108-1.43 3.03-1.132 3.03-1.132.406.916.455 1.951.135 2.901a4.27 4.27 0 0 1 1.132 2.962c0 4.243-2.582 5.172-5.043 5.423a2.61 2.61 0 0 1 .753 2.033v3.03c0 .36.196.637.759.529A11.041 11.041 0 0 0 20.053 9Z'
    />
    <defs>
      <linearGradient
        id='github-a'
        x1={31.055}
        x2={9.005}
        y1={30.797}
        y2={8.274}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export {
  BehanceLogo,
  DiscordLogo,
  DockerLogo,
  DribbbleLogo,
  FigmaLogo,
  YouTubeLogo,
  XLogo,
  SlackLogo,
  InstagramLogo,
  GitlabLogo,
  GithubLogo,
  LinkedinLogo,
}
