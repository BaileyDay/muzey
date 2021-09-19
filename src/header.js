import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://gmail.us5.list-manage.com/subscribe/post?u=bffd088a27d203252b3da569e&amp;id=0b7582dbd9"
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
 <div>
    <div className="relative flex items-center max-w-md mx-6 -mt-20 overflow-hidden text-center rounded-lg md:mx-auto" data-dashlane-rid="8c1369911fca2007" data-form-type="other">
   
                <input type="text" name="email" placeholder="Email Address" className="w-full h-12 px-6 py-2 font-medium text-black focus:outline-none" data-dashlane-rid="f48f9968af530eee" data-kwimpalastatus="alive" data-kwimpalaid="1631844282122-8" data-form-type="email" ref={node => (email = node)}/>
                <span className="relative top-0 right-0 block">
                    <button type="button" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-gray-500 border border-transparent hover:bg-blue-900 focus:outline-none active:bg-blue-900" data-dashlane-rid="5dc05f0cef226001" data-dashlane-label="true" data-form-type="action" onClick={submit}>
                        Submit
                    </button>
                </span>
            <span data-dashlanecreated="true" ></span></div>
    </div>
  );
};

function Header(){
    return(
    <div>
<section className="w-full px-3 antialiased lg:px-6">
    <div className="mx-auto max-w-7xl">
        <div className="container py-32 mx-auto text-center sm:px-4">

            <h1 className="text-6xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Muzey</span></h1>
            <div className="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl font-mono ">The evolution of blockchain and music streaming.</div>
        </div>
    </div>
    <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    </section>
</div>


    )
}
export default Header;