'use client'
import React, { useState } from 'react'

// Import Next Image
import Image from 'next/image'

// Import Types - CarProps
import { CarProps } from './../types/index';

// Import Components
import { CarDetails, CustomButton } from '.';

// Import Utils - CalculateCarRent
import { calculateCarRent } from '@/utils';

// Car Card Props
interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {

  const { city_mpg, year, make, model, transmission, drive } = car

  const carRent = calculateCarRent(city_mpg, year)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='car-card group'>
      {/* Name */}
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      {/* Price */}
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-bold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>
      {/* Image */}
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src='/hero.png'
          alt='car-model'
          fill
          priority
          className='object-contain'
        />
      </div>
      {/* Info About Car */}
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          {/* Transmission */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              alt='steering-wheel'
            />
            <p className='text-[14px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          {/* Drive */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/tire.svg'
              width={20}
              height={20}
              alt='tire'
            />
            <p className='text-[14px]'>
              {drive.toUpperCase()}
            </p>
          </div>
          {/* MPG */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/gas.svg'
              width={20}
              height={20}
              alt='gas'
            />
            <p className='text-[14px]'>
              {city_mpg} MPG
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
}

export default CarCard