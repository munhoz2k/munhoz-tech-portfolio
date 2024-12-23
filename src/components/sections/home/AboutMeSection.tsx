import portrait from '../../../assets/example-image.png'

export function AboutMeSection() {
  return (
    <div className="flex container items-center justify-center gap-48 mx-auto mt-[10rem]">
      <div className="space-y-8 max-w-2xl">
        <h2 className="font-sora font-bold text-[2rem] dark:text-neutral-50">
          Hi there!
        </h2>

        <p className="font-inter font-normal text-2xl text-neutral-800 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur. Scelerisque cursus neque
          pellentesque eu tempor leo est tortor praesent. Adipiscing euismod
          faucibus proin odio eget aliquet aliquet. Pellentesque sagittis quis
          dui ut. Non posuere convallis ullamcorper quam justo.
        </p>

        <p className="font-inter font-normal text-2xl text-neutral-800 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur. Scelerisque cursus neque
          pellentesque eu tempor leo est tortor praesent. Adipiscing euismod
          faucibus proin odio eget aliquet aliquet. Pellentesque sagittis quis
          dui ut. Non posuere convallis ullamcorper quam justo.
        </p>

        <a
          className="btn-text block w-fit px-6 py-3 rounded-md bg-life-green-600 text-neutral-50
          transition-all duration-200 hover:scale-110 hover:shadow-md"
          href="/"
        >
          Ler Mais
        </a>
      </div>

      <div className="">
        <img
          className="custom-img-shadow rounded-md translate-y-5"
          src={portrait}
          width={400}
          alt="Uma foto minha!"
        />
      </div>
    </div>
  )
}
