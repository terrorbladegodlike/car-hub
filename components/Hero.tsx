'use client'
// Import Next Image
import Image from "next/image"

// Import CustomButton
import CustomButton from "./CustomButton"

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="hero">
      {/* Title & Button */}
      <div className="flex-1 pt-36 padding-x">
        {/* Title */}
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        {/* Subtitle */}
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>
        {/* Button */}
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      {/* Image */}
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src='/hero.png'
            alt="hero"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  )
}

export default Hero