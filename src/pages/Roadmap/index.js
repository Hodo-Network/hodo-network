import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import classNames from "../../utils/classNames";

const steps = [
  {
    heading: "Q1",
    tasks: [
      {
        name: "Ideation",
        description: "Business planning and creation of initial roadmap.",
        status: "complete",
      },
      {
        name: "NFT Design",
        description: "Design of the first NFT series.",
        status: "complete",
      },
      {
        name: "Marketplace Development",
        description: "Development of the Marketplace UI.",
        status: "current",
      },
    ],
  },
  {
    heading: "Q2",
    tasks: [
      {
        name: "NFT Smart Contract Development",
        description: "Development of the Smart Contracts for NFTs.",
        status: "current",
      },
      {
        name: "NFT Minting",
        description: "Minting of the NFTs.",
        status: "upcoming",
      },
      {
        name: "Platform Launch",
        description:
          "Launch of the MVP allowing users to buy the first series of NFTs.",
        status: "upcoming",
      },
    ],
  },
  {
    heading: "Q3",
    tasks: [
      {
        name: "Addition of more Wallets",
        description:
          "MetaMask is the first wallet connector. Now we'll begin adding Ledger, Trezor, etc.",
        status: "upcoming",
      },
      {
        name: "User Submitted NFTs",
        description:
          "Allow users to post their own NFTs for sale in the marketplace.",
        status: "upcoming",
      },
    ],
  },
  {
    heading: "Q4",
    tasks: [
      {
        name: "Bidding Service",
        description: "Allow users to bid on NFTs in an auction style format.",
        status: "upcoming",
      },
      {
        name: "Explore X-Chain NFTs",
        description:
          "Explore the idea of allowing X-Chain NFTs to be listed in the marketplace.",
        status: "upcoming",
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      aria-labelledby='primary-heading'
      className='p-4 sm:p-8 lg:p-12 max-w-8xl'>
      <h1 id='primary-heading' className='sr-only'>
        Roadmap
      </h1>

      <nav aria-label='Progress'>
        {steps.map((step, stepIdx) => (
          <div key={step.heading}>
            <h2
              className={`font-semibold text-lg pl-1 mb-4 dark:text-white ${
                stepIdx !== 0 && "mt-8"
              }`}>
              {step.heading}
            </h2>
            <ol className='overflow-hidden'>
              {step.tasks.map((task, taskIdx) => (
                <li
                  key={task.name}
                  className={classNames(
                    taskIdx !== step.tasks.length - 1 ? "pb-10" : "",
                    "relative"
                  )}>
                  {task.status === "complete" ? (
                    <>
                      {taskIdx !== step.tasks.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-blue-600'
                          aria-hidden='true'
                        />
                      ) : null}
                      <div className='relative flex items-start group'>
                        <span className='h-9 flex items-center'>
                          <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full group-hover:bg-blue-800'>
                            <CheckIcon
                              className='w-5 h-5 text-white'
                              aria-hidden='true'
                            />
                          </span>
                        </span>
                        <span className='ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold tracking-wide uppercase dark:text-white'>
                            {task.name}
                          </span>
                          <span className='text-sm text-gray-600 dark:text-gray-300'>
                            {task.description}
                          </span>
                        </span>
                      </div>
                    </>
                  ) : task.status === "current" ? (
                    <>
                      {taskIdx !== step.tasks.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <div
                        className='relative flex items-start group'
                        aria-current='step'>
                        <span
                          className='h-9 flex items-center'
                          aria-hidden='true'>
                          <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-blue-600 rounded-full'>
                            <span className='h-2.5 w-2.5 bg-blue-600 rounded-full' />
                          </span>
                        </span>
                        <span className='ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold tracking-wide uppercase text-blue-600 dark:text-blue-500'>
                            {task.name}
                          </span>
                          <span className='text-sm text-gray-500 dark:text-gray-400'>
                            {task.description}
                          </span>
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {taskIdx !== step.tasks.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <div className='relative flex items-start group'>
                        <span
                          className='h-9 flex items-center'
                          aria-hidden='true'>
                          <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                            <span className='h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300' />
                          </span>
                        </span>
                        <span className='ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-300'>
                            {task.name}
                          </span>
                          <span className='text-sm text-gray-500 dark:text-gray-400'>
                            {task.description}
                          </span>
                        </span>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </nav>
    </section>
  );
}
