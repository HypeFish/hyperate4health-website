import Image from "next/image";

export default function Home() {
  //make a page to detail the download of an app named Hyperate4Health
  return (
    <main  className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono" >
        <title>Hyperate4Health</title>
        <header className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-400 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-full lg:border lg:bg-gray-200 lg:p-3 lg:dark:bg-zinc-800/30 ">
          Hyperate4Health
        </header>
        <br></br>
        <p className = "relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          Hyperate4Health is a desktop app that helps you track your heart rate and blood pressure. Designed as a tool used for research, Hyperate4Health is a free and open source app that can be used by anyone. Hyperate4Health is currently only available for MacOS. Hyperate4Health is compatible with any device which can connect to the Hyperate website.
        </p>
        <p className = "relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          In order to use Hyperate4Health, you must have Java/JDK 20 installed on your computer. If you do not have Java installed, you can download it here: <a href="https://www.oracle.com/java/technologies/downloads/">Java Download</a>
        </p>

        <p>
          <a href='https://www.mediafire.com/file/fjg0joj0auk0gm7/Hyperate4Health-1.0.zip/file' download> Download ZIP for MacOS</a>
        </p>

        <p>
          <a href='https://www.mediafire.com/file/p51wgkuasj3b1og/Hyperate4Health.zip/file' download> Download ZIP for Windows </a>
        </p>
        
        <Image src="/heart.png" alt="Hyperate Icon" width={200} height={200} />
        <br></br>
        <p>
          *Note: On Windows, the app will be detected as a virus. This is because the app is not signed. To run the app, you must click "More Info" and then "Run Anyway". The app is safe to run.
        </p>

        <footer className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <p>© Hyperate4Health 2023</p>
          <p>Hyperate4Health is a trademark of HypeFish</p>
          <p>Hyperate4Health is a free and open source app</p>
          <p><a href="https://github.com/HypeFish/HypeRate4Health_Gui" > Github Source Code</a></p>

        </footer>
      </div >
    </main>
  )
}
