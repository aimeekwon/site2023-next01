import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <section id="introSection" className="intro__wrap section bg_blue">
    <h3 className="blind">커리큘럼 소개</h3>

    <div className="intro__inner container">
      <div className="intro__title">
        <span>frontend</span>
        <h3>프론트앤드<br /> 과정</h3>

        <p>프론트앤드 과정입니다</p>
      </div>
      <div className="intro__desc">
        <div>
          <h4 className="icon-bg1">React.js</h4>
          <p>프론트앤드 과정입니다</p>
        </div>
        <div>
          <h4 className="icon-bg2">Node.js</h4>
          <p>프론트앤드 과정입니다</p>
        </div>
        <div>
          <h4 className="icon-bg3">Vue.js</h4>
          <p>프론트앤드 과정입니다</p>
        </div>
        <div>
          <h4 className="icon-bg4">Next.js</h4>
          <p>프론트앤드 과정입니다</p>
        </div>


      </div>
    </div>
  </section>
  )
}

export default Intro
