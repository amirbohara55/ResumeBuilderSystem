// import React from 'react'
// import { useParams } from 'react-router-dom'
// import {dummyResumeData} from '../assets/assetes'
// import ResumePreview from '../components/ResumePreview'
// import { ArrowLeftIcon } from 'lucide-react'

// const Preview = () => {

//   const {resusmeID} = useParams()
//   cosnt [isLoading, setIsLoading] = useState(true)
//   const [resumeData, setResumeData] = useState(null)

//   const loadResumeData = async () => {
//     setResumeData(dummyResumeData.find(resume => resume._id === resusmeID || null))
//     setLoading(false)
//   }
//   useEffect(() => {
//     loadResumeData()
//   },[])


//   return  resumeData ? (
//     <div className='bg-slate-100'>
//         <div className='max-w-3xl mx-auto py-10'>
//           <ResumePreview data={resumeData}  template={resumeData.template} accentColor={resumeData.accentColor} className='py-4 bg-white' />

//         </div>
//     </div>
//   ) :(
//     <div>
//       {isLoading ? <Loader /> : (
//         <div classNmae='flex flex-col justify-center h-screen'>
//           <P classNmae='text-center text-6xl text-slate-400 font-medium'>resume not found</P>
//           <a href='' classNmae='mt-6 bg-blue-500 hover:bg-green-500 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors'>
//             <ArrowLeftIcon classNme='mr-2 size-4'/>
//             Go back home page
//           </a>
//         </div>
//       )}
//     </div>

//   )
// }

// export default Preview



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import ResumePreview from '../components/ResumePreview'
import { ArrowLeftIcon, Loader } from 'lucide-react'

const Preview = () => {

  const { resumeID } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)

  const loadResumeData = async () => {
    setResumeData(
      dummyResumeData.find(resume => resume._id === resumeID) || null
    )
    setIsLoading(false)
  }

  useEffect(() => {
    loadResumeData()
  }, [])

  return resumeData ? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accentColor}
          className='py-4 bg-white'/>
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? (
        <Loader className="animate-spin mx-auto mt-20" />
      ) : (
        <div className='flex flex-col justify-center h-screen items-center'>
          <p className='text-center text-6xl text-slate-400 font-medium'>
            Resume not found
          </p>

          <a href='/'
            className='mt-6 bg-blue-500 hover:bg-green-500 text-white rounded-full px-6 h-9 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors'>
            <ArrowLeftIcon className='mr-2 size-4' />
            Go back home pag </a>
        </div>
      )}
    </div>
  )
}

export default Preview