import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-cyberkarta-light py-3 px-16 flex items-center">
      <Link href="/" className="mr-20 cursor-pointer">
        <svg width="177" height="40" viewBox="0 0 177 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#203672"></circle>
          <path
            d="M26.0534 26.4066L25.4993 26.205V12.4798L23.6103 13.1854L23.073 13.387V7.47353L17.0198 4.13042L16.9442 4.08842V14.3445L18.2204 13.8658V6.33956L21.8136 8.35551V13.849L20.6467 14.2773V9.11149L19.3705 8.38071V14.7645L14.5179 16.5789V22.1143L12.0916 21.2156V34H20.6467V29.1197C20.4452 29.0189 19.3454 28.4814 19.3454 28.4814L19.3789 32.6392H13.3677V23.0383L16.9526 24.3739V26.3814C17.3724 26.6166 17.7754 26.8434 18.17 27.0618C18.1952 27.0702 18.212 27.087 18.2204 27.0954V24.8527L22.7959 26.5494L23.6523 26.877L23.7698 26.919L24.24 27.0954L24.6681 27.255L25.4993 27.5658H25.5077L26.6579 27.9942V32.6392H23.0646V30.2117C22.6448 30.0269 22.225 29.8421 21.8053 29.6573V34H27.9256V27.1122L26.8678 26.709L26.0534 26.4066ZM24.24 25.7262H24.2148L22.8883 25.2306L20.6467 24.3991V18.3512L21.8136 17.9228V23.5003L23.073 23.9791V16.1001L19.3705 17.4693V23.9203L15.7857 22.5847V17.4609L16.9442 17.0325V21.7027L18.2204 22.1647V16.5537L24.0301 14.3949L24.2484 14.3109V25.7262H24.24Z"
            fill="#FAFAFA"
          ></path>
          <path
            d="M53.3333 25.2295V14.7545C53.3333 12.1996 54.3695 10.6667 57.2389 10.6667C60.1083 10.6667 61.1445 12.1996 61.1445 14.7545V15.9681H58.4504V14.0838C58.4504 13.4611 58.1475 13.1258 57.2389 13.1258C56.3303 13.1258 56.0274 13.4611 56.0274 14.0838V25.9002C56.0274 26.523 56.3303 26.8583 57.2389 26.8583C58.1475 26.8583 58.4504 26.523 58.4504 25.9002V24.016H61.1445V25.2295C61.1445 27.8004 60.1083 29.3333 57.2389 29.3333C54.3695 29.3333 53.3333 27.8004 53.3333 25.2295Z"
            fill="#203672"
          ></path>
          <path
            d="M75.0293 10.9221L71.6657 22.483V29.0619H68.9717V22.483L65.6081 10.9221H68.3022L70.3267 18.9381L72.3512 10.9221H75.0293Z"
            fill="#203672"
          ></path>
          <path
            d="M79.5884 10.9221H84.4026C85.9489 10.9221 86.9691 11.9122 86.9691 13.4611V18.5229C86.9691 19.3214 86.7619 19.7844 85.9011 19.992C86.7619 20.1996 86.9691 20.6627 86.9691 21.477V26.5389C86.9691 28.0878 85.9648 29.0778 84.4026 29.0778H79.5884V10.9221ZM83.749 18.8583C84.1316 18.8583 84.2751 18.7305 84.2751 18.3473V13.9082C84.2751 13.5249 84.1476 13.3972 83.749 13.3972H82.2824V18.8583H83.749ZM83.749 26.6028C84.1316 26.6028 84.2751 26.475 84.2751 26.0918V21.6527C84.2751 21.2695 84.1476 21.1417 83.749 21.1417H82.2824V26.6028H83.749Z"
            fill="#203672"
          ></path>
          <path
            d="M99.6105 26.6028V29.0619H92.7239V10.9221H99.4989V13.3812H95.418V18.2036H98.3671V20.6627H95.418V26.6028H99.6105Z"
            fill="#203672"
          ></path>
          <path
            d="M104.776 10.9221H109.59C111.136 10.9221 112.156 11.9122 112.156 13.4611V17.9002C112.156 19.1776 111.853 20.0239 110.578 20.3114C112.124 20.7425 112.332 21.5249 112.332 22.8503V26.8742C112.332 27.6567 112.507 28.4072 112.842 29.0778H110.387C109.733 28.2794 109.606 27.4491 109.606 25.8683V22.6906C109.606 21.6208 109.064 21.2695 108.203 21.2695H107.454V29.0778H104.76V10.9221H104.776ZM108.936 18.8583C109.319 18.8583 109.446 18.7305 109.446 18.3473V13.9082C109.446 13.5249 109.319 13.3972 108.936 13.3972H107.47V18.8583H108.936Z"
            fill="#203672"
          ></path>
          <path
            d="M126.44 10.9221L123.124 17.501L126.998 29.0619H124.208L121.466 20.7744L120.717 22.2754V29.0619H118.023V10.9221H120.717V16.7824L123.538 10.9221H126.44Z"
            fill="#203672"
          ></path>
          <path
            d="M133.486 10.9221H136.849L139.288 29.0619H136.674L136.275 25.6766H134.044L133.661 29.0778H131.047L133.486 10.9221ZM135.988 23.2176L135.159 15.1058L134.33 23.2176H135.988Z"
            fill="#203672"
          ></path>
          <path
            d="M144.118 10.9221H148.933C150.479 10.9221 151.499 11.9122 151.499 13.4611V17.9002C151.499 19.1776 151.196 20.0239 149.921 20.3114C151.483 20.7425 151.674 21.5249 151.674 22.8503V26.8742C151.674 27.6567 151.85 28.4072 152.185 29.0778H149.73C149.076 28.2794 148.948 27.4491 148.948 25.8683V22.6906C148.948 21.6208 148.406 21.2695 147.546 21.2695H146.796V29.0778H144.102V10.9221H144.118ZM148.279 18.8583C148.662 18.8583 148.789 18.7305 148.789 18.3473V13.9082C148.789 13.5249 148.662 13.3972 148.279 13.3972H146.812V18.8583H148.279Z"
            fill="#203672"
          ></path>
          <path
            d="M164.411 13.3812H161.765V29.0619H159.071V13.3812H156.425V10.9221H164.396V13.3812H164.411Z"
            fill="#203672"
          ></path>
          <path
            d="M170.246 10.9221H173.609L176.048 29.0619H173.434L173.036 25.6766H170.804L170.421 29.0778H167.807L170.246 10.9221ZM172.749 23.2176L171.92 15.1058L171.091 23.2176H172.749Z"
            fill="#203672"
          ></path>
        </svg>
      </Link>
      <div className="flex justify-between w-full font-Nunito items-center text-lg font-bold">
        <ul className="flex text-cyberkarta-blue">
          <li className="px-4 py-5 hover:text-blue-600 cursor-pointer">Home</li>
          <li className="px-4 py-5 hover:text-blue-600 cursor-pointer">Kelas</li>
          <li className="px-4 py-5 hover:text-blue-600 cursor-pointer">Blog</li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="text-cyberkarta-blue cursor-pointer">Masuk</div>
          <div className="bg-cyberkarta-blue px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:shadow-lg">Daftar</div>
        </div>
      </div>
    </div>
  );
};
