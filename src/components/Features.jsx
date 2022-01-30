import React from 'react';
import FeatureType1 from './Features/FeatureType1'
import FeatureType2 from './Features/FeatureType2'

function Features() {
    const imageFile = (image) => {
        return(`/img/${image}.png`)
    }

    return (
        <div id='features' className='color-switch text-var-black'>
            <FeatureType1
                subtitle="Effortless Validation for"
                title="Management"
                paragraph1="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person."
                subtitle2="Accessory makers"
                paragraph2="While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun"
                subtitle3="Alterationists"
                paragraph3="If you are looking for a new way to promote your business that won’t cost you more money,"
                image={imageFile('feature-1')}
                textSmall={{ order: 'last' }}
                textLarge={{ order: 'first' }}
                imageSmall={{ order: 'first' }, 12}
                imageLarge={{ order: 'last' }, 6}
            />
            <FeatureType2
                subtitle="Easier decision making for"
                title="Customer Support"
                paragraph1="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person."
                listitem1="Never worry about overpaying for your energy again."
                listitem2="We will only switch you to energy companies that we trust and will treat you right"
                listitem3="We track the markets daily and know where the savings are."
                image={imageFile('feature-2')}
                imageSmall={12}
                imageLarge={6}
            />
            <FeatureType1
                subtitle="Optimisation for"
                title="Collaborative"
                paragraph1="Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior."
                subtitle2="Accessory makers"
                paragraph2="While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun"
                subtitle3="Alterationists"
                paragraph3="If you are looking for a new way to promote your business that won’t cost you more money,"
                image={imageFile('feature-3')}
                textSmall={{ order: 'last' }}
                textLarge={{ order: 'first' }}
                imageSmall={{ order: 'first' }, 12}
                imageLarge={{ order: 'last' }, 6}
            />
        </div>
    )
}

export default Features