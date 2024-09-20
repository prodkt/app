import * as React from 'react'

import type { SVGProps } from 'react'

import './file.css'

import {
  Download,
  Ellipsis,
  Eye,
  FilePenLine,
  Folder,
  Info,
  Share,
} from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/primitives/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/primitives/dropdown-menu'

export interface FileFolderProps extends SVGProps<SVGSVGElement> {
  src?: string
}

const File = ({ src, ...props }: Readonly<FileFolderProps>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={201}
    height={238}
    viewBox='0 0 201 238'
    fill='none'
    {...props}
  >
    <path
      fill='url(#a)'
      stroke='url(#b)'
      d='M.5 12C.5 5.648 5.629.5 11.98.5h125.928c4.582 0 8.956 1.784 12.234 4.986 15.503 15.145 31.005 30.721 45.19 47.082 2.713 3.13 4.167 7.115 4.167 11.262.002 45.619.001 130.516 0 161.821 0 6.35-5.148 11.495-11.5 11.495H12c-6.351 0-11.5-5.149-11.5-11.5V12ZM48 23.5c-13.531 0-24.5 10.969-24.5 24.5S34.469 72.5 48 72.5 72.5 61.531 72.5 48 61.531 23.5 48 23.5Z'
    />
    <path
      fill='url(#c)'
      stroke='url(#d)'
      d='M13.048.5C6.145.5.548 6.096.548 13v211.5C.549 231.401 6.095 237 13 237h174.021c6.905 0 12.479-5.597 12.479-12.5V73c0-6.904-5.596-12.5-12.5-12.5h-39.429a7.297 7.297 0 0 1-5.14-2.114 7.184 7.184 0 0 1-2.128-5.099V13c0-6.904-5.596-12.5-12.5-12.5H13.048ZM24.5 48c0-12.979 10.522-23.5 23.5-23.5 12.98 0 23.5 10.521 23.5 23.5S60.98 71.5 48 71.5C35.022 71.5 24.5 60.98 24.5 48Z'
    />
    <g filter='url(#e)'>
      <path
        fill='url(#f)'
        fillRule='evenodd'
        d='M48 16c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32Zm0 8c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24Z'
        clipRule='evenodd'
      />
    </g>
    <path
      stroke='url(#g)'
      strokeWidth={1.333}
      d='M48 16c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32Zm0 8c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24Z'
      clipRule='evenodd'
    />

    <g className='' clipPath='url(#prodktFileComponent)'>
      {src && (
        <image
          href={src}
          width='48'
          height='48'
          opacity={1}
          className=' rounded-[1.4rem] object-cover object-center mix-blend-overlay'
          x='24'
          y='24'
          preserveAspectRatio='xMidYMid slice'
        />
      )}
    </g>
    <defs>
      <linearGradient
        id='a'
        x1={100}
        x2={100}
        y1={0.354}
        y2={237.292}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray2)' />
        <stop offset={1} stopColor='var(--gray3)' />
      </linearGradient>
      <linearGradient
        id='b'
        x1={100}
        x2={100}
        y1={0}
        y2={237.646}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray5)' />
        <stop offset={1} stopColor='var(--gray6)' />
      </linearGradient>
      <linearGradient
        id='c'
        x1={100.5}
        x2={100.5}
        y1={-165.607}
        y2={548.574}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray2)' />
        <stop offset={1} stopColor='var(--gray5)' />
      </linearGradient>
      <linearGradient
        id='d'
        x1={100.024}
        x2={100.024}
        y1={1}
        y2={236.5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray5)' />
        <stop offset={1} stopColor='var(--gray7)' />
      </linearGradient>
      <linearGradient
        id='f'
        x1={16}
        x2={80}
        y1={80}
        y2={16}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray3)' />
        <stop offset={1} stopColor='var(--gray1)' />
      </linearGradient>
      <linearGradient
        id='g'
        x1={48}
        x2={48}
        y1={16}
        y2={80}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray3)' />
        <stop offset={1} stopColor='var(--gray5)' />
      </linearGradient>
      <filter
        id='e'
        width={65.334}
        height={65.334}
        x={15.333}
        y={15.333}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={1} dy={1} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0' />
        <feBlend in2='shape' result='effect1_innerShadow_4483_6861' />
      </filter>
      <clipPath id='prodktFileComponent'>
        <circle cx={48} cy={48} r={24} fill='#D9D9D9' />
      </clipPath>
    </defs>
  </svg>
)

