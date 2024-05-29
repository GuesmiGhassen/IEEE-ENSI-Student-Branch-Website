import React from 'react'
import { twMerge } from "tailwind-merge";
import im1 from './1.jpg'
import im2 from './2.jpg'
import im3 from './3.jpg'
import im4 from './4.jpg'
import im5 from './5.jpg'
import im6 from './6.jpg'
function Workshops() {
  return (
    <div className='lg:mx-20 mx-10 pb-20 grid  lg:grid-cols-4 gap-8 justify-center hidd cont'>
        <div
			to={''}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
			)}
		>
			<div>
				<img
					src={im6}
					alt=""
					className={twMerge(
						"h-[300px] rounded-sm w-full object-contain"
					)}
				/>
			</div>
            <br />             
			<div class="font-bold">{'Hands-On Lag-Llama: The Future Of Forecasting!'}</div>
		</div>
		<div
			to={''}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
			)}
		>
			<div>
				<img
					src={im5}
					alt=""
					className={twMerge(
						"h-[300px] rounded-sm w-full object-contain"
					)}
				/>
			</div>
            <br />             
			<div class="font-bold">{'Integrating ML Into Healthcare Systems.'}</div>
		</div>
		<div
			to={''}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
			)}
		>
			<div>
				<img
					src={im4}
					alt=""
					className={twMerge(
						"h-[300px] rounded-sm w-full object-contain"
					)}
				/>
			</div>
            <br />             
			<div class="font-bold">{'AI X Cloud: Cloud Problems And How To Solve Them With AI.'}</div>
		</div>
        <div
			to={''}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
			)}
		>
			<div>
				<img
					src={im3}
					alt=""
					className={twMerge(
						"h-[300px] rounded-sm w-full object-contain"
					)}
				/>
			</div>
            <br />             
			<div class="font-bold">{'Computer Vision.'}</div>
		</div>
        <div
			to={''}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
			)}
		>
			<div>
				<img
					src={im2}
					alt=""
					className={twMerge(
						"h-[300px] rounded-sm w-full object-contain"
					)}
				/>
			</div>
            <br />             
			<div class="font-bold">{'MLFlow: Accelerate ML For Entreprises.'}</div>
		</div>
        <div
			to={''}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
			)}
		>
			<div>
				<img
					src={im1}
					alt=""
					className={twMerge(
						"h-[300px] rounded-sm w-full object-contain"
					)}
				/>
			</div>
            <br />             
			<div class="font-bold">{'Language Models And How to Build LLM-Powered Apps.'}</div>
		</div>

    </div>
  )
}

export default Workshops