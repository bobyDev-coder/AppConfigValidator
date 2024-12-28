"use client"
import React, { FC } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface EnvironmentNotSetProps {
  missingVariables: string[];
}

export const EnvironmentNotSet: FC<EnvironmentNotSetProps> = ({ missingVariables }) => {
  return (
  //   <>
  //     {/*
  //       This example requires updating your template:

  //       ```
  //       <html class="h-full">
  //       <body class="h-full">
  //       ```
  //     */}
  //     <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  //       <div className="text-center">
  //         <p className="text-base font-semibold text-indigo-600 text-lg">404</p>
  //         <p className="font-semibold tracking-tight text-gray-900 text-5xl">
  //           Page not found
  //         </p>
  //         <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
  //           Sorry, we couldn’t find the page you’re looking for.
  //         </p>
  //         <div className="mt-10 flex items-center justify-center gap-x-6">
  //           <a
  //             href="#"
  //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  //           >
  //             Go back home
  //           </a>
  //           <a href="#" className="text-sm font-semibold text-gray-900">
  //             Contact support <span aria-hidden="true">&rarr;</span>
  //           </a>
  //         </div>
  //       </div>
  //     </main>
  //   </>
  // )
  <div className="p-5 text-center">
      <h1 className="text-red-500 text-2xl font-bold">Application Misconfiguration</h1>
      <p className="mt-2 text-5xl">The following environment variables are missing or invalid:</p>
      <ul className="list-disc list-inside mt-4">
        {missingVariables.map((variable) => (
          <li key={variable} className="text-red-500">
            {variable}
          </li>
        ))}
      </ul>
      <p className="mt-4">Please check your environment configuration and restart the application.</p>
      <DotLottieReact className='h-14'
      src="https://lottie.host/35df90e0-1067-4923-ae9a-66616a6f50a9/fh1yP4XG28.lottie"
      loop
      autoplay
    />
    </div>
    // <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
    //    <p className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl" >Page not found</p>
    //   <p>The following environment variables are missing or invalid:</p>
    //   <ul>
    //     {missingVariables.map((variable) => (
    //       <li key={variable} style={{ color: 'red' }}>
    //         {variable}
    //       </li>
    //     ))}
    //   </ul>
    //   <p>Please check your environment configuration and restart the application.</p>
    //   <DotLottieReact className='h-14'
    //   src="https://lottie.host/35df90e0-1067-4923-ae9a-66616a6f50a9/fh1yP4XG28.lottie"
    //   loop
    //   autoplay
    // />
    // </div>
  );
};

