import exampleImage from '../../../assets/example-image.png'

export function AboutMeSection() {
  return (
    <div className="container mx-auto mt-[5rem]">
      <h1 className="font-sora font-bold text-[3.5rem] text-center text-neutral-900 dark:text-neutral-50">
        Sobre Mim
      </h1>

      <div className="flex justify-center gap-12 mt-[5.625rem]">
        <div>
          <img
            className="rounded-md"
            width={400}
            src={exampleImage}
            alt="Uma foto de Lucas Munhoz"
          />
        </div>

        <div>
          <h2 className="font-sora font-bold text-[2rem] text-neutral-900 dark:text-neutral-50">
            Quote...
          </h2>

          <div
            className="mt-6 space-y-6 max-w-2xl font-inter font-normal text-lg
            text-neutral-700 dark:text-neutral-300"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque cursus neque
              pellentesque eu tempor leo est tortor praesent. Adipiscing euismod
              faucibus proin odio eget aliquet aliquet. Pellentesque sagittis
              quis dui ut. Non posuere convallis ullamcorper quam justo.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque cursus neque
              pellentesque eu tempor leo est tortor praesent. Adipiscing euismod
              faucibus proin odio eget aliquet aliquet. Pellentesque sagittis
              quis dui ut. Non posuere convallis ullamcorper quam justo.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque cursus neque
              pellentesque eu tempor leo est tortor praesent. Adipiscing euismod
              faucibus proin odio eget aliquet aliquet. Pellentesque sagittis
              quis dui ut. Non posuere convallis ullamcorper quam justo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
