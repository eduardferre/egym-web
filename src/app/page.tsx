import {
  Card,
  CardSkeletonContainer,
  CardTitle,
  CardDescription
} from './ui/home/card'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:px-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Main Title Section */}
      <h1 className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-left pt-4 pb-4 text-[#c99e46]">
        Take the Opportunity! Start your journey today!
      </h1>

      {/* Hero Card with Analytics */}
      <Card className="col-span-1 md:col-span-2 lg:col-span-2 transition-transform transform group hover:scale-105">
        <CardSkeletonContainer>
          <Image
            src="/analytics2.webp"
            alt="Analytics Dashboard"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform group-hover:scale-105"
          />
        </CardSkeletonContainer>
        <CardTitle>Analytics for Everything!</CardTitle>
        <CardDescription>
          Track your progress, get personalized insights, and crush your goals
          with eGym&apos;s powerful analytics. Optimize every workout with
          real-time data designed to push your performance further.
        </CardDescription>
      </Card>

      {/* Motivational Card */}
      <Card className="col-span-1 md:col-span-1 lg:col-span-1 transition-transform transform group hover:scale-105">
        <CardSkeletonContainer>
          <Image
            src="/pushup.webp"
            alt="A person doing pushups"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform group-hover:scale-105"
          />
        </CardSkeletonContainer>
        <CardTitle>Be Better Every Day</CardTitle>
        <CardDescription>
          Push your limits, one workout at a time. Consistency and progress are
          the key to long-term fitness success!
        </CardDescription>
      </Card>

      {/* Fitness Passion Card */}
      <Card className="col-span-1 md:col-span-1 lg:col-span-1 transition-transform transform group hover:scale-105">
        <CardSkeletonContainer>
          <Image
            src="/gym_dumbell.webp"
            alt="A gym with dumbbells"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform group-hover:scale-105"
          />
        </CardSkeletonContainer>
        <CardTitle>Your Fitness, Our Passion</CardTitle>
        <CardDescription>
          Personalized workouts that adapt to your journey. We focus on you,
          making your progress our priority.
        </CardDescription>
      </Card>

      {/* Tracking Card */}
      <Card className="col-span-1 md:col-span-2 lg:col-span-2 transition-transform transform group hover:scale-105">
        <CardSkeletonContainer>
          <Image
            src="/deadlift.webp"
            alt="A person doing deadlifts"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform group-hover:scale-105"
          />
        </CardSkeletonContainer>
        <CardTitle>Start Tracking Today</CardTitle>
        <CardDescription>
          Stay motivated, track your progress, and achieve more with each
          session. Fitness has never been easier with eGym. It&apos;s time to
          level up and take charge of your journey!
        </CardDescription>
      </Card>

      {/* About Us Section */}
      <h1
        id="about-us"
        className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-left pt-10 text-[#c99e46]"
      >
        About Us!
      </h1>
      <p className="col-span-1 md:col-span-2 lg:col-span-3 text-base sm:text-lg text-gray-100 mt-4">
        Welcome to <span className="font-semibold text-[#c99e46]">eGym</span>,
        the fitness tracking app designed to help you unlock your full
        potential. We make tracking your progress fun, engaging, and insightful.
      </p>
      <p className="col-span-1 md:col-span-2 lg:col-span-3 text-base sm:text-lg text-gray-100 mt-4">
        Whether you&apos;re lifting, running, or practicing yoga, eGym supports
        you every step of the way. No matter your fitness level, we’ll keep you
        motivated and on track.
      </p>
      <p className="col-span-1 md:col-span-2 lg:col-span-3 text-base sm:text-lg text-gray-100 mt-4">
        Join us today and start turning your fitness dreams into reality!
      </p>

      {/* Random Fact Section */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 p-6 bg-[#c99e46] rounded-lg text-center text-white">
        <h3 className="text-lg sm:text-xl font-semibold">Random Fact!</h3>
        <p className="mt-2 text-sm sm:text-base">
          Did you know? Our community is growing by 20% every month! Join us
          today and be part of the fitness revolution.
        </p>
      </div>
    </div>
  )
}
