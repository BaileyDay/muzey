
function Header(){
    return(
    <div>
<section class="w-full px-3 antialiased lg:px-6">
    <div class="mx-auto max-w-7xl">
        <nav class="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
            <div class="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                <a href="#_" class="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                </a>
                <div class="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative">
                    <div class="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <div class="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                            <a href="#_" class="w-full pl-6 mr-0 text-indigo-100 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">Sign In</a>
                            <a href="#_" class="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-500 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent hover:bg-white focus:outline-none focus:border-indigo-600 focus:shadow-indigo-NaN active:bg-indigo-600 rounded-lg">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container py-32 mx-auto text-center sm:px-4">

            <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Muzey</span></h1>
            <div class="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl font-mono ">The evolution of blockchain and music streaming.</div>
            <div class="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-lg" data-dashlane-rid="8c1369911fca2007" data-form-type="other">
                <input type="text" name="email" placeholder="Email Address" class="w-full h-12 px-6 py-2 font-medium text-indigo-500 focus:outline-none" data-dashlane-rid="f48f9968af530eee" data-kwimpalastatus="alive" data-kwimpalaid="1631844282122-8" data-form-type="email"/>
                <span class="relative top-0 right-0 block">
                    <button type="button" class="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-gray-500 border border-transparent hover:bg-indigo-600 focus:outline-none active:bg-indigo-600" data-dashlane-rid="5dc05f0cef226001" data-dashlane-label="true" data-form-type="action">
                        Sign Up
                    </button>
                </span>
            <span data-dashlanecreated="true" ></span></div>
        </div>
    </div>
    </section>
</div>

    )
}
export default Header;