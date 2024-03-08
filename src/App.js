import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App(){
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Disgital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title = "Alexa" handle = "alexa@99" image = {AlexaImage} description="Alexa is the intelligent cloud-based voice AI that you can talk to on [your product]. Speak to Alexa through [your product] to play music, hear the news, check weather, control smart home devices, and more."/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title = "Cortana" handle = "cortana@32" image = {CortanaImage} description="Cortana is Microsoft's personal productivity assistant that helps you save time and focus attention on what matters most. To get started, select the Cortana icon on the taskbar. If you're not sure what to say, try asking, What can you do?"/>                
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title = "Siri" handle = "siri@01" image = {SiriImage} description="Siri is Apple's virtual assistant for iOS, macOS, tvOS and watchOS devices that uses voice recognition and is powered by artificial intelligence (AI)."/>          
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;