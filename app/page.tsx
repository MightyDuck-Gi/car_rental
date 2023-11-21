import Image from 'next/image'

import { Hero } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Options
          </h1>
          <p>
            <div className='home__filter'>
              /**time stamp 50:00 */
            </div>
          </p>
        </div>
      </div>
    </main>
  )
}