const FileLarge = React.forwardRef<SVGProps<SVGSVGElement>, FileFolderProps>(
  ({ src, ...props }, ref) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={301}
      height={239}
      fill='none'
      {...props}
    >
      <title>File</title>
      <g className=''>
        <path
          fill='url(#ProdktFileLarge-a)'
          stroke='url(#ProdktFileLarge-b)'
          d='M238.908 1.5a17.5 17.5 0 0 1 12.235 4.973c15.503 15.104 31.004 30.638 45.189 46.954 2.714 3.12 4.167 7.095 4.167 11.23l.001 113.501-.001 35.842c0 12.981-10.436 23.5-23.412 23.5H24.939C11.962 237.5 1.5 226.98 1.5 214V25C1.5 12.022 12.021 1.5 25 1.5h213.908Z'
        />
      </g>
      <g className=''>
        <path
          fill='url(#ProdktFileLarge-c)'
          stroke='url(#ProdktFileLarge-d)'
          d='M24.938 237.518c78.559.101 199.885.632 251.025.868 13.58.063 24.537-10.928 24.537-24.504V70c0-6.903-5.596-12.5-12.5-12.5h-21.5c-10.769 0-19.5-8.73-19.5-19.5V13C247 6.1 241.445.5 234.539.5H24.99C11.459.5.5 11.47.5 25V213c0 13.529 10.906 24.499 24.438 24.517Z'
        />
      </g>
      <g className=''>
        <path
          fill='url(#ProdktFileLarge-e)'
          stroke='url(#ProdktFileLarge-f)'
          d='M24.938 237.518c78.559.101 199.885.632 251.025.868 13.58.063 24.537-10.928 24.537-24.504V70c0-6.903-5.596-12.5-12.5-12.5h-21.5c-10.769 0-19.5-8.73-19.5-19.5V13C247 6.1 241.445.5 234.539.5H24.99C11.459.5.5 11.47.5 25V213c0 13.529 10.906 24.499 24.438 24.517Z'
        />
      </g>
      <g className='' clipPath='url(#prodktFileLargeComponent)'>
        {src && (
          <image
            href={src}
            ref={ref}
            width={300}
            height={238}
            stroke='url(#ProdktFileLarge-f)'
            x={1}
            y={1}
            className='fileLargeMask origin-center scale-125 object-cover object-center transition-all group-hover:scale-100'
            preserveAspectRatio='xMidYMid slice'
          />
        )}
      </g>
      <defs>
        <linearGradient
          id='ProdktFileLarge-a'
          x1={301}
          x2={1}
          y1={119.5}
          y2={119.5}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gray5)' />
          <stop offset={1} stopColor='var(--gray1)' />
        </linearGradient>
        <linearGradient
          id='ProdktFileLarge-b'
          x1={101}
          x2={101}
          y1={1}
          y2={238}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gray5)' />
          <stop offset={1} stopColor='var(--gray6)' />
        </linearGradient>
        <linearGradient
          id='ProdktFileLarge-d'
          x1={100.524}
          x2={100.524}
          y1={1}
          y2={236.501}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gray5)' />
          <stop offset={1} stopColor='var(--gray6)' />
        </linearGradient>
        <linearGradient
          id='ProdktFileLarge-e'
          x1={150.525}
          x2={150.525}
          y1={1}
          y2={256.501}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={1} stopOpacity={1} stopColor='var(--gray1)' />
          <stop offset={1} stopOpacity={1} stopColor='var(--gray12)' />
        </linearGradient>
        <linearGradient
          id='ProdktFileLarge-f'
          x1={100.524}
          x2={100.524}
          y1={1}
          y2={536.501}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopOpacity={1} stopColor='var(--gray8)' />
          <stop offset={1} stopOpacity={1} stopColor='var(--gray10)' />
        </linearGradient>

        <clipPath id='prodktFileLargeComponent'>
          <path
            fill='url(#ProdktFileLarge-f)'
            stroke='transparent'
            d='M24.938 237.518c78.559.101 199.885.632 251.025.868 13.58.063 24.537-10.928 24.537-24.504V70c0-6.903-5.596-12.5-12.5-12.5h-21.5c-10.769 0-19.5-8.73-19.5-19.5V13C247 6.1 241.445.5 234.539.5H24.99C11.459.5.5 11.47.5 25V213c0 13.529 10.906 24.499 24.438 24.517Z'
          />
        </clipPath>
      </defs>
    </svg>
  ),
)

