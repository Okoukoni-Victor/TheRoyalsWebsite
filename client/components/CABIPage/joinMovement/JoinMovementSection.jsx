import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        aria-hidden="true"
        focusable="false"
        className="relative"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.374 1.89038C2.715 2.64838 1.5 4.45238 1.5 6.60338C1.5 8.80038 2.4 10.4944 3.688 11.9464C4.751 13.1424 6.037 14.1344 7.291 15.1004C7.58967 15.3304 7.88467 15.5597 8.176 15.7884C8.702 16.2034 9.171 16.5664 9.624 16.8314C10.077 17.0964 10.44 17.2164 10.75 17.2164C11.06 17.2164 11.424 17.0964 11.876 16.8314C12.329 16.5664 12.798 16.2034 13.324 15.7884C13.6153 15.559 13.9103 15.33 14.209 15.1014C15.463 14.1334 16.749 13.1424 17.812 11.9464C19.101 10.4944 20 8.80038 20 6.60338C20 4.45338 18.785 2.64838 17.126 1.89038C15.514 1.15338 13.348 1.34838 11.29 3.48738C11.22 3.55996 11.1362 3.6177 11.0434 3.65714C10.9506 3.69657 10.8508 3.7169 10.75 3.7169C10.6492 3.7169 10.5494 3.69657 10.4566 3.65714C10.3638 3.6177 10.28 3.55996 10.21 3.48738C8.152 1.34838 5.986 1.15338 4.374 1.89038ZM10.75 1.92638C8.438 -0.143622 5.849 -0.433622 3.75 0.525378C1.536 1.54038 0 3.89238 0 6.60438C0 9.26938 1.11 11.3034 2.567 12.9434C3.733 14.2564 5.16 15.3554 6.421 16.3254C6.70767 16.5454 6.983 16.7594 7.247 16.9674C7.76 17.3714 8.31 17.8014 8.867 18.1274C9.424 18.4534 10.06 18.7174 10.75 18.7174C11.44 18.7174 12.076 18.4524 12.633 18.1274C13.191 17.8014 13.74 17.3714 14.253 16.9674C14.517 16.7594 14.7923 16.5454 15.079 16.3254C16.339 15.3554 17.767 14.2554 18.933 12.9434C20.39 11.3034 21.5 9.26938 21.5 6.60438C21.5 3.89238 19.965 1.54038 17.75 0.527378C15.651 -0.432622 13.062 -0.142622 10.75 1.92638Z"
          fill="#121212"
        />
      </svg>
    ),
    title: "Sponsor a Student",
    description:
      "Provide clothing and learning support to help a boy stay confident and in school.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        focusable="false"
        className="relative"
      >
        <path
          d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C4.47 20 0 15.5 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10.5 5V10.25L15 12.92L14.25 14.15L9 11V5H10.5Z"
          fill="#121212"
        />
      </svg>
    ),
    title: "Volunteer",
    description:
      "Offer your time and skills to support boys and strengthen community programs.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        aria-hidden="true"
        focusable="false"
        className="relative"
      >
        <path
          d="M10.9788 2C14.8788 2 17.9788 5.1 17.9788 9C17.9788 11.8 16.3788 14.2 13.9788 15.3V20H6.97878V17H5.97878C4.87878 17 3.97878 16.1 3.97878 15V12H2.47878C2.07878 12 1.77878 11.5 2.07878 11.2L3.97878 8.7C4.17878 4.9 7.17877 2 10.9788 2ZM10.9788 0C6.37878 0 2.57878 3.4 2.07878 7.9L0.478775 10C-0.121225 10.8 -0.121225 11.8 0.278775 12.6C0.678775 13.3 1.27878 13.8 1.97878 13.9V15C1.97878 16.9 3.27878 18.4 4.97878 18.9V22H15.9788V16.5C18.4788 14.8 19.9788 12.1 19.9788 9C19.9788 4 15.9788 0 10.9788 0ZM11.9788 13H9.97878V12H11.9788V13ZM13.5788 8.5C13.2788 8.9 12.9788 9.3 12.4788 9.6V11H9.47878V9.6C8.07878 8.8 7.57877 6.9 8.37877 5.5C9.17877 4.1 11.0788 3.6 12.4788 4.4C13.8788 5.2 14.3788 7.1 13.5788 8.5Z"
          fill="#121212"
        />
      </svg>
    ),
    title: "Suggest",
    description:
      "Know a boy in need? Share a case and help us extend support where it matters.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        aria-hidden="true"
        focusable="false"
        className="relative"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.65629 3.23462V2.06462C4.65643 1.64564 4.80688 1.24062 5.0803 0.923155C5.35372 0.605694 5.73196 0.396863 6.14629 0.334615L7.36629 0.151615C8.71878 -0.0505385 10.0938 -0.0505385 11.4463 0.151615L12.6663 0.334615C13.0806 0.396863 13.4589 0.605694 13.7323 0.923155C14.0057 1.24062 14.1562 1.64564 14.1563 2.06462V3.23462L15.8703 3.37262C16.508 3.42413 17.11 3.68798 17.5801 4.12198C18.0501 4.55597 18.3611 5.13505 18.4633 5.76662C18.929 8.63919 18.929 11.568 18.4633 14.4406C18.3611 15.0722 18.0501 15.6513 17.5801 16.0853C17.11 16.5192 16.508 16.7831 15.8703 16.8346L13.9983 16.9846C10.9419 17.2316 7.87064 17.2316 4.81429 16.9846L2.94229 16.8346C2.30459 16.7831 1.70258 16.5192 1.23251 16.0853C0.762436 15.6513 0.451457 15.0722 0.349291 14.4406C-0.11643 11.568 -0.11643 8.63919 0.349291 5.76662C0.45166 5.13523 0.762728 4.55638 1.23278 4.12259C1.70283 3.68879 2.30473 3.42508 2.94229 3.37362L4.65629 3.23462ZM7.58929 1.63462C8.79394 1.45469 10.0186 1.45469 11.2233 1.63462L12.4433 1.81762C12.5025 1.82647 12.5565 1.85627 12.5956 1.9016C12.6347 1.94692 12.6562 2.00477 12.6563 2.06462V3.12962C10.4914 3.00598 8.32119 3.00598 6.15629 3.12962V2.06362C6.15635 2.00377 6.17788 1.94592 6.21696 1.9006C6.25605 1.85527 6.3101 1.82547 6.36929 1.81662L7.58929 1.63462ZM4.93529 4.71662C7.91129 4.47662 10.9013 4.47662 13.8773 4.71662L15.7493 4.86862C16.0526 4.89289 16.3391 5.0182 16.5628 5.22452C16.7865 5.43083 16.9346 5.70621 16.9833 6.00662C17.0453 6.39128 17.0986 6.77728 17.1433 7.16462C14.7362 8.3494 12.0892 8.96554 9.40629 8.96554C6.72342 8.96554 4.07638 8.3494 1.66929 7.16462C1.71329 6.77795 1.76662 6.39195 1.82929 6.00662C1.878 5.70621 2.02605 5.43083 2.24977 5.22452C2.47349 5.0182 2.75994 4.89289 3.06329 4.86862L4.93529 4.71662ZM1.53529 8.76062C4.00717 9.88428 6.691 10.4657 9.40629 10.4657C12.1216 10.4657 14.8054 9.88428 17.2773 8.76062C17.3731 10.5792 17.2745 12.4029 16.9833 14.2006C16.9348 14.5012 16.7868 14.7768 16.5631 14.9833C16.3394 15.1898 16.0528 15.3153 15.7493 15.3396L13.8773 15.4896C10.9013 15.7296 7.91129 15.7296 4.93529 15.4896L3.06329 15.3396C2.75979 15.3153 2.47323 15.1898 2.2495 14.9833C2.02576 14.7768 1.87779 14.5012 1.82929 14.2006C1.53829 12.4006 1.43929 10.5766 1.53529 8.76062Z"
          fill="#121212"
        />
      </svg>
    ),
    title: "Partner With Us",
    description:
      "Work with us to expand support and empower more boys through shared impact.",
  },
];

