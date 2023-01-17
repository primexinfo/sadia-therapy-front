import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './stepper.css'
const Stepper = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div class="wrapper">
  <ol class="c-stepper">
  <li class="c-stepper__item"><h1 data-aos="fade-right"   class="c-stepper__title"> Step 1</h1>
        <div  data-aos="fade-left" class="c-stepper__content">
            
            <h2 class='c-stepper__package-name'>Free No-Obligation 20-minute Discovery Call</h2>
            <p class='c-stepper__package-desc'>No obligation 20 minutes consultation is available for clients. This will allow us to find out if we are the right fit for each other. You may ask questions to have an idea about my services. I will find out about your pain points to provide the right solution for you. If it is not a good fit, I will point you in the right direction. If we are a good fit to embark on working together, I will send you consent and intake forms which need to be signed and returned with your payment before scheduling a session with me.</p>
        </div>
    </li>
    <li class="c-stepper__item"><h1 data-aos="fade-right"   class="c-stepper__title">Step 2</h1>
        <div data-aos="fade-left" class="c-stepper__content">
            
            <h2 class='c-stepper__package-name'>Hypnotherapy Session Online</h2>
            <p class='c-stepper__package-desc'>The first session which lasts for 1 hour, involves gathering information and explaining how the mind works. While taking the time to know and understand you, I will focus on your strengths and resilience, and build a relationship with you. Consequent sessions are focused on exploring solutions and applying hypnosis. Each session is productively engaging so you can walk away with a sense of relief, peace, and knowledge for your support. A confidential space is offered to explore the thoughts, feelings, and challenges in your life and help you find confidence, happiness, and peace by equipping you with the tools you need to manage your emotions and know yourself. I use creative techniques, tailoring your needs and personality focusing on brain function and positivity.</p>
        </div>
    </li>
    <li class="c-stepper__item"><h1 data-aos="fade-right"   class="c-stepper__title">Step 3</h1>
        <div data-aos="fade-left" class="c-stepper__content">
            
            <h2 class='c-stepper__package-name'>An Audio of Hypnosis</h2>
            <p class='c-stepper__package-desc'>After our first session, I will send a voice recording that you listen to daily along with our sessions. I will send this recording to you via a preferred media so you can download the recording onto your mobile phone or computer for daily listening. The success of your investment depends on the fact that you listen to your recording daily preferably before you go to sleep and whenever you think it is necessary during the day. Repeated listening to your recording will allow the new, positive, and supporting beliefs to be firmly installed. Doing so will break those old unwanted habits and create new neurological pathways, rewiring the brain with new positive suggestions.

</p>
        </div>
    </li>
    <li class="c-stepper__item">  <h1 data-aos="fade-right"  class="c-stepper__title">Step 4</h1>
        <div data-aos="fade-left" class="c-stepper__content">
          
            <h2 class='c-stepper__package-name'>Post-Session Follow-Up</h2>
            <p class='c-stepper__package-desc'>The success of your investment depends on the fact that you work according to our agreed plan which is made during the session and also listen to your recording daily. I will be in touch with you ten days after your session to support you. If needed we will schedule a check-in call.


</p>
        </div>
    </li>
  </ol>
</div>
  )
}

export default Stepper