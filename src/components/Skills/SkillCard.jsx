import React from 'react'

const SkillCard = ({img, alt, clase, skill}) => {
  return (
    <div className="cont-skill col-xl-1 py-2 px-3 d-flex flex-column align-items-center justify-content-center my-2">
      <img src={img} alt={alt} className={clase} />
      <span className="name-skill pt-2">{skill}</span>
    </div>
  );
}

export default SkillCard

