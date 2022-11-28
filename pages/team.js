import Image from 'next/image';
import LayoutNav from '../components/LayoutNav';
import arsya from '../public/images/ourteam/arsya.png';
import ali from '../public/images/ourteam/ali.png';
import algamma from '../public/images/ourteam/algamma.png';
import sarah from '../public/images/ourteam/sarah.png';
import rangga from '../public/images/ourteam/rangga.png';
import adam from '../public/images/ourteam/adam.png';

const team = () => {
  return (
    <LayoutNav>
      <div className="min-h-screen text-white flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl text-yellow-300 font-bold">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className=" flex flex-col items-center">
            <div>
              <Image
                src={arsya}
                width={250}
                height={250}
                className=""
                objectFit="responsive"
              />
            </div>
            <p className="text-xl font-semibold">Muhammad Arsya Putra</p>
            <p>Front-End</p>
          </div>
          {/* <div className=" flex flex-col items-center">
            <div>
              <Image
                src={rangga}
                width={250}
                height={250}
                className=""
                objectFit="responsive"
              />
            </div>
            <p className="text-xl font-semibold">Dwi Rangga Rhaditya</p>
            <p>Front-End</p>
          </div>{' '} */}
          {/* <div className=" flex flex-col items-center">
            <div>
              <Image
                src={sarah}
                width={250}
                height={250}
                className=""
                objectFit="responsive"
              />
            </div>
            <p className="text-xl font-semibold">Sarah Puspa Dewi</p>
            <p>Database Engineer</p>
          </div>{' '} */}
          <div className=" flex flex-col items-center">
            <div>
              <Image
                src={adam}
                width={250}
                height={250}
                className=""
                objectFit="responsive"
              />
            </div>
            <p className="text-xl font-semibold">Adam Yogisyah Putra</p>
            <p>Back-End</p>
          </div>
          <div className=" flex flex-col items-center">
            <div>
              <Image
                src={ali}
                width={250}
                height={250}
                className=""
                objectFit="responsive"
              />
            </div>
            <p className="text-xl font-semibold">Ahmad Ali Masykur</p>
            <p>Back-End</p>
          </div>
            {/* <div className=" flex flex-col items-center">
              <div>
                <Image
                  src={algamma}
                  width={250}
                  height={250}
                  className=""
                  objectFit="responsive"
                />
              </div>
              <p className="text-xl font-semibold">Algamma Paramayudha</p>
              <p>UI Designer</p>
            </div> */}
        </div>
      </div>
    </LayoutNav>
  );
};

export default team;
