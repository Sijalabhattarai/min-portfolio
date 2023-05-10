import React from 'react'

const Social = () => {
    const social = [
        {
            name: 'Github',
            link: 'http://www.github.com/sijalabhattarai'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/sijala-bhattarai-92bb11230/',
        },
        {
            name: 'Instagram',
            link: 'http://www.instagram.com/sijala_bhattarai',
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/Sijala-Arts-113562270486212',
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Social</h2>
                <ul className="list-inside">
                    {
                        social.map((social, index) => (
                            <li key={index}>
                                <a href={social.link} target='_blank' className='italic underline text-primary'>
                                    <span>{social.link}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Social