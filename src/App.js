import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Particles from 'react-particles-js'; 
import Header from './header'

const url = "https://gmail.us5.list-manage.com/subscribe/post?u=bffd088a27d203252b3da569e&amp;id=0b7582dbd9"
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div className="w-full max-w-xs ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {status === "sending" && <div className="bg-blue-500 shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ color: "white" }}>sending...</div>}
      {status === "error" && (
        <div
        className="bg-red-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
        className="bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Stay up to date with us!
      </label>
      <input
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <br />
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={submit}>
        Submit
      </button>
    </div>
    </div>
  );
};

function App() {
  return (
    <>
    <div className="h-screen bg-opacity-10 ">
      <div className="text-7xl font-extrabold text-center  pt-48">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-lightgrey to-gray-400 filter drop-shadow-md">
    Muzey
  </span>
  
</div>
<div className="text-center p-4 font-mono font-bold text-gray-200 ">
<span >The evolution of blockchain and music streaming.</span>
</div>
<Particles
className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
<div className="flex justify-center">
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
        </div>
        

    </div>
    <Header/>
    
 </>
  );
}

export default App;
