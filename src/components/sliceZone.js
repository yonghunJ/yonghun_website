import React from 'react';
import Hero from './hero';
import CallToActionGrid from './callToActionGrid';
const SliceZone = ({body}) => {
  console.log(body)
  return (
    <div>
      {body.map( (bodyContent, i) => {
        if (bodyContent.type === 'hero') {
          return (
            <Hero 
              key={i}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image.url}
            />
          )
        } else if (bodyContent.type === 'call_to_action_grid') {
          return (
            <CallToActionGrid 
              key= {i}
              callToActions= {bodyContent.fields}
              title= {bodyContent.primary.section_title}
            />
          )
        }else {
          return null;
        }
      })}
    </div>
  );

};

export default SliceZone;