const PageFile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    FileFolderProps & {
      fileSrc?: string
      projectLogo?: string
      downloadLink?: string
      title: string
      folderTitle?: string
    }
>(
  (
    { src, fileSrc, projectLogo, downloadLink, title, folderTitle, ...props },
    ref,
  ) => {
    const handleDownload = async () => {
      if (!src || !downloadLink) return

      // Construct the URL to the actual file
      const fileUrl = `https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${src}`

      try {
        // Fetch the file data
        const response = await fetch(fileUrl)
        if (!response.ok) throw new Error('Network response was not ok')

        // Create a Blob from the response
        const blob = await response.blob()

        // Create an object URL for the Blob
        const url = window.URL.createObjectURL(blob)

        // Create a temporary link element
        const link = document.createElement('a')
        link.href = url
        link.download = downloadLink // Set the download filename

        // Append to the document and trigger click
        document.body.appendChild(link)
        link.click()

        // Clean up
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error downloading file:', error)
      }
    }

    return (
      <div {...props} ref={ref}>
        <div className=' group relative z-[1] rounded-[2rem] bg-[var(--gray6)] p-2 transition-all duration-300 hover:bg-[var(--gray3)] dark:bg-[var(--gray1)]'>
          <div className='absolute inset-x-0 top-0 mx-0 p-2'>
            <div className='flex flex-row items-center justify-start gap-1 py-2 pl-2 pr-0'>
              <div className='flex size-8 items-center justify-center rounded-full p-0'>
                {fileSrc ? (
                  <img
                    src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${fileSrc}`}
                    alt=''
                    className='outline-3 m-auto size-8 origin-center self-center rounded-full bg-transparent object-cover object-center outline -outline-offset-[3px] outline-[var(--grayA5)] dark:outline-[var(--gray4)]'
                  />
                ) : null}
              </div>
              {downloadLink && src ? (
                <button
                  onClick={handleDownload}
                  className='flex size-8 items-center justify-center rounded-full bg-gradient-to-b from-[var(--ghost-aa6)] to-[var(--ghost-a6)] p-1 backdrop-blur group-hover:from-[var(--grayA11)] group-hover:to-[var(--grayA6)] group-hover:text-[var(--gray2)]'
                >
                  <Download size={16} />
                </button>
              ) : null}
              <div className='ml-auto flex size-8 -translate-y-2.5 translate-x-2.5 items-center justify-center rounded-full '>
                <Dialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Ellipsis size={20} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DialogTrigger asChild>
                        <DropdownMenuItem>
                          <Eye size={14} />
                          Preview
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Download size={14} />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FilePenLine size={14} />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Share size={14} />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Info size={14} />
                        File Information
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Preview: {title}</DialogTitle>
                    </DialogHeader>
                    <div className='relative size-full'>
                      {src ? (
                        <img
                          src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${src}`}
                          alt=''
                          className='m-auto h-80 w-full origin-center self-center rounded-lg border border-[var(--grayA2)] object-cover object-center'
                        />
                      ) : null}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className=''></div>
            </div>
          </div>
          {src ? (
            <FileLarge
              src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${src}`}
            />
          ) : null}
          <div className='absolute inset-x-0 bottom-0 mx-0 p-2'>
            <div className='flex flex-col items-start justify-center gap-2 px-4 py-2'>
              <div className='flex items-center justify-center rounded-full text-sm'>
                <h3>{title}</h3>
              </div>

              <div className='flex flex-row items-center justify-start gap-2 px-0'>
                {projectLogo ? (
                  <div className='flex items-center justify-center pb-2'>
                    <img
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${projectLogo}`}
                      alt=''
                      className='h-4 w-auto origin-center self-center object-cover object-center'
                    />
                  </div>
                ) : null}
                {folderTitle ? (
                  <div className='flex items-center justify-center gap-1 rounded-full pb-2 text-xs text-[var(--grayA9)]'>
                    <Folder size={14} />
                    <p>{folderTitle}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
)

PageFile.displayName = 'PageFile'
FileLarge.displayName = 'FileLarge'
export { FileLarge, File, PageFile }