export default function JoinMovementSection() {
  return (
    <section className="section !pb-0 !px-0 lg:!px-3 bg-white">
      <div className="flex flex-col gap-[66px] mx-auto pt-[82px] pb-[50px] px-[29px] md:px-[39px] lg:px-[85px] lg:rounded-[14px] bg-purple-700">
        <div className="flex flex-col items-center gap-[19px]">
          <h2 className="!leading-[120%] !tracking-[-5%] text-center !text-[41px] md:!text-[51px] !font-black text-white">
            Join the Movement
          </h2>

          <p className="max-w-[573px] !leading-[150%] !tracking-[0.2%] text-center !text-[15px] text-grey-50">
            Be part of a community that shows up when it matters most,
            responding quickly to urgent needs and turning compassion into
            meaningful action.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <li
              key={index}
              className="relative overflow-hidden flex flex-col justify-between h-[412.86px] lg:h-[435.86px] px-[23px] py-[32px] rounded-[18.7px] bg-purple-50"
            >
              {/* Watermark */}
              <Image
                src="/patterns/join-movement-card-pattern.svg"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover absolute inset-0 pointer-events-none"
              />

              {/* Icon */}
              <div className="relative flex justify-center items-center w-[54.86px] h-[54.86px]">
                <Image
                  src="/assets/octagon.svg"
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-cover absolute inset-0"
                />

                {card.icon}
              </div>

              <div className="flex flex-col gap-[28px]">
                <div className="flex flex-col gap-4">
                  <h3 className="!leading-[120%] !tracking-[-5%] !text-[24px] text-grey-700">
                    {card.title}
                  </h3>

                  <p className="!leading-[150%] !tracking-[0.2%] !text-[15px] text-grey-400">
                    {card.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="z-1 inline-flex items-center gap-[45px] w-fit py-[9px] ps-[25px] pe-[10px] rounded-full bg-white"
                >
                  <span className="!leading-[150%] !tracking-[0.2%] !text-[15px] text-grey-800">
                    Get Involved
                  </span>

                  <span className="p-[8.85px] rounded-full bg-purple-700">
                    <ArrowRight className="w-[19.3px] h-[19.3px] text-white" />
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
