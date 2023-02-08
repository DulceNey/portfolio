import DarkModeSwitch from "../buttons/darkModeSwitch";

const Banner = () => {
    return (
        <div className='bg-[url("https://cdn.discordapp.com/attachments/822257667257925665/1020286872028729395/Oh_no_2.jpg")] dark:bg-[url("https://cdn.discordapp.com/attachments/822257667257925665/1020286871806419054/Oh_no_1.jpg")] bg-cover bg-center w-full h-auto'>
          <h1 className="ml-4  text-lg italic text-center text-black text-6xl mb-8 dark:text-slate-300 pt-60">
            Hey! Welcome to my website. 
          </h1>
          <h2 className="text-2xl italic text-center text-black mt-1 dark:text-slate-300 pb-60">
            Im a full stack webdeveloper. 
            <br/>
            Please, feel free to check my portfolio.
          </h2>
<h3 className="text-black dark:text-slate-300 pb-8 text-center text 2xl">Psst... Do you want to embrace the darkness? <DarkModeSwitch/>
<br/>
Click again if you preffer to return to the light</h3>
        </div>
    );
  };
  
  export default Banner;