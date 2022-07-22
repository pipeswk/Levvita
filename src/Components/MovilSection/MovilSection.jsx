import React from 'react'
import Image from 'next/image'

const MovilSection = ( { imgPosition, textIsList, titulo, imagen, texto, list } ) => {
  return (
    <div className='d-md-none'>
        {imgPosition === 'UP' && textIsList === false ? (
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2 className='fw-bolder'>{titulo}</h2>
                    <Image
                        src={imagen}
                        width={400}
                        height={450}
                        className='border border-5 rounded-3'
                    />
                    <p className='text-start'>{texto}</p>
                </div>
            </div>
        ): imgPosition === 'DOWN' && textIsList === false ? (
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2 className='fw-bolder'>{titulo}</h2>
                    <p className='text-start'>{texto}</p>
                    <Image
                        src={imagen}
                        width={400}
                        height={450}
                        className='border border-5 rounded-3'
                    />
                </div>
            </div>
        ) : imgPosition === 'UP' && textIsList === true ? (
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2 className='fw-bolder'>{titulo}</h2>
                    <Image
                        src={imagen}
                        width={400}
                        height={450}
                        className='border border-5 rounded-3'
                    />
                    <ul>
                        {list.map((item, index) => (
                            <li
                                key={index}
                                className='text-start'
                            >
                                {item}
                            </li>   
                        ))}
                    </ul>
                </div>
            </div>
        ) : imgPosition === 'DOWN' && textIsList === true ? (
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2 className='fw-bolder'>{titulo}</h2>
                    <ul>
                        {list.map((item, index) => (
                            <li
                                key={index}
                                className='text-start'
                            >
                                {item}
                            </li>   
                        ))}
                    </ul>
                    <Image
                        src={imagen}
                        width={400}
                        height={450}
                        className='border border-5 rounded-3'
                    />
                </div>
            </div>
        ) : null}
    </div>
  )
}

export default MovilSection