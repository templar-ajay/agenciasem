import { PrismicNextImage } from "@prismicio/next";

const Background = ({
  children,
  backgroundImages,
}: {
  children: any;
  backgroundImages: any;
}) => {
  if (backgroundImages) {
    const bgImages = backgroundImages.map((x: any) => x.stroke_image);
    return (
      <div className="bg-darkBG text-white h-fit overflow-hidden relative">
        {bgImages[0] && (
          <div className="absolute hero-arrow hidden tablet:block -top-[42rem] tablet:-left-[15rem] largeTablet:block largeTablet:left-[-15rem] desktop:-left-[0rem]">
            <PrismicNextImage
              style={{ marginTop: 550 }}
              width={500}
              height={500}
              field={bgImages[0]}
              loading="eager"
            />
          </div>
        )}

        {bgImages[1] && (
          <div
            className={`background-stroke-left absolute right-[-15rem] tablet:-right-[8rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem] top-[30rem] largeTablet:top-[10rem]`}
          >
            <PrismicNextImage
              width={500}
              height={500}
              field={bgImages[1]}
              loading="eager"
            />
          </div>
        )}

        {bgImages
          .filter((_: any, i: number) => i + 1 > 2)
          .map((stroke_image: any, index: number) => {
            const top = 60 * (index + 1);
            const topTablet = top - 20;
            if ((index + 1) % 2) {
              return (
                <div
                  key={index}
                  className={`background-stroke-left absolute  left-[-15rem] tablet:-left-[8rem]  largeTablet:laptop:-left-[6rem] laptop:-left-[4rem] desktop:-left-[3rem] top-[${top}rem] largeTablet:top-[${topTablet}rem]`}
                >
                  <PrismicNextImage
                    width={500}
                    height={500}
                    field={stroke_image}
                  />
                </div>
              );
            }
            return (
              <div
                key={index}
                className={`background-stroke-left absolute right-[-15rem] tablet:-right-[8rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem] top-[${top}rem] largeTablet:top-[${topTablet}rem]`}
              >
                <PrismicNextImage
                  height={500}
                  width={500}
                  field={stroke_image}
                />
              </div>
            );
          })}

        <div className="relative">{children}</div>
        <div className="top-[30rem] top-[10rem] top-[60rem] top-[40rem] top-[90rem] top-[70rem] top-[120rem] top-[100rem] top-[150rem] top-[130rem] top-[180rem] top-[160rem] top-[210rem] top-[190rem] top-[240rem] top-[220rem] top-[270rem] top-[250rem] top-[300rem] top-[280rem] top-[330rem] top-[310rem] top-[360rem] top-[340rem] top-[390rem] top-[370rem] top-[420rem] top-[400rem] top-[450rem] top-[430rem] top-[480rem] top-[460rem] top-[510rem] top-[490rem] top-[540rem] top-[520rem] top-[570rem] top-[550rem] top-[600rem] top-[580rem] top-[630rem] top-[610rem] top-[660rem] top-[640rem] top-[690rem] top-[670rem] top-[720rem] top-[700rem] top-[750rem] top-[730rem] top-[780rem] top-[760rem] top-[810rem] top-[790rem] top-[840rem] top-[820rem] top-[870rem] top-[850rem] top-[900rem] top-[880rem] top-[930rem] top-[910rem] top-[960rem] top-[950rem] top-[990rem] top-[970rem] top-[1020rem] top-[1000rem] top-[1050rem] top-[1030rem] top-[1080rem] top-[1060rem] top-[1110rem] top-[1090rem] top-[1140rem] top-[1120rem] top-[1170rem] top-[1150rem] top-[1200rem] top-[1180rem] top-[1230rem] top-[1210rem] top-[1260rem] top-[1240rem] top-[1290rem] top-[1270rem] top-[1320rem] top-[1300rem] top-[1330rem] top-[1310rem]" />
      </div>
    );
  }
  return <>{children}</>;
};

export default Background;
