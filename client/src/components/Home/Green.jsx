import React ,{useRef,useEffect} from 'react'
import greenPic from '../../images/greenPic.png'

function Green() {
  const tiltWrapperRef = useRef(null);
  const tiltImageRef = useRef(null);

  const handleMouseMove = (event) => {
    const tiltWrapper = tiltWrapperRef.current;
    const tiltImage = tiltImageRef.current;

    if (!tiltWrapper || !tiltImage) return;

    const rect = tiltWrapper.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / centerY) * -50; // Adjust tilt intensity
    const rotateY = (deltaX / centerX) * 50;  // Adjust tilt intensity

    tiltImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const tiltImage = tiltImageRef.current;
    if (tiltImage) {
      tiltImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };


  return (
    <div className='bg-home-green min-h-[1000px]'  onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave} ref={tiltWrapperRef} >
      <div className=' absolute top-72 left-16 flex space-x-32' >
      <div className='ml-12'>
      <div className='text-6xl text-[rgb(210,232,35)] font-[1000] '>
          <p className='text-left'>Everything you are.</p>
          <p className='text-left'>In one, simple link in</p>
          <p className='text-left'>bio.</p>
      </div> 
      <br />
      <div className='text-left text-[rgb(210,232,35)] text-lg font-home-green-font font-semibold'>
        <p>Join 50M+ people using Linktree for their link in bio. One link to help you share</p>
        <p>everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube</p>
        <p>and other social media profiles.</p>
      </div>

      <div className='text-left pt-14'>
        <form action="">
        <input className='w-[243px] h-16 px-[19px] py-[16px] mx-[10px] font-semibold rounded-[8px]' type="text" placeholder='linktr.ee/yourname' />
        <button className='w-[240px] h-16 bg-[rgb(233,192,233)] rounded-full font-semibold'>Claim your Linktree</button>
        </form>
      </div>
    </div>

    
    <div  className='w-[700px]  px-0 tilt-wrapper ' >
      <img ref={tiltImageRef} src={greenPic} alt="" className='w-[800px] h-[600px]'/>
    </div>
  
    </div>
    </div>
  )
}

export default Green